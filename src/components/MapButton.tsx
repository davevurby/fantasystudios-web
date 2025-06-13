import { useMap } from '../hooks/use-map';

interface MapButtonProps {
    id: string;
}

export function MapButton({ id }: MapButtonProps) {
    const { setIsOpen } = useMap();

    return (
        <button 
            onClick={() => setIsOpen(id)}
            className="btn btn-primary-orange w-full justify-center btn-sm md:btn-lg cursor-pointer"
        >
            Map
        </button>
    );
} 