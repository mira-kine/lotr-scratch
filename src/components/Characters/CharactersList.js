import React from 'react';
import './Character-List.css';

export default function CharactersList({ chars, race, setRace, query, setQuery, name, setName }) {
  const handleClick = () => {
    let filteredName = chars.filter((char) => {
      return char.name.toLowerCase().includes(query);
    });
    setName(filteredName);
  };

  return (
    <div>
      <div className="race-filter-container">
        <div className="race-filter">
          <select value={race} onChange={(e) => setRace(e.target.value)}>
            <option value="All">All</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Elf">Elf</option>
            <option value="Hobbit">Hobbit</option>
            <option value="Human">Human</option>
            <option value="Maiar">Maiar</option>
            <option value="Orc">Orc</option>
          </select>
        </div>
      </div>
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button value={name} onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="characters">
        {chars.map((item) => (
          <div className="char-card" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.race}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
