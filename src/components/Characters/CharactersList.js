import React from 'react';

export default function CharactersList({ chars }) {
  return (
    <div>
      <div className="characters">
        {chars.map((item) => (
          <div className="char" key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
