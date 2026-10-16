import React from 'react';
import ProductCardLoading from './ProductCardLoading';

const ProductGrid = () => {

  const gridStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    width: '100%',
    boxSizing: 'border-box',
    padding: '20px 0'
  };
  
  const skeletons = Array(9).fill(0);

  return (
     <div style={gridStyle}>
      {skeletons.map((_, index) => (
        <ProductCardLoading key={index} />
      ))}
    </div>
  );
};

export default ProductGrid;