import { create } from 'zustand'

interface globalData {
  currentIdPrediction: number | null
  currentNamePrediction: string | null
  updateCurrentId: (newId: number) => void
  updateCurrentName: (newName: string) => void
}

// Example usage of the imported 'create' function
export const useStore = create<globalData>()((set) => ({
  currentIdPrediction: null,
  currentNamePrediction: null,
  updateCurrentId: (newId: number) => set({ currentIdPrediction: newId }),
  updateCurrentName: (newName: string) => set({ currentNamePrediction: newName })
}))

