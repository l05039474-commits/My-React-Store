import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Header from './Header'; 
import Footer from './Footer'; 
import CartDrawer from './CartDrawer';
import CategoryFilter from './CategoryFilter';  
import ProductDetailPage from './ProductDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

function App() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCart] = useState(() => {
  const savedCart = localStorage.getItem('my_cart');
  return savedCart ? JSON.parse(savedCart) : [];
});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  useEffect(() => {
    fetch('/src/goods.json')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setGoods(data);
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Ошибка загрузки сумок", error);
        setIsLoading(false);
      });
  }, []);

  const categories = ['Все', ...new Set(goods.map(good => good.category))];

  // 2. Фильтруем товары на лету перед передачей в ProductList
  const filteredGoods = selectedCategory === 'Все'
    ? goods
    : goods.filter(good => good.category === selectedCategory);


  useEffect(() => {
  localStorage.setItem('my_cart', JSON.stringify(cartItems));
  }, [cartItems]);

    const onAddToCart = (item) => {
    setCart((prevCart) => {
      // 1. Проверяем, есть ли уже товар в корзине
      const isItemExist = prevCart.find(cartItem => cartItem.id === item.id);
  
      if (isItemExist) {
        // 2. Если существует: перебираем корзину и увеличиваем quantity у нужного товара
        return prevCart.map(cartItem =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      }
  
      // 3. Если товара нет: добавляем его в конец массива с quantity: 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleIncrease = (item) => {
    setCart(prevCart =>
      prevCart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    );
  };

  // 2. Уменьшение количества товара (-1)
  const handleDecrease = (item) => {
    setCart(prevCart =>
      prevCart.map(cartItem => {
        if (cartItem.id === item.id) {
          // Если осталась 1 штука — удаляем (возвращаем null), если больше — уменьшаем
          return cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : null;
        }
        return cartItem;
      }).filter(Boolean) // Очищаем массив от null
    );
  };

  const handleDelete = (item) => {
  setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
  };

  const toggleCart = () => {
  setIsCartOpen(prev => !prev);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  }

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
         
       
      <Header totalItems={totalItems} 
      onCartClick={toggleCart} 
      searchValue={searchValue} 
      onSearchChange={handleSearchChange}/>

      <main className="max-w-6xl mx-auto mt-6">
      
       <BrowserRouter>
       <Routes>
       
      <Route 
        path="/" 
        element={ 
          <>
          <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
          
          <ProductList
            products={filteredGoods}
            onAdd={onAddToCart}
            searchValue={searchValue}
            isLoading={isLoading}
            />
          </> 
        }
      /> 
      <Route path="/items/:id" element={<ProductDetailPage />} />
       
        </Routes>
        </BrowserRouter>

      {isCartOpen && (
        <CartDrawer
          cartElms={cartItems}
          totalItems={totalItems}
          totalPrice={totalPrice}
          onClose={handleCloseCart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onDelete={handleDelete}
        />
      )}
      
    <Footer />
    </main>
    </div>
  );
}

export default App;