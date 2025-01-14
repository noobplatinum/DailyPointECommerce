import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

export const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/newcollection')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setNew_collection(data))
      .catch((error) => {
        console.error('Error fetching new collections:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='new-collections'>
      <h1>NEW SELECTIONS</h1>
      <hr />
      <div className="new-collections-item">
        {new_collection.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;