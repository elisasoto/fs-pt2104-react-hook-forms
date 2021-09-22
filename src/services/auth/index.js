import { catcher, setBearer } from '../helpers'

export const login = ({ post }) => async params =>
  await catcher(post)('/auth/login', params)

export const user = ({ get }) => async ({ token }) =>
  await catcher(get)('/auth/me', setBearer(token))