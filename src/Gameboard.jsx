import React from 'React'
import Card from './Card'
import './Gameboard.css'

export default function GameBoard({cards, onCardClick}) {
    return(
        <main className='gameboard'>
            <div className='gameboard__grid'>
                {cards.map(card => (
                    <Card
                    />
                ))}
            </div>
        </main>
    )
}