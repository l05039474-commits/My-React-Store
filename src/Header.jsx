import React from 'react';
import logoImg from './assets/logot.png'

export default function Header({ totalItems = 0, onCartClick, searchValue, onSearchChange }) {

 return (
  <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      
      {/* Логотип / Название магазина */}
      <div className="flex items-center cursor-pointer hover:opacity-80 transition">
        <img src={logoImg} alt="AllBags Логотип" className="h-10 w-auto object-contain" />
      </div>

  <input
        type="text"
        placeholder="Поиск..."
        value={searchValue}
        onChange={onSearchChange} // Ловит (e) => setSearchValue(e.target.value)
        style={{ width: '70%', padding: '8px', fontSize: '16px', marginRight: '25px' }}
      />

        {/* Кнопка Корзины */}
        <button 
          onClick={onCartClick}
          className="relative flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium transition active:scale-95 border border-gray-200/50"
        >
          <span>🛒</span>
          <span className="hidden sm:inline">Корзина</span>
          
          {/* Красный бадж со счетчиком (показывается, только если в корзине есть товары) */}
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-fade-in shadow-sm">
              {totalItems}
            </span>
          )}
        </button>

      </div>
    </header>
  );
}