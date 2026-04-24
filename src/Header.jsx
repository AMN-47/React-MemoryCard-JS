import React from "react";
import './Header.css';

export default function Header({ score, bestScore, total }) {
    return(
        <header className = "header">
            <div className = "header__brand">
                <span className="header__pokeball" aria-hidden="true"/>
            </div>
        </header>
    );
}