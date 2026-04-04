import { useEffect } from "react";

const useOutboundLinkTracking = () => {
    useEffect(() => {
        const tagOutboundLinks = () => {
            document.querySelectorAll("a").forEach((a) => {
                if (
                    a.host &&
                    a.host !== window.location.host &&
                    !a.getAttribute("data-umami-event")
                ) {
                    a.setAttribute("data-umami-event", "outbound-link-click");
                    a.setAttribute("data-umami-event-url", a.href);
                }
            });
        };

        tagOutboundLinks();

        const observer = new MutationObserver(tagOutboundLinks);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);
};

export default useOutboundLinkTracking;
