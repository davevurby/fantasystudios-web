import { useRive } from '@rive-app/react-canvas';
import { useState, useEffect } from 'react';

export default function RiveAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);
    const { RiveComponent } = useRive({
        src: '/fantasy_studios_3.riv',
        autoplay: true,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Remove from DOM after transition completes
            setTimeout(() => {
                setShouldRender(false);
            }, 300); // Match transition duration
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) return null;

    return (
        <div className="rive-container" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease-out' }}>
            <RiveComponent />
            <style>
                {`
                    .rive-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        z-index: 1000;
                        background: black;
                    }
                `}
            </style>
        </div>
    );
} 