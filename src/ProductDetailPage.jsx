import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import goods from './goods.json';

export default function ProductDetailPage() {
  const { id } = useParams(); // 1. Взяли ID из урла (в урле всегда строка, например "1")
  const [product, setProduct] = useState(null);

 useEffect(() => {
    const foundProduct = goods.find(item => String(item.id) === String(id));
    setProduct(foundProduct);
  }, [id]); // Эффект сработает при открытии страницы

  if (!product) return <h2>Товар загружается или не найден...</h2>;

  // 4. Отрисовываем тяжелые данные, которые телепортировались сюда
  return (
    <div className="product-detail">
      <h3>{product.name}</h3>
      <img 
  src={new URL(`${product.image}`, import.meta.url).href} 
  alt={product.name} 
  style={{ maxWidth: '200px', width: '50%', height: 'auto', borderRadius: '8px' }}
/>
      <p>{product.shortDesc}</p>
    </div>
  );
}