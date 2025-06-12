import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { VIDEOS_DATA } from "../config";
import { useActiveScene } from "../hooks/use-active-scene";

export const ScrollHandler = () => {
    const { activeIndex, setActiveIndex, disableChangingSceneByScroll, setDisableChangingSceneByScroll } = useActiveScene();
    const [isChanging, setIsChanging] = useState<boolean>(false);

    const videoRefs = useRef<(HTMLVideoElement | HTMLDivElement)[]>([]);
    const lastChange = useRef<NodeJS.Timeout | null>(null);
    const touchStart = useRef<number | null>(null);

    const playingIndex = useRef<number>(0);

    const handleDeltaChange = useCallback((deltaY: number) => {
        const videoData = VIDEOS_DATA[activeIndex];
        const currentVideo = videoRefs.current[activeIndex];

        if (currentVideo && !disableChangingSceneByScroll && videoData.type === 'scene' && !isChanging && deltaY > 10 && activeIndex < VIDEOS_DATA.length - 1) {
            (currentVideo as HTMLVideoElement).pause();
            setActiveIndex(activeIndex + 1);
            setIsChanging(true);

            lastChange.current = setTimeout(() => {
                lastChange.current = null;
                setIsChanging(false);
            }, 1000);
        }

        if (currentVideo && !disableChangingSceneByScroll && videoData.type === 'scene' && !isChanging && deltaY < -10 && activeIndex > 1) {
            (currentVideo as HTMLVideoElement).pause();
            setActiveIndex(activeIndex - 2);
            setIsChanging(true);

            lastChange.current = setTimeout(() => {
                lastChange.current = null;
                setIsChanging(false);
            }, 1000);
        }

        if (videoData.type === 'common') {
            const divRef = videoRefs.current[activeIndex] as HTMLDivElement;


            console.log('common', deltaY, divRef.scrollTop)

            if (deltaY < -10 && divRef.scrollTop === 0) {
                setActiveIndex(activeIndex - 1);
                setIsChanging(true);

                lastChange.current = setTimeout(() => {
                    lastChange.current = null;
                    setIsChanging(false);
                }, 1000);
            }

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

        (videoRefs.current[playingIndex.current] as HTMLVideoElement).pause();
        (videoRefs.current[playingIndex.current] as HTMLVideoElement).currentTime = 0;

        if (videoData.type === 'transition') {
            (currentVideo as HTMLVideoElement).play();
            playingIndex.current = activeIndex;
            const nextIndex = activeIndex + 1;

            (currentVideo as HTMLVideoElement).addEventListener('ended', () => {
                setActiveIndex(nextIndex);
                (videoRefs.current[nextIndex] as HTMLVideoElement).play(); 
            });
        }

        if (videoData.type === 'scene') {
            (currentVideo as HTMLVideoElement).play();
            playingIndex.current = activeIndex;
        }

        if (videoData.type === 'common') {
            const divRef = videoRefs.current[activeIndex] as HTMLDivElement;
            const contentElement = document.getElementById(videoData.contentElementId);

            if (contentElement) {
                // set contentElement to divRef
                divRef.appendChild(contentElement);
            }
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
                        { ('src' in video) && (
                            <video 
                                ref={(el) => {
                                    if (el) {
                                        videoRefs.current[index] = el;
                                    }
                                }}
                                className={clsx(
                                    "w-full h-full object-cover",
                                    activeIndex < index && "opacity-0",
                                    // activeIndex !== index && "opacity-0",
                                )} 
                                src={video.src}
                                loop={video.type === 'scene'}
                                muted 
                                playsInline 
                            />
                        )}

                        {video.type ==='common' && (
                            <div 
                                ref={(el) => {
                                    if (el) {
                                        videoRefs.current[index] = el;
                                    }
                                }}
                            className={clsx(
                                "transition-all duration-1000 overflow-y-auto",
                                "w-screen max-h-screen bg-light",
                                activeIndex === index && "translate-y-0 opacity-100",
                                activeIndex !== index && "translate-y-full opacity-0",
                            )}>
                                
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}