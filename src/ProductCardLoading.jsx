import React from 'react';

const ProductCardLoading = () => {
 const cardStyle = {
    // 1. Делаем уже: уменьшаем ширину до 28% (чтобы 3 штуки свободно вставали с запасом)
    width: '25%', 
    height: '260px', 
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    backgroundColor: '#f1f5f9', // Легкий серый цвет для заглушки
    justifyContent: 'justify-center',
    animation: 'pulseAnimation 1.5s infinite ease-in-out'
  };

  return (
    // Класс 'animate-pulse' встроен в Tailwind — он заставит карточку плавно мигать!
    <div style={cardStyle} className="animate-pulse">
      
       
      {/* Заглушка под картинку товара */}
      <div style={{ width: '100%', height: '180px', backgroundColor: '#e5eaf1', borderRadius: '8px' }}></div>
                
      {/* Заглушка под цену */}
      <div style={{ width: '40%', height: '25px', backgroundColor: '#dfe5ec', borderRadius: '4px', marginTop: '10px' }}></div>
      
          
      {/* Заглушка под кнопку */}
      <div style={{ width: '50%', height: '30px', backgroundColor: '#dde4ec', borderRadius: '6px', marginTop: '15px' }}></div>
    </div>
  );
};

export default ProductCardLoading;