import { useState } from 'react';
import './App.css';
import data from './backend/data';
import Categorie from './component/Categorie';
import Menu from './component/Menu';

interface MenuItem {
  id: number;
  title: string;
  category: string;
  img: string;
  desc: string;
  price: number;
  // Add more properties as needed
}

function App() {
  const [menu, setMenu] = useState<MenuItem[]>(data);
  const AllCategorie = ['All', ...new Set(data.map((item) => item.category))];
  console.log(AllCategorie);

  const filterItems = (categorie: string) => {
    if (categorie === 'All') {
      setMenu(data);
    } else {
      const newItems = data.filter((item) => item.category === categorie);
      setMenu(newItems);
    }
  };

  return (
    <div>
      <h1>Workshop2 : FoodMuenu</h1>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>Our menu</h2>
            <div className='underline'></div>
          </div>
          <Categorie allCategorie={AllCategorie} filterItems={filterItems} />
          <Menu menulist={menu} />
        </section>
      </main>
    </div>
  );
}

export default App;
