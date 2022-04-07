import { SignUpdata, SignUpResponse, SignInData, SignInResponse } from './types';
import { post } from '../shared/methods';

export async function sigIn(credentials: SignInData): Promise<SignInResponse> {
  const { data } = await post<SignInData, SignInResponse>('login', credentials);
  return data;
}

export async function signUp(userData: SignUpdata): Promise<SignUpResponse> {
  const { data } = await post<SignUpdata, SignUpResponse>('sign-up', userData);
  return data;
}
