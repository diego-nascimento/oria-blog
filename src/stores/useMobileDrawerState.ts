import { create } from 'zustand';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const useMobileDrawerState = create<Props>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set(() => ({ isOpen: false })),
}));
