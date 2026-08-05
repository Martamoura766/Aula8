import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

export function ProductSection({ title, products, onAddToCart }) {
  // 1. Estado para guardar o texto digitado na busca
  const [busca, setBusca] = useState('');

  // 2. Filtra a lista de produtos com base no texto da busca
  const produtosFiltrados = products.filter((product) =>
    product.title.toLowerCase().includes(busca.toLowerCase())
  );

  // 3. Função acionada ao clicar no botão "Limpar"
  const limparBusca = () => {
    setBusca('');
  };

  return (
    <section id="vitrine" className="pop-section">
      <h2 className="pop-section-title">{title}</h2>

      {/* Campo de entrada de texto */}
      <input
        type="text"
        placeholder="Buscar camiseta Pop Art..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{ padding: '8px', marginBottom: '8px', width: '100%' }}
      />

      {/* Painel com o Contador de Resultados e o Botão Limpar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <small style={{ color: '#666' }}>
          {produtosFiltrados.length} {produtosFiltrados.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
        </small>

        {/* O botão "Limpar" só aparece se houver texto no campo de busca */}
        {busca && (
          <button 
            onClick={limparBusca}
            style={{ padding: '4px 8px', cursor: 'pointer', fontSize: '12px' }}
          >
            Limpar busca
          </button>
        )}
      </div>

      {/* Grid de Cards dos Produtos */}
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
              destaque={product.destaque}
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