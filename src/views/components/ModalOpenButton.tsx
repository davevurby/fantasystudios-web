import type { PropsWithChildren } from "react";
import clsx from "clsx";
import { useModal } from "../../hooks/use-modal";

export interface ModalOpenButtonProps {
    id: 'STUDIO_A' | 'STUDIO_B' | 'VIRTUAL_PRODUCTION';
    type: string;
}

export const ModalOpenButton = ({ children, id, type }: PropsWithChildren<ModalOpenButtonProps>) => {
    const { setModal } = useModal();

    const handleClick = () => {
        setModal(id);
    }

    return (
        <button className={clsx(
            "justify-center btn-sm lg:btn-lg cursor-pointer",
            type,
        )} onClick={handleClick}>
            {children}
        </button>
    )
}   