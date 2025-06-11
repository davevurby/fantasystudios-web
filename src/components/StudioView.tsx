import clsx from "clsx";
import { useStudioViewStore } from "../hooks/use-studio-view";
import { useActiveScene } from "../hooks/use-active-scene";
import { useEffect } from "react";

export const StudioView = () => {
    const { visibleStudio, setVisibleStudio } = useStudioViewStore();
    const { setDisableChangingSceneByScroll } = useActiveScene();

    useEffect(() => {
        if (visibleStudio) {
            setDisableChangingSceneByScroll(true);
        } else {
            setDisableChangingSceneByScroll(false);
        }
    }, [visibleStudio]);

    return (
        <>
            <div className={clsx(
                "fixed z-[100] top-0 left-0 w-full h-full bg-light transition-all duration-300",
                !visibleStudio && "hidden"
            )} />

            <div className={clsx(
                "fixed z-[100] left-0 bottom-0 w-full h-[0px] bg-primary transition-all duration-300",
                visibleStudio && "h-[10px]"
            )} />

            <div className={clsx(
                "fixed z-[100] left-0 top-0 w-full h-[0px] bg-primary transition-all duration-300",
                visibleStudio && "h-[10px]"
            )} />

            <div className={clsx(
                "fixed z-[100] top-0 left-0 h-full w-[0px] bg-primary transition-all duration-300",
                visibleStudio && "w-[10px]"
            )} />

            <div className={clsx(
                "fixed z-[100] top-0 right-0 h-full w-[0px] bg-primary transition-all duration-300",
                visibleStudio && "w-[10px]"
            )} />

            <div className={clsx(
                "fixed w-full bottom-0 flex justify-center z-[100]",
                !visibleStudio && "hidden",
            )}>
                <button 
                    type="button"
                    className={clsx(
                        "btn-primary-orange btn-sm lg:btn-lg cursor-pointer",
                    )}
                    disabled={!visibleStudio}
                    onClick={() => setVisibleStudio(null)}
                >
                    close
                </button>
            </div>
        </>
    )
}