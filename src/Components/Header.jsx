import React from 'react';

export function Header({ cartCount }) {
  return (
    <header className="pop-header">
      <h1 className="pop-logo">POP ART <span>CAMISETAS</span></h1>
      <nav className="pop-nav">
        <a href="#vitrine" className="pop-nav-link">Coleção</a>
        <a href="#sobre" className="pop-nav-link">Sobre</a>
        <div className="pop-cart-badge">
          🛒 Carrinho: <strong>{cartCount}</strong>
        </div>
      </nav>
    </header>
  );
}