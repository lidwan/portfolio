import { useEffect, useRef, useState } from "react";

const hasReducedMotionPreference = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const useRevealOnScroll = ({
    threshold = 0.18,
    rootMargin = "0px 0px -12% 0px",
    once = true,
} = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(() => hasReducedMotionPreference());

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return undefined;
        }

        if (hasReducedMotionPreference() || typeof IntersectionObserver === "undefined") {
            setIsVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) {
                        observer.unobserve(element);
                    }

                    return;
                }

                if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [once, rootMargin, threshold]);

    return { ref, isVisible };
};

export default useRevealOnScroll;
