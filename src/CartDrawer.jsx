import React from 'react';

function CartDrawer({ cartElms, totalItems, totalPrice, onClose, onIncrease, onDecrease, onDelete }) {
  return (
    <>
      {/* 1. ТЕМНЫЙ ЗАДНИЙ ФОН (Oveylay) — затеняет сайт, когда корзина открыта */}
      <div 
        onClick={onClose} // Клик по фону тоже закроет корзину
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Полупрозрачный черный
          zIndex: 1500 // Чуть ниже самой корзины, но выше сайта
        }}
      />

      {/* 2. САМА ВЫЕЗЖАЮЩАЯ ПАНЕЛЬ КОРЗИНЫ */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0, // Прижимаем к правому краю
        width: '400px', // Ширина панели
        height: '100vh', // На всю высоту экрана
        backgroundColor: '#ffffff',
        boxShadow: '-5px 0 25px rgba(0, 0, 0, 0.15)',
        zIndex: 2000, // Поверх всего на свете
        padding: '30px 24px',
        display: 'flex',
        flexDirection: 'column', // Элементы идут друг за другом сверху вниз
        boxSizing: 'border-box'
      }}>
        
        {/* Шапка дровера: заголовок и кнопка закрытия */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '17px' }}>Корзина ({totalItems})</h2>
          <button 
            onClick={onClose} // Вызываем закрытие при клике на крестик
            style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
          >
            ❌
          </button>
        </div>

        {/* 3. СПИСОК ТОВАРОВ (с прокруткой, если товаров много) */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px' }}>
          {cartElms.length === 0 ? (
            <p style={{ color: '#666', textAlign: 'center', marginTop: '40px' }}>Ваша корзина пуста</p>
          ) : (
            cartElms.map(item => (
              <div key={item.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '16px 0', 
                borderBottom: '1px solid #eaeaea' 
              }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px' }}>{item.name}</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{item.price} usd / шт.</p>
                </div>
                
                {/* Кнопки управления количеством */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button 
                    onClick={() => onDecrease(item)}
                    style={{ padding: '4px 10px', cursor: 'pointer' }}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                  <button 
                    onClick={() => onIncrease(item)}
                    style={{ padding: '4px 10px', cursor: 'pointer' }}
                  >
                    +
                  </button>

                  <button 
                  onClick={() => onDelete(item)} 
                  className="text-gray-400 hover:text-red-500 p-1 transition ml-1"
                  title="Удалить из корзины"
                >
                  🗑️
                </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 4. ФУТЕР КОРЗИНЫ: Итоговая сумма и кнопка заказа */}
        {cartElms.length > 0 && (
          <div style={{ borderTop: '2px solid #f5f5f5', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '18px' }}>
              <span>Итого к оплате:</span>
              <span style={{ fontWeight: 'bold' }}>{totalPrice} usd</span>
            </div>
            <button style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#8b5cf6', // Фиолетовый под ваш стиль кнопок
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Оформить заказ
            </button>
          </div>
        )}

      </div>
    </>
  );
}

export default CartDrawer;