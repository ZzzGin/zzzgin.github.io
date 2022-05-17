const SVG_NAMESPACE = "http://www.w3.org/2000/svg";



export function createText(options) {
    const text = document.createElementNS(SVG_NAMESPACE, "text");
    text.setAttribute("alignment-baseline", "central");
    text.setAttribute("dominant-baseline", "central");
    text.textContent = options.content;

    if (options.fill) {
        text.setAttribute("fill", options.fill);
    }

    if (options.font) {
        text.setAttribute("style", `font: ${options.font}`);
    }

    if (options.anchor) {
        text.setAttribute("text-anchor", options.anchor);
    }

    if (options.translate) {
        text.setAttribute("x", options.translate.x.toString());
        text.setAttribute("y", options.translate.y.toString());
    }

    if (options.rotate) {
        text.setAttribute("transform", `rotate(${options.rotate})`);
    }

    if (options.onClick) {
        text.addEventListener("click", options.onClick);
    }

    return text;
}

export function createG(options) {
    const g = document.createElementNS(SVG_NAMESPACE, "g");
    options.children.forEach((child) => child && g.appendChild(child));

    if (options.translate) {
        g.setAttribute(
            "transform",
            `translate(${options.translate.x}, ${options.translate.y})`,
        );
    }

    if (options.fill) {
        g.setAttribute("fill", options.fill);
    }

    if (options.stroke) {
        g.setAttribute("stroke", options.stroke);
    }

    if (options.strokeWidth) {
        g.setAttribute("stroke-width", options.strokeWidth.toString());
    }

    if (options.onClick) {
        g.addEventListener("click", options.onClick);
    }

    if (options.onMouseOver) {
        g.addEventListener("mouseover", options.onMouseOver);
    }

    if (options.onMouseOut) {
        g.addEventListener("mouseout", options.onMouseOut);
    }

    return g;
}

export function createForeignObject(options) {
    const result = document.createElementNS(SVG_NAMESPACE, "foreignObject");
    result.setAttribute("width", options.width.toString());

    if (options.translate) {
        result.setAttribute("x", options.translate.x.toString());
        result.setAttribute("y", options.translate.y.toString());
    }

    const p = document.createElement("p");
    p.textContent = options.content;
    result.appendChild(p);

    return result;
}