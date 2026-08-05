import React, { useState } from 'react';
import { ProductCard } from './ProductCard';


export function ProductSection({ title, products, onAddToCart }) {
const [busca, setBusca] = useState('');

const produtosFiltrados = products.filter((product) =>
  product.title.toLowerCase().includes(busca.toLowerCase())
);  
  
  
  return (
    <section id="vitrine" className="pop-section">
      <h2 className="pop-section-title">{title}</h2>

      <input
  type="text"
  placeholder="Buscar camiseta Pop Art..."
  value={busca}
  onChange={(e) => setBusca(e.target.value)}
  style={{ padding: '8px', marginBottom: '16px', width: '100%' }}
/>
      <div className="pop-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            originalPrice={product.originalPrice}
            imageUrl={product.imageUrl}
            badge={product.badge}
            destaque={product.destaque} // <--- Repassando a prop destaque
            onAddToCart={onAddToCart}
          />
          ))
        ) : (
          <p>Nenhuma camiseta encontrada para "{busca}".</p>
        )}
      </div>
    </section>
  );
}
