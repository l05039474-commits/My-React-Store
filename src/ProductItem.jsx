
import { Link } from 'react-router-dom';

function ProductItem ({ id, name, price, image, category, shortDesc, fullDesc, onAdd }) {
 
const item = {id, name, price, image, category, shortDesc, fullDesc}

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h4>{name}</h4>
      <p>{category}</p>
      <p><strong>Цена:</strong> {price} usd</p>
      
      <Link to={`/items/${item.id}`}>
      <img 
  src={new URL(`${item.image}`, import.meta.url).href}  
  alt={item.name} 
  style={{ 
    width: '100%', 
    height: '180px', 
    objectFit: 'contain', 
    marginBottom: '10px' 
  }}
  />
  </Link>
              
        <button onClick={() => onAdd(item)} 
        style={{ marginTop: '10px auto 0 auto', 
display: 'block', 
clear: 'both', padding: '8px 16px', backgroundColor: '#8543ae', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Купить
      </button>
    </div>
  );
}

export default ProductItem;