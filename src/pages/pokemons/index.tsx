import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SWRConfig, unstable_serialize } from 'swr';

import { AppSEO } from '@/components/AppSEO/AppSEO';
import ListPokemon from '@/modules/pokemons/ListPokemon/ListPokemon';
import SearchPokemon from '@/modules/pokemons/SearchPokemon/SearchPokemon';
import { getPokemons } from '@/modules/pokemons/services';

const PokemonPage = ({ fallback }: any) => {
  const { t } = useTranslation('common');

  return (
    <SWRConfig value={{ fallback }}>
      <AppSEO title="Pokemon Page" description="Page list pokemon" />
      <h3>{t('about')}</h3>
      <br />
      <SearchPokemon />
      <br />
      <section>
        <ListPokemon />
      </section>
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const pokemons: any = await getPokemons();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      fallback: {
        [unstable_serialize(['api', 'pokemons'])]: pokemons,
      },
    },
  };
};

export default PokemonPage;
