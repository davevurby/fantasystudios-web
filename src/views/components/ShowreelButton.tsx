import { useState } from "react";
import { Play } from "lucide-react";
import clsx from "clsx";
import { createPortal } from "react-dom";

const SHOWREEL_LINK = "https://player.vimeo.com/video/1095872623?h=5b75ec71e4&badge=0&autopause=0&player_id=0&app_id=58479";

export const ShowreelButton = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        document.getElementById('nav')?.classList.add('hidden');
        document.body.style.overflow = 'hidden';
    };
    const handleClose = () => {
        setOpen(false);
        document.getElementById('nav')?.classList.remove('hidden');
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <button
                type="button"
                className="btn-primary-light btn-sm lg:btn-lg cursor-pointer flex items-center gap-[10px]"
                onClick={handleOpen}
            >
                <Play className="translate-y-[-1px] size-[12px] md:size-[16px]" />
                showreal
            </button>

            {open && createPortal(
                <div className="fixed inset-0 bg-black bg-opacity-75 z-[1000] w-screen h-screen">
                    <iframe
                        src={`${SHOWREEL_LINK}&autoplay=1`}
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                    <button
                        type="button"
                        className="btn-primary-orange btn-sm lg:btn-lg cursor-pointer fixed top-4 right-4 z-[1001]"
                        onClick={handleClose}
                    >
                        close
                    </button>
                </div>,
                document.body
            )}
        </>
    );
}; 