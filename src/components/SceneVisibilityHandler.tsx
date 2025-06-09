import { useEffect, useRef } from "react";
import { useActiveScene } from "../hooks/use-active-scene";

interface SceneVisibilityHandlerProps {
    sceneId: string;
}

export const SceneVisibilityHandler = ({ sceneId }: SceneVisibilityHandlerProps) => {
    const { activeScene } = useActiveScene();
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        sceneRef.current = document.getElementById(sceneId) as HTMLDivElement;
    }, [])

    useEffect(() => {
        if (activeScene?.id === sceneId) {
            sceneRef.current?.classList.remove('translate-y-full');

            setTimeout(() => {
                sceneRef.current?.classList.remove('opacity-0');
            }, 300);
        }

        if (activeScene?.id !== sceneId) {
            sceneRef.current?.classList.add('opacity-0');

            setTimeout(() => {
                sceneRef.current?.classList.add('translate-y-full');
            }, 300);
        }
    }, [activeScene])

    return null;
}