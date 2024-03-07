"use strict";

/**
 * light and dark mode
 */
const $themeBtn = document.querySelector("[data-theme-btn]");
const $html = document.querySelector("[data-theme]");

if (sessionStorage.length > 0) {
    $html.dataset.theme = sessionStorage.getItem("theme");
} else {
    $html.dataset.theme ? "dark" : "light";
    sessionStorage.setItem("theme", $html.dataset.theme)
};

$themeBtn.addEventListener("click", () => {
    $html.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $html.dataset.theme);
});

/**
 * tab
 */

// data color
const dataColorProjects = document.querySelector("[data-color-Projects]"),
dataColorResume = document.querySelector("[data-color-Resume]"),
dataColorContact = document.querySelector("[data-color-Contact]"),
dataTabProject = document.querySelector("[data-tab-Project]"),
dataTabResume = document.querySelector("[data-tab-resume]"),
dataTabContact = document.querySelector("[data-tab-contact]");

dataColorProjects.addEventListener("click", () => {
    // color
    dataColorProjects.style.color = "var(--primary)";
    dataColorResume.style.color = "var(--on-background)";
    dataColorContact.style.color = "var(--on-background)";

    // border
    dataColorProjects.style.borderBottom = "2px solid var(--primary)";
    dataColorResume.style.borderBottom = "none";
    dataColorContact.style.borderBottom = "none";

    dataTabProject.style.display = "";
    dataTabResume.style.display = "none";
    dataTabContact.style.display = "none";
});

dataColorResume.addEventListener("click", () => {
    // color
    dataColorResume.style.color = "var(--primary)";
    dataColorProjects.style.color = "var(--on-background)";
    dataColorContact.style.color = "var(--on-background)";

    // border
    dataColorResume.style.borderBottom = "2px solid var(--primary)";
    dataColorProjects.style.borderBottom = "none";
    dataColorContact.style.borderBottom = "none";
    
    dataTabResume.style.display = "";
    dataTabProject.style.display = "none";
    dataTabContact.style.display = "none";
});

dataColorContact.addEventListener("click", () => {
    // color
    dataColorContact.style.color = "var(--primary)";
    dataColorProjects.style.color = "var(--on-background)";
    dataColorResume.style.color = "var(--on-background)";

    // border
    dataColorContact.style.borderBottom = "2px solid var(--primary)";
    dataColorProjects.style.borderBottom = "none";
    dataColorResume.style.borderBottom = "none";
    
    dataTabContact.style.display = "";
    dataTabProject.style.display = "none";
    dataTabResume.style.display = "none";
});