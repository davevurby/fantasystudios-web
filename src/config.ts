import type { Scene } from "./hooks/use-active-scene";

export const VIDEOS_DATA: Scene[] = [
    {
        id: 't1',
        type: 'transition',
        src: '/videos/01 T1.mp4',
        logoColor: 'light',
    },
    {
        id: 'scn1',
        type: 'scene',
        src: '/videos/02 Scn1 C.mp4',
        logoColor: 'light',
    },
    {
        id: 't2',
        type: 'transition',
        src: '/videos/03 T2.mp4',
        logoColor: 'light',
    },
    {
        id: 'scn2',
        type: 'scene',
        src: '/videos/04 Scn2 A.mp4',
        logoColor: 'light',
    },
    {
        id: 't3',
        type: 'transition',
        src: '/videos/05 T3.mp4',
        logoColor: 'light',
    },
    {
        id: 'scn3',
        type: 'scene',
        src: '/videos/06 Scn3 B2.mp4',
        logoColor: 'light',
    },
    {
        id: 't4',
        type: 'transition',
        src: '/videos/07 T4.mp4',
        logoColor: 'light',
    },
    {
        id: 'scn4',
        type: 'scene',
        src: '/videos/08 Scn4.mp4',
        logoColor: 'light',
    },
    {
        id: 't5',
        type: 'transition',
        src: '/videos/09 T5.mp4',
        logoColor: 'light',
    },
    {
        id: 'scn5',
        type: 'scene',
        src: '/videos/10 Scn 5.mp4',
        logoColor: 'primary',
    },
    {
        id: 'end',
        type: 'common',
        contentElementId: 'contact-scene',
        logoColor: 'primary',
    }
]