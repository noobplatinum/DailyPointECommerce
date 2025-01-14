import React from 'react'
import './Admin.css'
import Sidebar from '../../Comps/Sidebar/Sidebar'
import  {Routes, Route} from 'react-router-dom'
import AddProduct from '../../Comps/AddProduct/AddProduct'
import ListProduct from '../../Comps/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin