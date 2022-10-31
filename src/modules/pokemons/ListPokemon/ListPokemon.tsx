import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

import { getPokemons } from '../services';

const ListPokemon = () => {
  const { data, isLoading, error, mutate } = useSWR(
    ['api', 'pokemons'],
    getPokemons
  );
  const pokemons = data;

  const parentRef = React.useRef<HTMLDivElement>(null);

  const handleClickDelete = async (name: string) => {
    const newPokemon = pokemons?.filter(
      (pokemon: any) => pokemon.title !== name
    );
    mutate(newPokemon, false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div
      style={{
        width: '90vw',
      }}
      ref={parentRef}
    >
      <button type={'button'} onClick={() => mutate(pokemons, false)}>
        Refetch
      </button>
      <div>
        {pokemons?.length > 0 &&
          pokemons.map((pokemon: any) => {
            return (
              <div key={pokemon.id}>
                <h3>
                  <Link href={`/pokemons/${pokemon.id}`}>{pokemon.title}</Link>
                </h3>
                <button onClick={() => handleClickDelete(pokemon.title)}>
                  Delete
                </button>
                <div style={{ position: 'relative', width: '100px' }}>
                  <Image
                    src={pokemon.thumbnailUrl}
                    alt="testPic"
                    width={1280} // This will be resolution of image. Suggest: 1280x720 (HD)
                    height={720} // This will be resolution of image. Suggest: 1280x720 (HD)
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }} // Treat image span full parent div width
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListPokemon;
