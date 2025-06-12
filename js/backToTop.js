document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    if (scrollToTopBtn) {
        const rootElement = document.documentElement;

        function handleScroll() {
            const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
            if ((rootElement.scrollTop / scrollTotal) > 0.10) {
                scrollToTopBtn.classList.add("showBtn")
            } else {
                scrollToTopBtn.classList.remove("showBtn")
            }
        }

        function scrollToTop() {
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        scrollToTopBtn.addEventListener("click", scrollToTop);
        document.addEventListener("scroll", handleScroll);
    }
});