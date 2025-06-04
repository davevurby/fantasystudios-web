import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

const VIDEOS_DATA = [
    {
        type: 'transition',
        src: '/videos/01 T1.mp4',
    },
    {
        type: 'scene',
        src: '/videos/02 Scn1 A.mp4',
    },
    {
        type: 'transition',
        src: '/videos/03 T2.mp4',
    },
    {
        type: 'scene',
        src: '/videos/04 Scn2 A.mp4',
    },
    {
        type: 'transition',
        src: '/videos/05 T3.mp4',
    },
    {
        type: 'scene',
        src: '/videos/06 Scn3 A.mp4',
    },
    {
        type: 'transition',
        src: '/videos/07 T4.mp4',
    },
    {
        type: 'scene',
        src: '/videos/08 Scn4.mp4',
    },
    {
        type: 'transition',
        src: '/videos/09 T5.mp4',
    },
    {
        type: 'scene',
        src: '/videos/10 Scn 5.mp4',
    },
]

export const ScrollHandler = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isChanging, setIsChanging] = useState<boolean>(false);

    const videoRefs = useRef<HTMLVideoElement[]>([]);
    const lastChange = useRef<NodeJS.Timeout | null>(null);
    const touchStart = useRef<number | null>(null);

    const handleDeltaChange = useCallback((deltaY: number) => {
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
    }, [activeIndex, isChanging]);

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

        if (videoData.type === 'transition') {
            currentVideo.play();
            const nextIndex = activeIndex + 1;

            currentVideo.addEventListener('ended', () => {
                setActiveIndex(nextIndex);
                videoRefs.current[nextIndex].play();
            });
        }

        if (videoData.type === 'scene') {
            currentVideo.play();
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
        <main className="relative w-full h-screen">
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
        </main>
    )
}