import React, { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { HeroBanner } from './Components/HeroBanner';
import { ProductSection } from './Components/ProductSection';
import { Footer } from './Components/Footer';
import { products } from './data/products';


export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="pop-app">
      <Header cartCount={cartCount} />
      <HeroBanner
        title="Vestindo Arte e Cultura Pop"
        subtitle="Confira as novas estampas exclusivas em algodão premium com entrega para todo o Brasil."
        ctaText="Ver Lançamentos"
      />
      <ProductSection
        title="Destaques da Coleção"
        products={products}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </div>
  );
}