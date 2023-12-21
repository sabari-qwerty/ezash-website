import { useEffect, useRef } from "react";

export const useClickOutSide = (hadnler: () => void) => {

    const domNode = useRef<any>();

    useEffect(() => {
        document.onkeydown = (e) => {
            if (e.key === "Escape") {
                hadnler()
            }
        }
        let handleAction = (e: any) => {
            if (!domNode.current?.contains(e.target)) {
                hadnler()
            }
        }
        document.addEventListener("mousedown", handleAction)

        return () => document.removeEventListener("mousedown", handleAction)
    }
    )

    return domNode

}