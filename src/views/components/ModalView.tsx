import clsx from "clsx";
import { useEffect } from "react";
import { useNavStore } from "../../hooks/use-nav";
import { useModal } from "../../hooks/use-modal";
import { StudioA } from "./modals/StudioA";
import { StudioB } from "./modals/StudioB";
import { VirtualProduction } from "./modals/VirtualProduction";
import { ContentCreation } from "./modals/ContentCreation";
import { MotionCapturing } from "./modals/MotionCapturing";
import { Team } from "./modals/Team";
import { Partners } from "./modals/Partners";

export const ModalView = () => {
    const { modal, setModal } = useModal();
    const { setDisableLinks } = useNavStore();

    useEffect(() => {
        if (modal) {
            setDisableLinks(true);
        } else {
            setDisableLinks(false);
        }
    }, [modal]);

    return (
        <>

            <div className={clsx(
                "fixed z-[100] top-0 left-0 w-full h-full bg-light transition-all duration-300",
                !modal && "hidden"
            )}>
                <div className="absolute top-[0] w-full h-[180px] bg-gradient-to-b from-light via-light to-transparent z-[1000]" />

                <div className="relative fantasy-container pt-[300px] overflow-y-auto max-h-screen">
                    {modal === 'STUDIO_A' && (
                        <StudioA />
                    )}

                    {modal === 'STUDIO_B' && (
                        <StudioB />
                    )}

                    {modal === 'VIRTUAL_PRODUCTION' && (
                        <VirtualProduction />
                    )}

                    {modal === 'CONTENT_CREATION' && (
                        <ContentCreation />
                    )}

                    {modal === 'MOTION_CAPTURING' && (
                        <MotionCapturing />
                    )}

                    {modal === 'TEAM' && (
                        <Team />
                    )}

                    {modal === 'PARTNERS' && (
                        <Partners />
                    )}
                </div>
            </div>

            <div className={clsx(
                "fixed z-[100] left-0 bottom-0 w-full h-[0px] bg-primary transition-all duration-300",
                modal && "h-[10px]"
            )} />

            <div className={clsx(
                "fixed z-[100] left-0 top-0 w-full h-[0px] bg-primary transition-all duration-300",
                modal && "h-[10px]"
            )} />

            <div className={clsx(
                "fixed z-[100] top-0 left-0 h-full w-[0px] bg-primary transition-all duration-300",
                modal && "w-[10px]"
            )} />

            <div className={clsx(
                "fixed z-[100] top-0 right-0 h-full w-[0px] bg-primary transition-all duration-300",
                modal && "w-[10px]"
            )} />

            <div className={clsx(
                "fixed w-full bottom-0 flex justify-center z-[100]",
                !modal && "hidden",
            )}>
                <button 
                    type="button"
                    className={clsx(
                        "btn-primary-orange btn-sm lg:btn-lg cursor-pointer",
                    )}
                    disabled={!modal}
                    onClick={() => setModal(null)}
                >
                    close
                </button>
            </div>
        </>
    )
}