import React from 'react';

export default function CharactersList({ chars, setQuery, query }) {
  return (
    <div>
      <div className="race-filter">
        <select className="race" value={query} onClick={(e) => setQuery(e.target.value)}>
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
      </div>
      <div className="characters">
        {chars.map((item) => (
          <div className="char" key={item.id}>
            <p>{item.name}</p>
            <p>{item.race}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
