import React from 'react';
import ProductItem from './ProductItem';
import ProductGrid from './ProductGrid';

function ProductList({ products, onAdd, searchValue, isLoading }) {
  console.log("Долетел ли isLoading?:", isLoading);
  
    return (
    <div style={{ display: 'flex',        // Включаем гибкую сетку Flexbox
    flexWrap: 'wrap',       // Разрешаем карточкам переноситься на новую строку
    gap: '20px',            // Отступы (расстояние) между карточками
    justifyContent: 'center', // Центрируем весь ряд карточек на экране
    padding: '20px',
    maxWidth: '1200px',     // Ограничиваем максимальную ширину сетки
    margin: '0 auto'  }}>
      
           
      {isLoading ? (
        <ProductGrid />
      ) : products.length === 0 ? (
        <p>Товаров нет</p>
      ) : (
      
            
  products.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase())).length === 0 ? (
  <p>Ничего не найдено</p>
) : (
  products
       .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))    
       .map((obj) => (
      <ProductItem
        key={obj.id}
        id={obj.id}
        image={obj.image}
        name={obj.name}
        price={obj.price}
        category={obj.category}
        onAdd={onAdd}
        shortDesc={obj.shortDesc}
        fullDesc={obj.fullDesc}
      />
    ))
)
      )}
    </div>
  );
}

export default ProductList;