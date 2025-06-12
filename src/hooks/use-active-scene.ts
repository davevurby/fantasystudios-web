import { create } from "zustand";
import { VIDEOS_DATA } from "../config";

export type Scene = {
    id: string;
    type: 'scene' | 'transition';
    src: string;
    logoColor: 'primary' | 'light';
} | {
    id: string;
    type: 'common';
    contentElementId: string;
    logoColor: 'primary' | 'light';
};

interface ActiveSceneStore {
    activeIndex: number;
    activeScene: Scene | null;
    setActiveIndex: (sceneIndex: number) => void;

    disableChangingSceneByScroll: boolean;
    setDisableChangingSceneByScroll: (disable: boolean) => void;
}

export const useActiveScene = create<ActiveSceneStore>((set) => ({
    activeIndex: 0,
    activeScene: VIDEOS_DATA[0],
    setActiveIndex: (sceneIndex) => set({ activeScene: VIDEOS_DATA[sceneIndex], activeIndex: sceneIndex }),

    disableChangingSceneByScroll: false,
    setDisableChangingSceneByScroll: (disable) => set({ disableChangingSceneByScroll: disable }),
}))