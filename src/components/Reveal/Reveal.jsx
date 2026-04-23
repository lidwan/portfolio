import PropTypes from "prop-types";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";

const Reveal = ({
    as: Tag = "div",
    children,
    className = "",
    delay = 0,
    threshold,
    rootMargin,
    style,
    ...props
}) => {
    const { ref, isVisible } = useRevealOnScroll({ threshold, rootMargin });

    return (
        <Tag
            ref={ref}
            className={`revealBlock${isVisible ? " revealBlock--visible" : ""}${className ? ` ${className}` : ""}`}
            style={{ "--reveal-delay": `${delay}ms`, ...style }}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Reveal;

Reveal.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delay: PropTypes.number,
    rootMargin: PropTypes.string,
    style: PropTypes.object,
    threshold: PropTypes.number,
};
