import React from 'react';
import './Header.css';

export default function Header({ score, bestScore, total }) {
    return(
        <header className = "header">
            <div className = "header__brand">
                <span className="header__pokeball" aria-hidden="true"/>
                <div>
                    <h1 className="header__title">Memory Game</h1>
                    <p className ="header__subtitle">Dont click the same Pokémon twice!</p>
                </div>
            </div>

            <div className="header__scores">
                <div className="score-card">
                    <span className="score-card__label">Score</span>
                    <span className="score-card__value">{score}<span className="score-card__total">{total}</span></span>
                </div>
                <div className="score-card score-card--best">
                    <span className="score-card__label">Best</span>
                    <span className="score-card__value">{bestScore}<span className="score-card__total">{total}</span></span>
                </div>
            </div>
        </header>
    );
}