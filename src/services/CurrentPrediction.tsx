import { create } from 'zustand'

interface User {
  iduser: number;
  user: string;
  email: string;
  nombrecompleto: string;
  password: string;
}

interface UserState {
  user: User | null;
  setUser: (newUser: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
  clearUser: () => set({ user: null }),
}));

interface globalData {
  currentIdPrediction: number | null
  currentNamePrediction: string | null
  updateCurrentId: (newId: number) => void
  updateCurrentName: (newName: string) => void
}

// Example usage of the imported 'create' function
const useStore = create<globalData>()((set) => ({
  currentIdPrediction: null,
  currentNamePrediction: null,
  updateCurrentId: (newId) => set({ currentIdPrediction: newId }),
  updateCurrentName: (newName) => set({ currentNamePrediction: newName })
}))

export { useUserStore, useStore }

