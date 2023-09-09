import React from 'react';

interface Props {
  allCategorie: string[]; // Assuming allCategorie is an array of strings
  filterItems: (category: string) => void; // Assuming filterItems is a function taking a string argument
}

const Categorie: React.FC<Props> = ({ allCategorie, filterItems }) => {
  return (
    <div className='btn-container'>
      {allCategorie.map((category, index) => {
        return (
          <button className='filter-btn' key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categorie;
