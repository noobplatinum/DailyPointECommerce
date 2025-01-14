const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

// MongoDB: mongodb+srv://jdavidp:<db_password>@cluster0.dulug.mongodb.net/
mongoose.connect("", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

//API
app.get("/", (req, res) => {
    res.send("Hello from the server side");
})

// IMG Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload/imgs");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// IMG Upload Endpoint
app.use('/imgs', express.static('upload/imgs'));

app.post("/upload", upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: "No file uploaded" });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/imgs/${req.file.filename}`
    });
});

// Prod Schema
const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
})

app.post('/addproduct', async(req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length > 0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else
    {
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Product added");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Delete Product
app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Product removed");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Get All Products
app.get('/allproducts', async(req, res) => 
    {
        let products = await Product.find({});
        console.log("All products fetched");
        res.send(products);
    }
)

// User Model
const Users = mongoose.model('Users', {
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
    },
    cartData:{
        type: Object,
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

// Register User Endpoint
app.post('/signup', async(req, res) => {
    let check = await Users.findOne({email: req.body.email});
    if(check)
    {
        return res.status(400).json({success: false, message: "Email already used!"});
    }
    let cart = {};
    for(let i = 0; i < 200; i++)
    {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true, token});
})

//Login Endpoint
app.post('/login', async(req, res)=> {
    let user = await Users.findOne({email: req.body.email});
    if(user)
    {
        const passComparator = req.body.password === user.password;
        if(passComparator)
        {
            const data = {
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true, token});
        }
        else
        {
            res.json({success:false, message: "Incorrect Password!"});
        }
    }
    else
    {
        res.json({success:false, message: "User not found!"});
    }
})

// Endpoint for New Collection
app.get('/newcollection', async(req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("New Collection fetched");
    res.send(newcollection);
})

// Endpoint for Popular in Tech
app.get('/popularintech', async(req, res) => {
    let products = await Product.find({category: "tech"});
    let popularintech = products.slice(0,4);
    console.log("Popular in Tech fetched");
    res.send(popularintech);
})

// User Fetch Middleware
const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token)
    {
        return res.status(401).json({message: "Auth Error"});
    }
    try{
        const decoded = jwt.verify(token, 'secret_ecom');
        req.user = decoded.user;
        next();
    }catch(e){
        console.error(e);
        res.status(401).send({message: "Invalid Token"});
    }
}

// Add to Cart Endpoint
app.post('/addtocart', fetchUser, async(req, res) =>{
    console.log("Added", req.body.itemId);
    let userData = await Users.findOne({_id: req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
    res.json({ success: true, message: "Added to Cart" });
}) 

// Remove Product from Cart Endpoint
app.post('/removefromcart', fetchUser, async(req, res) => {
    console.log("Removed", req.body.itemId);
    let userData = await Users.findOne({_id: req.user.id});
    if(userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
    res.json({ success: true, message: "Removed from Cart" });
})

// Retrieve Cart Data Endpoint
app.post('/getcart', fetchUser, async(req, res) => {
    console.log("Cart Data Fetch");
    let userData = await Users.findOne({_id: req.user.id});
    res.json(userData.cartData);
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port: " + port);
    } else {
        console.log("Error: " + error);
    }
});