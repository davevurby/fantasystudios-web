import { useEffect, useState } from "react";
import clsx from "clsx";

const works = [
    {
        id: 1,
        image: "/works/01-OnePlay-The_World_of_Reality_Show.jpg",
        link: 'https://player.vimeo.com/video/1068824867?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    },
    {
        id: 2,
        image: "/works/07-Chance.jpg",
        link: "https://player.vimeo.com/video/1093336770?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 3,
        image: "/works/04-Budvar.jpg",
        link: "https://player.vimeo.com/video/1074618820?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 4,
        image: "/works/04-McDonalds.jpg",
        link: "https://player.vimeo.com/video/1050466491?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 5,
        image: "/works/IWTV.jpg",
        link: "https://player.vimeo.com/video/1093338403?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 6,
        image: "/works/02-Oneplay-Mix.jpg",
        link: "https://player.vimeo.com/video/1060386393?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 7,
        image: "/works/07-Exness.jpg",
        link: "https://player.vimeo.com/video/1088020071?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 8,
        image: "/works/HallowRoad.jpg",
        link: "https://player.vimeo.com/video/1093333812?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 9,
        image: "/works/06-Bohemia_Sekt.jpg",
        link: "https://player.vimeo.com/video/1093337596?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 10,
        image: "/works/Bora.jpg",
        link: "https://player.vimeo.com/video/1093331534?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 11,
        image: "/works/08-Fantasy_Christmas.jpg",
        link: "https://player.vimeo.com/video/1040740244?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 12,
        image: "/works/07-Sporitelna.jpg",
        link: "https://player.vimeo.com/video/1093342996?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 13,
        image: "/works/09-O2.jpg",
        link: "https://player.vimeo.com/video/1093341194?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 14,
        image: "/works/10-Helena_Rubinstein.jpg",
        link: "https://player.vimeo.com/video/1060385710?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 15,
        image: "/works/14-Republica.jpg",
        link: "https://player.vimeo.com/video/1040042940?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 16,
        image: "/works/12-Noci_a_Dny.jpg",
        link: "https://player.vimeo.com/video/1093341616?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 17,
        image: "/works/16-Trezor.jpg",
        link: "https://player.vimeo.com/video/1093341990?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 18,
        link: "https://player.vimeo.com/video/1093341616?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 19,
        image: "/works/11-Annabelle.jpg",
        link: "https://player.vimeo.com/video/1093338772?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 20,
        image: "/works/15-One_Heart.jpg",
        link: "https://player.vimeo.com/video/1093342403?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    }
]

export const Works = () => {
    const [opened, setOpened] = useState(false)
    const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null)
    const [hoveredWorkId, setHoveredWorkId] = useState<number | null>(null);

    useEffect(() => {
        if (opened) {
            document.getElementById('scn2-overlay')?.classList.add('opacity-60')
            document.getElementById('scn2-overlay')?.classList.remove('opacity-0')

            document.getElementById('scn2-content')?.classList.add('orange-context')
            
            // Disable document scroll
            document.body.style.overflow = 'hidden'
        }
        
        if (!opened) {
            document.getElementById('scn2-overlay')?.classList.remove('opacity-60')
            document.getElementById('scn2-overlay')?.classList.add('opacity-0')

            document.getElementById('scn2-content')?.classList.remove('orange-context')
            
            // Enable document scroll
            document.body.style.overflow = 'auto'
        }
    }, [opened])

    const handleWorkClick = (work: typeof works[0]) => {
        setSelectedWork(work)

        document.getElementById('nav')?.classList.add('hidden')
    }

    const closeVideoModal = () => {
        setSelectedWork(null)

        document.getElementById('nav')?.classList.remove('hidden')
    }

    return (
        <>
            <div className="flex gap-[14px] md:gap-[32px] flex-wrap w-full items-center justify-center">
                {works.slice(0, 3).map((work) => (
                    <button 
                        key={work.id} 
                        className={clsx(
                            "bg-dark-1 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1] transition-opacity cursor-pointer relative overflow-hidden",
                            hoveredWorkId !== null && hoveredWorkId !== work.id && "opacity-60",
                            hoveredWorkId === work.id && "opacity-100"
                        )}
                        style={{
                            backgroundImage: `url(${work.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        onClick={() => handleWorkClick(work)}
                        onMouseEnter={() => setHoveredWorkId(work.id)}
                        onMouseLeave={() => setHoveredWorkId(null)}
                    />
                ))}

                {opened && (
                    <>
                        {works.slice(3).map((work) => (
                            <button 
                                key={work.id} 
                                className={clsx(
                                    "bg-dark-1 w-[calc(33.33333333333333%-14px)] md:w-[calc(33.33333333333333%-32px)] aspect-[2/1] transition-opacity cursor-pointer relative overflow-hidden",
                                    hoveredWorkId !== null && hoveredWorkId !== work.id && "opacity-60",
                                    hoveredWorkId === work.id && "opacity-100"
                                )}
                                style={{
                                    backgroundImage: `url(${work.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                onClick={() => handleWorkClick(work)}
                                onMouseEnter={() => setHoveredWorkId(work.id)}
                                onMouseLeave={() => setHoveredWorkId(null)}
                            />
                        ))}

                        <div className="w-full h-[132px]" />
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

            {/* Video Modal */}
            {selectedWork && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]">
                    <div className="relative w-full h-full">
                        <iframe
                            src={`${selectedWork.link}&autoplay=1`}
                            className="w-full h-full"
                        />
                        <div className="fixed top-0 right-0 z-[1000]">
                            <button 
                                type="button"
                                className="btn-primary-orange btn-sm lg:btn-lg cursor-pointer"
                                onClick={closeVideoModal}
                            >
                                close
                            </button>
                        </div>
                    </div>
                </div>
            )}

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