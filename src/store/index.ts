import { create } from 'zustand'
interface userAuth {
  token: string
}
interface StoreApp {
  isAuth: boolean
  setIsAuth: (value: userAuth) => void
  token: string | null
}
export const useStoreApp = create<StoreApp>((set) => ({
  isAuth: false,
  token: null,
  setIsAuth: ({ token }: userAuth) => set({ isAuth: true, token: token })
}))
