import { useEffect, useState } from "react";
import { useActiveScene } from "../hooks/use-active-scene";
import clsx from "clsx";

export const Works = () => {
    const { setDisableChangingSceneByScroll} = useActiveScene();
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        setDisableChangingSceneByScroll(opened)
        
        if (opened) {
            document.getElementById('scn2-overlay')?.classList.add('opacity-60')
            document.getElementById('scn2-overlay')?.classList.remove('opacity-0')

            document.getElementById('scn2-content')?.classList.add('orange-context')
        }
        
        if (!opened) {
            document.getElementById('scn2-overlay')?.classList.remove('opacity-60')
            document.getElementById('scn2-overlay')?.classList.add('opacity-0')

            document.getElementById('scn2-content')?.classList.remove('orange-context')
        }
    }, [opened])

    return (
        <>
            <div className="flex gap-[14px] md:gap-[32px] flex-wrap w-full items-center justify-center">
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />

                {opened && (
                    <>
                    <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                    <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                    <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                <div className="bg-red-500 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1]" />
                    </>
                )}
            </div>

            <button 
                type="button"
                className={clsx(
                    "btn-tertiary-orange btn-sm lg:btn-lg cursor-pointer flex items-center gap-[10px]",
                    opened && "opacity-0"
                )}
                onClick={() => setOpened(true)}
                disabled={opened}
            >
                more works
            </button>

            <>
                <div className={clsx(
                    "fixed left-0 bottom-0 w-full h-[0px] bg-primary transition-all duration-300",
                    opened && "h-[10px]"
                )} />

                <div className={clsx(
                    "fixed left-0 top-0 w-full h-[0px] bg-primary transition-all duration-300",
                    opened && "h-[10px]"
                )} />

                <div className={clsx(
                    "fixed top-0 left-0 h-full w-[0px] bg-primary transition-all duration-300",
                    opened && "w-[10px]"
                )} />

                <div className={clsx(
                    "fixed top-0 right-0 h-full w-[0px] bg-primary transition-all duration-300",
                    opened && "w-[10px]"
                )} />


            
                <div className="fixed bottom-0 flex justify-center">
                    <button 
                        type="button"
                        className={clsx(
                            "btn-primary-orange btn-sm lg:btn-lg cursor-pointer",
                            opened && "opacity-100",
                            !opened && "opacity-0"
                        )}
                        disabled={!opened}
                        onClick={() => setOpened(false)}
                    >
                        close
                    </button>
                </div>
            </>
        </>
    )
}