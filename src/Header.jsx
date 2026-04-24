import React from "react";
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
        </header>
    );
}