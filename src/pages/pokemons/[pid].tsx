import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { unstable_serialize } from 'swr';

import axiosClient from '@/config/axiosClient';
import { getPokemons } from '@/modules/pokemons/services';

type Props = {
  pokemonDetail: any;
};

type StaticPathWithLocale = GetStaticPaths & {
  locales: string[];
};

const PostDetail = (props: Props) => {
  const router = useRouter();
  const { pokemonDetail } = props;

  return (
    <div>
      <span
        onClick={() => router.back()}
        style={{ cursor: 'pointer', color: 'blue' }}
      >
        Click back
      </span>
      <h3>{pokemonDetail.title}</h3>

      <img src={pokemonDetail.thumbnailUrl} alt={pokemonDetail.title} />
    </div>
  );
};

export async function getStaticPaths({ locales }: StaticPathWithLocale) {
  const data = await getPokemons();
  const ids = data.map((post: any) => post.id);
  const paths = ids
    .map((id: any) =>
      locales.map((locale: any) => ({
        params: { pid: id.toString() }, // `params` pid will be [pid]
        locale, // locale should not be inside `params`
      }))
    )
    .flat(); // to avoid nested arrays

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ locale, ...rest }) => {
  const pokemonDetail: any = await axiosClient.get(
    `/photos/${rest.params?.pid}`
  );
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      pokemonDetail: pokemonDetail.data,
      fallback: {
        // unstable_serialize() array style key
        [unstable_serialize(['api', 'pokemons', rest.params?.pid])]:
          pokemonDetail.data,
      },
    },
  };
};

export default PostDetail;
