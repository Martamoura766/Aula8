import React from 'react';
import { ProductCard } from './ProductCard';

export function ProductSection({ title, products, onAddToCart }) {
  return (
    <section id="vitrine" className="pop-section">
      <h2 className="pop-section-title">{title}</h2>
      <div className="pop-grid">
        {products.map((product) => (
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
        ))}
      </div>
    </section>
  );
}