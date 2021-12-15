import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharactersList from '../../components/Characters/CharactersList';

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [race, setRace] = useState([]);
  const [query, setQuery] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const getChars = async () => {
      const response = await fetchCharacters(race, name);
      setChars(response);
    };
    getChars();
  }, [race, name]);

  return (
    <div>
      <CharactersList
        chars={chars}
        setRace={setRace}
        race={race}
        setQuery={setQuery}
        query={query}
        name={name}
        setName={setName}
      />
    </div>
  );
}
