import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharactersList from '../../components/Characters/CharactersList';

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getChars = async () => {
      const response = await fetchCharacters(race);
      setChars(response);
    };
    getChars();
  }, [race]);

  const handleClick = async () => {
    const chars = await fetchCharacters(race, query);
    setChars(chars);
  };

  return (
    <div>
      <CharactersList
        chars={chars}
        setRace={setRace}
        race={race}
        setQuery={setQuery}
        query={query}
        handleClick={handleClick}
      />
    </div>
  );
}
