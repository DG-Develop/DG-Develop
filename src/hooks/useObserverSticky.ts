import { useEffect, useRef, useState } from "react";

export default function useObserverSticky(options: object){
    const [elements, setElements] = useState([])
    const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

    const observer = useRef(new IntersectionObserver(observerEntries => {
        setEntries(observerEntries)
    }))

    useEffect(() => {
        const currentObserver = observer.current
        
        currentObserver.disconnect()

        if(elements.length > 0){
            elements.forEach(element => currentObserver.observe(element))
        }

        return function cleanUp(){
            if(currentObserver){
                currentObserver.disconnect()
            }
        }

    }, [elements])

    return 

}