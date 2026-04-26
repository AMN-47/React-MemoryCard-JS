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
}