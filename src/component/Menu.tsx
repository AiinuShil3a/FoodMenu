import React from 'react';

interface TypeItem {
  id: number;
  title: string;
  img: string;
  desc: string;
  price: number;
  category: string;
}

interface Props {
  menulist: TypeItem[];
}

const Menu: React.FC<Props> = ({ menulist }) => {
  return (
    <div className='section-center'>
      {menulist.map((menuItem) => {
        const { id, title, category, price, img, desc } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4>{category}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
