import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharactersList from '../../components/Characters/CharactersList';

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getChars = async () => {
      const response = await fetchCharacters('All', query);
      setChars(response);
    };
    getChars();
  }, []);

  return (
    <div>
      <CharactersList chars={chars} setQuery={setQuery} query={query} />
    </div>
  );
}
