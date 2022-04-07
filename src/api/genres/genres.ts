import { Genre } from '../movies/types';
import { get } from '../shared/methods';

export async function getGenres(): Promise<Genre[]> {
  const { data } = await get<Genre[]>('genres');
  return data;
}
