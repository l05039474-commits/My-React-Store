import React from 'react';

export default function Cart({ cart, onIncrease, onDecrease, onDelete, onClear }) {
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col h-[500px]">
      
      {/* ШАПКА КОРЗИНЫ */}
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-xl">
        <h3 className="text-lg font-bold text-gray-800">Корзина</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
          {totalItems} шт.
        </span>
      </div>

      {/* СПИСОК ТОВАРОВ */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {cart.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <span className="text-3xl block mb-2">🛒</span>
            Ваша корзина пока пуста
          </div>
        ) : (
          cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0"
            >
              {/* Информация о товаре */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-800 text-sm truncate">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  {item.price} usd <span className="text-xs text-gray-400">/ шт.</span>
                </p>
              </div>

              {/* Блок управления количеством и удалением */}
              <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
                <button 
                  onClick={() => onDecrease(item)} 
                  className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-full text-gray-600 hover:bg-gray-100 active:scale-90 transition font-medium"
                >
                  -
                </button>
                <span className="text-sm font-bold w-6 text-center text-gray-800">
                  {item.quantity}
                </span>
                <button 
                  onClick={() => onIncrease(item)} 
                  className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-full text-gray-600 hover:bg-gray-100 active:scale-90 transition font-medium"
                >
                  +
                </button>
                
                {/* Кнопка полного удаления */}
                <button 
                  onClick={() => onDelete(item.id)} 
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

      {/* ФУТЕР КОРЗИНЫ С ИТОГАМИ */}
      {cart.length > 0 && (
        <div className="border-t border-gray-100 p-6 bg-gray-50/30 rounded-b-xl mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-medium text-sm">Итого к оплате:</span>
            <span className="text-xl font-extrabold text-gray-950">{totalPrice} usd</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition active:scale-[0.98] text-center text-sm shadow-md hover:shadow-lg">
            Оформить заказ ({totalItems})
          </button>
        </div>
      )}

    </div>
  );
}