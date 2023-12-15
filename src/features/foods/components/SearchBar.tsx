import React from 'react';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div>
      <label htmlFor="search" className="">
        Search
      </label>
      <input
        className=""
        placeholder="Search food..."
        onChange={(e) => onSearch(e.target.value)}
        defaultValue=""
      />
    </div>
  );
};
