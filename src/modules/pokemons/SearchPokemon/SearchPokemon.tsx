import { Select } from '@mantine/core';
import React, { useState } from 'react';
import useSWR from 'swr';

const SearchPokemon = () => {
  const { data: pokemons } = useSWR(['api', 'pokemons']);

  const tmpPokemon = pokemons?.map((pokemon: any) => ({
    ...pokemon,
    value: pokemon.title,
    label: pokemon.title,
    id: pokemon.id,
  }));
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState(tmpPokemon || []);

  const handleSearchChange = (value: any) => {
    setSearchValue(value);
    const filterPokemon = tmpPokemon?.filter((pokemon: any) =>
      pokemon.label.includes(value)
    );
    setSearchList(filterPokemon);
  };
  return (
    <Select
      data={searchList}
      placeholder="Search something"
      searchable
      searchValue={searchValue}
      onSearchChange={handleSearchChange}
      maxDropdownHeight={400}
      limit={10}
      itemComponent={({ id, url, title, _thumbnailUrl, _albumId, ...rest }) => {
        return (
          <div
            key={id}
            style={{
              display: 'flex',
              gap: '8px',
              margin: '8px 0',
            }}
            {...rest}
          >
            <img
              src={url}
              alt={title}
              style={{ width: '30px', height: '30px' }}
            />
            <span>{title}</span>
          </div>
        );
      }}
    />
  );
};

export default SearchPokemon;
