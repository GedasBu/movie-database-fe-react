import { SortOptions } from './types';
import { get } from '../shared/methods';

export async function getSortOptions(): Promise<SortOptions[]> {
  const { data } = await get<SortOptions[]>(`sort-options`);
  return data;
}
