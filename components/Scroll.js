function onScroll() {
    if (window.scrollY >= 20) {
        updateNavbar(true);
    } else {
        updateNavbar(false);
    }
}

window.addEventListener("scroll", onScroll);

export default function Scroll() {
    return null;
}