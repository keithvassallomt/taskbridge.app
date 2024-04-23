document.addEventListener("DOMContentLoaded", init);

function init() {
    toggleColourMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function toggleColourMode(mode) {
    document.documentElement.setAttribute("data-bs-theme", mode);
    [].forEach.call(document.querySelectorAll('.screenshot'), function(el) {
        el.src = `assets/${el.id}_${mode}.png`;
    });
}

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
              (bottom > 0 && bottom < innerHeight)) &&
              ((left > 0 && left < innerWidth) ||
                  (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

const highlightScreenshots = function () {
    [].forEach.call(document.querySelectorAll('img'), function (el) {
        if (elementIsVisibleInViewport(el)) {
            el.classList.add("highlight");
        } else {
            el.classList.remove("highlight");
        }
    });
};

window.addEventListener('scroll', highlightScreenshots, false);
