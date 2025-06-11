import type { PropsWithChildren } from "react";
import { useStudioViewStore } from "../hooks/use-studio-view";

export interface StudioButtonProps {
    studio: 'A' | 'B';
}

export const StudioButton = ({ children, studio }: PropsWithChildren<StudioButtonProps>) => {
    const { setVisibleStudio } = useStudioViewStore();

    const handleClick = () => {
        setVisibleStudio(studio);
    }

    return (
        <button className="btn-secondary-orange w-full justify-center btn-sm lg:btn-lg" onClick={handleClick}>
            {children}
        </button>
    )
}   