import React from 'react';

export function HeroBanner({ title, subtitle, ctaText }) {
  return (
    <section className="pop-hero">
      <h2 className="pop-hero-title">{title}</h2>
      <p className="pop-hero-subtitle">{subtitle}</p>
      <button className="pop-hero-btn">{ctaText}</button>
    </section>
  );
}