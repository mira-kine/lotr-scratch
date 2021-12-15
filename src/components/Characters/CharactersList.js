import React from 'react';
import './Character-List.css';

export default function CharactersList({ chars, race, setRace, sortName, setSortName }) {
  const handleClick = () => {
    let filteredName = chars.filter((item) => item.name === name || name === 'All');
    return setSortName(filteredName);
  };
  return (
    <div>
      <div className="name-filter-container">
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
        <button value={sortName} onClick={handleClick}>
          Filter By Race
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
