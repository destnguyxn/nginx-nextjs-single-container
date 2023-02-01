import axiosClient from '@/config/axiosClient';

export const getPokemons = async () => {
  const { data } = await axiosClient.get('/photos?_start=0&_limit=20');
  return data;
};
