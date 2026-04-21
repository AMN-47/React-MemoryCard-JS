import { useState, useEffect } from 'react';

const CARD_COUNT = 12;

function getRandomIds(count, max = 151) {
    const ids = new Set();
    while (ids.size < count) {
        ids.add(Math.floor(Math.random() * max) + 1)
    }
    return [...ids]
} 

export function usePokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                setLoading(true);
                setError(null);
                const ids = getRandomIds(CARD_COUNT);
            }
        }
    })
}