import { useRef, useEffect } from "react";

const SidebarHandler = () => {

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const elementRefs = useRef();

    const onScroll = () => {
        if (!elementRefs.current) return;
        
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = elementRefs.current.getBoundingClientRect().top;
        const offset   = elemRect - bodyRect;

        if (window.scrollY + document.documentElement.clientHeight >= offset) {
            elementRefs.current.style.cssText = `
                padding-top: ${Math.round(elemRect >=0 ? 0 : -elemRect + 15)}px;
            `;
        }
    }

    return {
        elementRefs
    }

}

export default SidebarHandler;