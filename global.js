// globals
const DATA_JSON = await (await fetch('./data.json')).json();
const PAGE_TEXT_JSON = await (await fetch('./pageText.json')).json();

const LANGUAGES = ["en", "cn"];
const INTERESTS = [
    "Software Engineering", 
    "Machine Learning", 
    "Robotics", 
    "Embedded Systems", 
    "Engineering", 
    "Language Learning", 
    "Self Improvement", 
    "Content Creation", 
    "Self Doxxing", 
    "Return to Monke"
];

let languageIndex = (() => {
    let index = sessionStorage.getItem("languageIndex");
    return index? index : 0;
})();

let displayLanguage = LANGUAGES[languageIndex];

function wireHamburgerBtn() {
    // wire toggle nav menu event
    let hamburgerBtn = document.querySelector(".hamburger-icon");
    hamburgerBtn.addEventListener("click", toggleMenu);
    let linksToWire = document.querySelectorAll(".nav-link");
    for (let i=0; i<linksToWire.length; i++) {
        linksToWire.item(i).addEventListener("click", toggleMenu);
    }

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}

function wireSwitchLanguageBtn() {
    // wire switch language button event
    let switchLanguageBtns = document.getElementsByClassName("switch-language-btn");
    for (let i=0; i<switchLanguageBtns.length; i++) {
        switchLanguageBtns.item(i).addEventListener("click", () => {
            // cycle through languages list and re-render page
            languageIndex = (languageIndex+1) % LANGUAGES.length;
            displayLanguage = LANGUAGES[languageIndex];
            render();

            // store languageIndex in session storage
            sessionStorage.setItem("languageIndex", languageIndex);

            languageFlexDirectionAsRowCheck();
        });
    }
}

function renderNavbar() {
    let NAV_LINKS = PAGE_TEXT_JSON["nav-links"];
    for (const [navName, navText] of Object.entries(NAV_LINKS)) {
        let navElements = document.getElementsByClassName(`${navName}-nav`);
        for (let i=0; i<navElements.length; i++) {
            navElements.item(i).textContent = navText[displayLanguage];
        }
    }
}

export { 
    DATA_JSON, 
    PAGE_TEXT_JSON, 
    LANGUAGES, 
    INTERESTS, 
    languageIndex, 
    displayLanguage, 
    wireHamburgerBtn,
    wireSwitchLanguageBtn,
    renderNavbar
};