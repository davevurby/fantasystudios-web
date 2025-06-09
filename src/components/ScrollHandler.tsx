import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { VIDEOS_DATA } from "../config";
import { useActiveScene } from "../hooks/use-active-scene";

export const ScrollHandler = () => {
    const { activeIndex, setActiveIndex, disableChangingSceneByScroll } = useActiveScene();
    const [isChanging, setIsChanging] = useState<boolean>(false);

    const videoRefs = useRef<HTMLVideoElement[]>([]);
    const lastChange = useRef<NodeJS.Timeout | null>(null);
    const touchStart = useRef<number | null>(null);

    const playingIndex = useRef<number>(0);

    const handleDeltaChange = useCallback((deltaY: number) => {
        if (disableChangingSceneByScroll) return;

        const videoData = VIDEOS_DATA[activeIndex];
        const currentVideo = videoRefs.current[activeIndex];
        if (!currentVideo) return;

        if (videoData.type === 'scene' && !isChanging && deltaY > 10 && activeIndex < VIDEOS_DATA.length - 1) {
            currentVideo.pause();
            setActiveIndex(activeIndex + 1);
            setIsChanging(true);

            lastChange.current = setTimeout(() => {
                lastChange.current = null;
                setIsChanging(false);
            }, 1000);
        }

        if (videoData.type === 'scene' && !isChanging && deltaY < -10 && activeIndex > 1) {
            currentVideo.pause();
            setActiveIndex(activeIndex - 2);
            setIsChanging(true);

            lastChange.current = setTimeout(() => {
                lastChange.current = null;
                setIsChanging(false);
            }, 1000);
        }
    }, [activeIndex, isChanging, disableChangingSceneByScroll]);

    const handleScroll = useCallback((e: WheelEvent) => {
        handleDeltaChange(e.deltaY);
    }, [handleDeltaChange])

    const handleTouchStart = useCallback((e: TouchEvent) => {
        touchStart.current = e.touches[0].clientY;
    }, [])

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (touchStart.current) {
            const deltaY = e.touches[0].clientY - touchStart.current;
            handleDeltaChange(deltaY * -1);
        }
    }, [handleDeltaChange])

    const handleTouchEnd = useCallback((e: TouchEvent) => {
        touchStart.current = null;
    }, [])

    useEffect(() => {
        const videoData = VIDEOS_DATA[activeIndex];
        const currentVideo = videoRefs.current[activeIndex];

        if (!currentVideo) return;

        videoRefs.current[playingIndex.current].pause();
        videoRefs.current[playingIndex.current].currentTime = 0;

        if (videoData.type === 'transition') {
            currentVideo.play();
            playingIndex.current = activeIndex;
            const nextIndex = activeIndex + 1;

            currentVideo.addEventListener('ended', () => {
                setActiveIndex(nextIndex);
                videoRefs.current[nextIndex].play();
            });
        }

        if (videoData.type === 'scene') {
            currentVideo.play();
            playingIndex.current = activeIndex;
        }
    }, [activeIndex])

    useEffect(() => {
        window.addEventListener('wheel', handleScroll)

        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [handleScroll])

    useEffect(() => {
        window.addEventListener('touchmove', handleTouchMove)
        window.addEventListener('touchstart', handleTouchStart)
        window.addEventListener('touchend', handleTouchEnd)

        return () => {
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchend', handleTouchEnd)
        }
    }, [handleTouchMove, handleTouchStart, handleTouchEnd])

    return (
        <div className="fixed z-1 top-0 left-0 w-full h-screen">
            {
                VIDEOS_DATA.map((video, index) => (
                    <div key={index} id={video.type} className="fixed inset-0 z-50">
                        <video 
                            ref={(el) => {
                                if (el) {
                                    videoRefs.current[index] = el;
                                }
                            }}
                            className={clsx(
                                "w-full h-full object-cover",
                                activeIndex !== index && "hidden",
                            )} 
                            src={video.src}
                            loop={video.type === 'scene'}
                            muted 
                            playsInline 
                        />
                    </div>
                ))
            }
        </div>
    )
}