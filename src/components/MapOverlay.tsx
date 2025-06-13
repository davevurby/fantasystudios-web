import { useMap } from '../hooks/use-map';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

declare global {
    interface Window {
        mapkit: any;
    }
}

const LOCATIONS = {
    studios: {
        lat: 50.1470183,
        lng: 14.1132751,
        title: "Studios"
    },
    offices: {
        lat: 50.103774,
        lng: 14.4467247,
        title: "Offices"
    }
} as const;

export function MapOverlay() {
    const { isOpen, setIsOpen } = useMap();
    const contentRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);

    useEffect(() => {
        // Load MapKit JS
        const script = document.createElement('script');
        script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.mapkit.init({
                authorizationCallback: function(done: (token: string) => void) {
                    done('eyJraWQiOiJMR1lZNEFCWUIzIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJHNlY4VFlHRzhWIiwiaWF0IjoxNzQ5ODAyMjMyLCJleHAiOjE3NTA0ODkxOTl9.J_5Mksh4dDKFK3CoH5eJEs3iS3VOq4BXCmXjg0zn73YRuS0LwoHn8O9CLOFjPphfoXDFl2v0QHor5h1dB08Few');
                }
            });
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (!isOpen || !mapRef.current || !window.mapkit) return;

        const location = LOCATIONS[isOpen as keyof typeof LOCATIONS];
        
        // Create map instance if it doesn't exist
        if (!mapInstanceRef.current) {
            mapInstanceRef.current = new window.mapkit.Map(mapRef.current);
        }

        // Set the region to the selected location
        const region = new window.mapkit.CoordinateRegion(
            new window.mapkit.Coordinate(location.lat, location.lng),
            new window.mapkit.CoordinateSpan(0.01, 0.01)
        );
        mapInstanceRef.current.region = region;

        // Add annotation for the location
        const annotation = new window.mapkit.MarkerAnnotation(
            new window.mapkit.Coordinate(location.lat, location.lng),
            {
                title: location.title,
                color: "#FF6B00"
            }
        );
        mapInstanceRef.current.addAnnotation(annotation);

        // Handle escape key
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (mapInstanceRef.current) {
                mapInstanceRef.current.removeAnnotation(annotation);
            }
        };
    }, [isOpen, setIsOpen]);

    useEffect(() => {
        if (!contentRef.current) return;

        if (isOpen) {
            contentRef.current.classList.add('opacity-0')
            contentRef.current.classList.remove('hidden');

            setTimeout(() => {
                contentRef.current!.classList.add('opacity-100');
            }, 1);
        } else {
            contentRef.current!.classList.remove('opacity-100');
            contentRef.current!.classList.add('opacity-0');

            setTimeout(() => {
                contentRef.current!.classList.add('hidden');
            }, 300);
        }
    }, [isOpen]);

    return (
        <div
            ref={contentRef}
            className="fixed z-[200] top-0 left-0 w-full h-full bg-light transition-all duration-800 hidden">
            <div 
                className="fixed inset-0 z-[200]"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setIsOpen(null);
                    }
                }}
            >
                <div ref={mapRef} className="w-full h-full" />
            </div>

            <div className={clsx(
                "fixed w-full bottom-0 flex justify-center z-[201]",
            )}>
                <button 
                    type="button"
                    className={clsx(
                        "btn-primary-orange btn-sm lg:btn-lg cursor-pointer",
                    )}
                    disabled={!isOpen}
                    onClick={() => setIsOpen(null)}
                >
                    close
                </button>
            </div>
        
        </div>
    );
} 