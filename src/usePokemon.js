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
                const results = await Promise.all(
                    ids.map(id => 
                        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => {
                            if (!r.ok) throw new Error(`Failed to fetch Pokémon #${id}`);
                            return r.json();
                        })
                    )
                );
                setPokemon(
                    results.at.map(p => ({
                        id: p.id,
                        name: p.name,
                        image:
                            p.sprites.other['official-artwork'].front_default ||
                            p.sprites.front_default,
                        types: p.types.map(t => t.type.name),
                    }))
                );
            }
        }
    })
}