import './App.css';
import Menu from './Menu.js';
import Item from './scpItem.js';
import BrandExample from './Nav.js';
import { useState, useEffect } from 'react';

// Fetch data from supplied URL
function fetchData()
{
  return fetch("https://xajct.github.io/content_hosting/scp.json")
    .then(response => response.json())
}

function App()
{

  const [Items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(
    () =>
    {
      fetchData().then(data => setItems(data))
    }, []
  );

  return (
    <div className="app-container text-light bg-dark">
      <BrandExample></BrandExample>
      <p className='fst-italic fs-4 mb-4'>Select an item to view:</p>
      <Menu Items={Items} onSelect={setSelectedItem} />
      {selectedItem && <Item selectedItem={selectedItem} />}
    </div>
  );
}

export default App;