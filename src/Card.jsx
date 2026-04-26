import React, { useState } from 'react';
import './Card.css';

const TYPE_COLORS = {
  fire: '#FF6B35',
  water: '#4A9ECC',
  grass: '#5DAA59',
  electric: '#F6C90E',
  psychic: '#E8708A',
  ice: '#74CEC0',
  dragon: '#6F55C8',
  dark: '#4A3B5C',
  fairy: '#F0A0C0',
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
};


export default function Card({ id, name, image, types, onClick }) {
    const [flipping, setFlipping] = useState(false);

    function handleClick() {
        if (flipping) return;
        setFlipping(true);
        setTimeout(() => setFlipping(false), 400);
        onClick(id);
    }

    const typeColor = TYPE_COLORS[types?.[0] || '#888']

    return (
    <div
      className={`card ${flipping ? 'card--flip' : ''}`}
      onClick={handleClick}
      style={{ '--type-color': typeColor }}
      role="button"
      aria-label={`Pokémon card: ${name}`}
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      <div className="card__inner">
        <div className="card__shine" aria-hidden="true" />
        <div className="card__image-wrap">
          <img
            className="card__image"
            src={image}
            alt={name}
            loading="lazy"
          />
        </div>
        <div className="card__footer">
          <div className="card__name">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </div>
          <div className="card__types">
            {types?.map(t => (
              <span
                key={t}
                className="card__type-badge"
                style={{ background: TYPE_COLORS[t] || '#888' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}