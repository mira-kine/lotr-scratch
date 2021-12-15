import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharactersList from '../../components/Characters/CharactersList';

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [race, setRace] = useState([]);
  const [sortName, setSortName] = useState('');

  useEffect(() => {
    const getChars = async () => {
      const response = await fetchCharacters(race);
      setChars(response);
    };
    getChars();
  }, [race]);

  return (
    <div>
      <CharactersList
        chars={chars}
        setRace={setRace}
        race={race}
        sortName={sortName}
        setSortName={setSortName}
      />
    </div>
  );
}
