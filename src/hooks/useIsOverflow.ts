import { MutableRefObject, useEffect, useState } from "react"

export const useIsOverflow = (ref: MutableRefObject<HTMLDivElement>, callback?: Function) : boolean => {
    const [isOverflow, setIsOverflow] = useState<boolean>(false)

    
    useEffect(() => {
        const { current } = ref;

        const trigger = () => {
            const hasOverflowX = current.scrollWidth > current.clientWidth

            setIsOverflow(hasOverflowX)

            if(callback) callback(hasOverflowX)
        }

        if(current){
            trigger()
        }

    }, [callback, ref])

    return isOverflow
}