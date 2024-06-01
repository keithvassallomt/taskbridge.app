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

const elementIsVisibleInViewport = (el) => {
    const bBox = el.getBoundingClientRect();
    return (bBox.top > 0 && bBox.bottom < window.innerHeight + 50)
};

const highlightScreenshots = function () {
    [].forEach.call(document.querySelectorAll('img'), function (el) {
        if (elementIsVisibleInViewport(el)) {
            if (el.id == "scr_reminders") {
                console.log('Adding highlight to ' + el.id)
            }
            el.classList.add("highlight");
        } else {
            if (el.id == "scr_reminders") {
                console.log('Removing highlight from ' + el.id)
            }
            el.classList.remove("highlight");
        }
    });
};

window.addEventListener('scroll', highlightScreenshots, false);
