import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)} // Передаем клик в родительский App
          style={{
            padding: '10px 20px',
            backgroundColor: selectedCategory === category ? '#571a86' : '#f0f0f0',
            color: selectedCategory === category ? '#fff' : '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: selectedCategory === category ? 'bold' : 'normal'
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}