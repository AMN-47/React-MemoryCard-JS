import React from 'react';
import './GameOverlay.css';

export default function GameOverlay({ type, score, total, onRestart}) {
     const isWin = type === 'win';
 
  return (
    <div className={`overlay overlay--${type}`} role="dialog" aria-modal="true">
      <div className="overlay__card">
        <div className="overlay__icon" aria-hidden="true">
          {isWin ? '🏆' : '💥'}
        </div>
        <h2 className="overlay__title">
          {isWin ? 'You caught \'em all!' : 'A wild mistake appeared!'}
        </h2>
        <p className="overlay__message">
          {isWin
            ? `Perfect score — ${total}/${total}. You're a true Pokémon master!`
            : `You clicked a Pokémon twice and scored ${score}/${total}. Try again!`}
        </p>
        <button className="overlay__btn" onClick={onRestart}>
          {isWin ? 'Play Again' : 'Try Again'}
        </button>
      </div>
    </div>
  );
}