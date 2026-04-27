import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import GameOverlay from './components/GameOverlay';
import { usePokemon } from './hooks/usePokemon';
import { shuffle } from './utils/shuffle';
import './App.css';

export default function App() {
  const { pokemon, loading, error } = usePokemon();

  const [cards, setCards] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' | 'win' | 'lose'

  // Shuffle cards once pokemon are loaded
  useEffect(() => {
    if (pokemon.length > 0) {
      setCards(shuffle(pokemon));
    }
  }, [pokemon]);

  const handleCardClick = useCallback(
    (id) => {
      if (gameStatus !== 'playing') return;

      if (clickedIds.has(id)) {
        // Player clicked a card they already clicked — LOSE
        setGameStatus('lose');
        return;
      }

      const newClickedIds = new Set(clickedIds);
      newClickedIds.add(id);
      const newScore = score + 1;

      setClickedIds(newClickedIds);
      setScore(newScore);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      if (newClickedIds.size === pokemon.length) {
        // Player clicked every card exactly once — WIN
        setGameStatus('win');
        return;
      }

      // Shuffle after every successful click
      setCards(prev => shuffle(prev));
    },
    [clickedIds, score, bestScore, gameStatus, pokemon.length]
  );

  function handleRestart() {
    setClickedIds(new Set());
    setScore(0);
    setGameStatus('playing');
    setCards(shuffle(pokemon));
  }

  return (
    <div className="app">
      <Header
        score={score}
        bestScore={bestScore}
        total={pokemon.length}
      />

      {loading && (
        <div className="app__loading">
          <div className="app__pokeball-spinner" aria-label="Loading..." />
          <p>Fetching Pokémon…</p>
        </div>
      )}

      {error && (
        <div className="app__error">
          <p>Oops! {error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <GameBoard cards={cards} onCardClick={handleCardClick} />
      )}

      {(gameStatus === 'win' || gameStatus === 'lose') && (
        <GameOverlay
          type={gameStatus}
          score={score}
          total={pokemon.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}