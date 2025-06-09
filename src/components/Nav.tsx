import { useActiveScene } from "../hooks/use-active-scene"

export const Nav = () => {
    const { setActiveIndex } = useActiveScene()

    const handleSceneChange = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <nav className="fixed top-[20px] left-[20px] z-[20] flex gap-[10px] text-white">
            <button onClick={() => handleSceneChange(1)}>scene 1</button>
            <button onClick={() => handleSceneChange(3)}>scene 2</button>
            <button onClick={() => handleSceneChange(5)}>scene 3</button>
            <button onClick={() => handleSceneChange(7)}>scene 4</button>
            <button onClick={() => handleSceneChange(9)}>scene 5</button>
        </nav>
    )
}