import React from 'react';

export function ProductCard({ title, category, price, originalPrice, imageUrl, badge, destaque, onAddToCart }) {
  return (
    /* Se a prop destaque for verdadeira, adiciona a classe CSS 'pop-card-destaque' */
    <div className={`pop-card ${destaque ? 'pop-card-destaque' : ''}`}>
      
      {/* Exibe o selo especial de destaque se a prop for verdadeira */}
      {destaque && <span className="pop-tag-destaque">⭐ Destaque</span>}
      
      {badge && <span className="pop-card-badge">{badge}</span>}
      
      <img src={imageUrl} alt={title} className="pop-card-img" />
      <div className="pop-card-body">
        <span className="pop-card-category">{category}</span>
        <h3 className="pop-card-title">{title}</h3>
        <div className="pop-card-price-row">
          {originalPrice && <span className="pop-card-old-price">R$ {originalPrice.toFixed(2)}</span>}
          <span className="pop-card-price">R$ {price.toFixed(2)}</span>
        </div>
        <button className="pop-card-btn" onClick={onAddToCart}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}