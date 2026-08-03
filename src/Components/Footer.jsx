import React from 'react';

export function Footer() {
  return (
    <footer className="pop-footer">
      <p>© {new Date().getFullYear()} Pop Art Camisetas. Todos os direitos reservados.</p>
      <p className="pop-footer-sub">Estampas exclusivas em 100% Algodão Premium.</p>
    </footer>
  );
}