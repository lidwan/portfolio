import './scrollUp.css';

const getScrollTop = () => {
    const scrollingElement = document.scrollingElement || document.documentElement || document.body;

    return (
        window.pageYOffset ??
        scrollingElement?.scrollTop ??
        document.documentElement.scrollTop ??
        document.body.scrollTop ??
        0
    );
};

const setScrollTop = (top) => {
    try {
        window.scrollTo({ top, behavior: 'auto' });
    } catch {
        window.scrollTo(0, top);
    }

    if (document.scrollingElement) {
        document.scrollingElement.scrollTop = top;
    }

    document.documentElement.scrollTop = top;
    document.body.scrollTop = top;
};

const ScrollUp = () => {
    const scrollToTop = () => {
        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        const startTop = getScrollTop();

        if (startTop <= 0) {
            return;
        }

        if (prefersReducedMotion) {
            setScrollTop(0);
            return;
        }

        const startTime = performance.now();
        const duration = Math.min(700, Math.max(280, startTop * 0.2));

        const step = (now) => {
            const progress = Math.min(1, (now - startTime) / duration);
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setScrollTop(Math.round(startTop * (1 - easedProgress)));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <div className="pageReturnControl">
            <button
                type="button"
                className="pageReturnButton"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
            >
                Scroll back up?
            </button>
        </div>
    );
};

export default ScrollUp;
