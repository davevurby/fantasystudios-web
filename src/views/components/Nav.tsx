import clsx from "clsx"

export const Nav = () => {

    const handleStudioClick = (studio: 'STUDIO_A' | 'STUDIO_B') => {
       
    }

    const handleSceneChange = (index: number) => {
        
    }

    const logoColorClass = 'light';

    return (
        <nav className="fixed top-[0] left-[0] w-full z-[200] flex justify-between items-center px-[30px] pt-[30px]">
            <button
                type="button"
                onClick={() => handleSceneChange(0)}
            >
                <svg width="87" height="24" viewBox="0 0 87 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-${logoColorClass}`}>
                    <path d="M1.66697 9.5V0.692H9.08297V2.432H3.46697V4.148H8.27897V5.9H3.46697V9.5H1.66697ZM12.3207 9.5L15.8727 0.692H17.6487L21.2007 9.5H19.2567L18.6207 7.868H14.9007L14.2647 9.5H12.3207ZM15.5487 6.188H17.9727L16.7607 3.056L15.5487 6.188ZM26.1053 9.5V0.692H28.3253L32.6693 6.536V0.692H34.4333V9.5H32.6693L27.8693 3.104V9.5H26.1053ZM42.8291 9.5V2.432H39.3131V0.692H48.1451V2.432H44.6291V9.5H42.8291ZM51.0465 9.5L54.5985 0.692H56.3745L59.9265 9.5H57.9825L57.3465 7.868H53.6265L52.9905 9.5H51.0465ZM54.2745 6.188H56.6985L55.4865 3.056L54.2745 6.188ZM68.4863 9.62C66.7943 9.62 65.1263 8.9 63.9863 7.856L65.6303 6.608C66.4343 7.46 67.4063 7.844 68.6663 7.844C69.6263 7.844 70.8503 7.568 70.8503 6.8C70.8503 6.224 70.2383 5.96 69.1343 5.84L67.8743 5.708C66.2423 5.54 64.4783 5.012 64.4783 3.176C64.4783 1.196 66.7823 0.536 68.2463 0.536C70.0343 0.536 71.5823 1.244 72.4583 2.18L70.8863 3.38C70.0343 2.588 69.2783 2.312 68.1143 2.312C67.2863 2.312 66.3383 2.504 66.3383 3.104C66.3383 3.716 67.0583 3.836 68.1263 3.968L69.4703 4.136C71.2943 4.364 72.7103 5.024 72.7103 6.752C72.7103 8.72 70.6823 9.62 68.4863 9.62ZM80.3426 9.5V6.152L76.5506 0.692H78.7346L81.2426 4.28L83.7146 0.692H85.8986L82.1426 6.176V9.5H80.3426Z" fill="currentColor"/>
                    <path d="M5.3497 23.62C3.6577 23.62 1.9897 22.9 0.849702 21.856L2.4937 20.608C3.2977 21.46 4.2697 21.844 5.5297 21.844C6.4897 21.844 7.7137 21.568 7.7137 20.8C7.7137 20.224 7.1017 19.96 5.9977 19.84L4.7377 19.708C3.1057 19.54 1.3417 19.012 1.3417 17.176C1.3417 15.196 3.6457 14.536 5.1097 14.536C6.8977 14.536 8.4457 15.244 9.3217 16.18L7.7497 17.38C6.8977 16.588 6.1417 16.312 4.9777 16.312C4.1497 16.312 3.2017 16.504 3.2017 17.104C3.2017 17.716 3.9217 17.836 4.9897 17.968L6.3337 18.136C8.1577 18.364 9.5737 19.024 9.5737 20.752C9.5737 22.72 7.5457 23.62 5.3497 23.62ZM17.4658 23.5V16.432H13.9498V14.692H22.7818V16.432H19.2658V23.5H17.4658ZM31.9125 23.62C29.5365 23.62 27.8685 22.096 27.8685 19.816V14.692H29.6805V19.576C29.6805 20.848 30.5205 21.844 31.9125 21.844C33.3045 21.844 34.1445 20.848 34.1445 19.576V14.692H35.9565V19.816C35.9565 22.096 34.2885 23.62 31.9125 23.62ZM41.6056 23.5V14.692H46.4176C48.8536 14.692 50.5456 16.492 50.5456 19.096C50.5456 21.784 49.0336 23.5 46.6816 23.5H41.6056ZM43.4056 21.796H46.0336C47.7856 21.796 48.6856 20.884 48.6856 19.096C48.6856 17.308 47.7856 16.396 46.0336 16.396H43.4056V21.796ZM55.9719 23.5V14.692H57.7719V23.5H55.9719ZM67.8724 23.656C65.1124 23.656 63.1924 21.556 63.1924 19.096C63.1924 16.636 65.1124 14.536 67.8724 14.536C70.6324 14.536 72.5524 16.636 72.5524 19.096C72.5524 21.556 70.6324 23.656 67.8724 23.656ZM65.0524 19.096C65.0524 20.752 66.3364 21.88 67.8724 21.88C69.4084 21.88 70.6924 20.752 70.6924 19.096C70.6924 17.44 69.4084 16.312 67.8724 16.312C66.3364 16.312 65.0524 17.44 65.0524 19.096ZM81.8206 23.62C80.1286 23.62 78.4606 22.9 77.3206 21.856L78.9646 20.608C79.7686 21.46 80.7406 21.844 82.0006 21.844C82.9606 21.844 84.1846 21.568 84.1846 20.8C84.1846 20.224 83.5726 19.96 82.4686 19.84L81.2086 19.708C79.5766 19.54 77.8126 19.012 77.8126 17.176C77.8126 15.196 80.1166 14.536 81.5806 14.536C83.3686 14.536 84.9166 15.244 85.7926 16.18L84.2206 17.38C83.3686 16.588 82.6126 16.312 81.4486 16.312C80.6206 16.312 79.6726 16.504 79.6726 17.104C79.6726 17.716 80.3926 17.836 81.4606 17.968L82.8046 18.136C84.6286 18.364 86.0446 19.024 86.0446 20.752C86.0446 22.72 84.0166 23.62 81.8206 23.62Z" fill="currentColor"/>
                </svg>
            </button>

            <div className={clsx(
                "absolute left-0 right-0 mx-auto top-[calc(30px+56px+32px)] lg:top-[30px] h-[56px] w-auto gap-[48px] hidden md:flex justify-center items-center pointer-events-none transition-opacity duration-800",
            )}>
                <button className={clsx(
                    "text-[12px] tracking-[0.3em] px-[10px] h-[24px] pt-[3px] uppercase pointer-events-auto transition-all duration-800 cursor-pointer",
                    // activeIndex === 3 && "text-dark-1 bg-primary",
                    // activeIndex !== 3 && "text-primary",
                    // disableLinks && "opacity-0 pointer-events-none"
                    "text-primary"
                )} onClick={() => handleSceneChange(3)}>projects</button>

                <button className={clsx(
                    "text-[12px] tracking-[0.3em] px-[10px] h-[24px] pt-[3px] uppercase pointer-events-auto transition-all duration-800 cursor-pointer",
                    // activeIndex === 5 && "text-dark-1 bg-primary",
                    // activeIndex !== 5 && "text-primary",
                    // disableLinks && "opacity-0 pointer-events-none"
                    "text-primary"
                )} onClick={() => handleSceneChange(5)}>services</button>

                <div className="relative flex gap-[4px] p-[4px] border border-primary">
                    <button className={clsx(
                        "text-[12px] tracking-[0.3em] px-[10px] h-[24px] pt-[3px] uppercase pointer-events-auto cursor-pointer transition-all duration-800",
                        // visibleStudio === 'STUDIO_A' && "text-dark-1 bg-primary",
                        // visibleStudio !== 'STUDIO_A' && "text-primary"
                        "text-primary"
                    )} onClick={() => handleStudioClick('STUDIO_A')}>studio a</button>

                    <button className={clsx(
                        "text-[12px] tracking-[0.3em] px-[10px] h-[24px] pt-[3px] uppercase pointer-events-auto cursor-pointer transition-all duration-800",
                        // visibleStudio === 'STUDIO_B' && "text-dark-1 bg-primary",
                        // visibleStudio !== 'STUDIO_B' && "text-primary"
                        "text-primary"
                    )} onClick={() => handleStudioClick('STUDIO_B')}>studio b</button>

                    <div className="absolute top-[calc(100%+7px)] left-0 w-full text-center text-primary uppercase text-[9px] tracking-[2em] px-[44px]">studios</div>
                </div>

                <button className={clsx(
                    "text-[12px] tracking-[0.3em] px-[10px] h-[24px] pt-[3px] uppercase pointer-events-auto transition-all duration-800 cursor-pointer",
                    // activeIndex === 9 && "text-dark-1 bg-primary",
                    // activeIndex !== 9 && "text-primary",
                    // disableLinks && "opacity-0 pointer-events-none"
                    "text-primary"
                )} onClick={() => handleSceneChange(9)}>about us</button>

                <button className={clsx(
                    "text-[12px] tracking-[0.3em] px-[10px] h-[24px] pt-[3px] uppercase pointer-events-auto transition-all duration-800 cursor-pointer",
                    "text-primary"
                )} onClick={() => handleSceneChange(10)}>contact</button>
            </div>

            <div />
        </nav>
    )
}