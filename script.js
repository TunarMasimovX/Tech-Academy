let navLinks = document.querySelectorAll(".nav-link");
let headerLiBottomDivs = document.querySelectorAll(".header-li-bottom-div1");

navLinks.forEach((navLink, index) => {
    navLink.addEventListener("mouseover", () => {
        headerLiBottomDivs[index].style.display = "flex";
    });

    navLink.addEventListener("mouseout", () => {
        headerLiBottomDivs[index].style.display = "none";
    });

    headerLiBottomDivs[index].addEventListener("mouseover", () => {
        headerLiBottomDivs[index].style.display = "flex";
    });

    headerLiBottomDivs[index].addEventListener("mouseout", () => {
        headerLiBottomDivs[index].style.display = "none";
    });
});

