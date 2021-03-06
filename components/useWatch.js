import { useEffect, useRef } from "react"

export default (nextVal, handler) => {
    const prevVal = useRef()
    useEffect(() => {
        const r = handler(nextVal, prevVal.current)
        prevVal.current = nextVal
        return r
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextVal])
}
