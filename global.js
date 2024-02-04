// globals
const DATA_JSON = await (await fetch('./data.json')).json();
const PAGE_TEXT_JSON = await (await fetch('./pageText.json')).json();
const RESUME_DATA_JSON = await (await fetch('./resumeData.json')).json();

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

function setLanguageIndex(index) {
    languageIndex = index;
}

let displayLanguage = LANGUAGES[languageIndex];

function setDisplayLanguage() {
    displayLanguage = LANGUAGES[languageIndex];
}

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

let renderFunctions = [];
function addRenderFunction(f) {
    renderFunctions.push(f);
}

function render() {
    renderFunctions.forEach( f => f());
}

function wireSwitchLanguageBtn() {
    // wire switch language button event
    let switchLanguageBtns = document.getElementsByClassName("switch-language-btn");
    for (let i=0; i<switchLanguageBtns.length; i++) {
        switchLanguageBtns.item(i).addEventListener("click", () => {
            // cycle through languages list and re-render page
            setLanguageIndex((languageIndex+1) % LANGUAGES.length);
            setDisplayLanguage();
            render();

            // store languageIndex in session storage
            sessionStorage.setItem("languageIndex", languageIndex);
        });
    }
}

function renderNavbar() {
    // add header element first ...
    setHeaderElement();

    // ... then render text
    let NAV_LINKS = PAGE_TEXT_JSON["nav-links"];
    for (const [navName, navText] of Object.entries(NAV_LINKS)) {
        let navElements = document.getElementsByClassName(`${navName}-nav`);
        for (let i=0; i<navElements.length; i++) {
            navElements.item(i).textContent = navText[displayLanguage];
        }
    }
}

function wireNavbarEventListeners() {
    wireHamburgerBtn();
    wireSwitchLanguageBtn();
}

function setHeaderElement() {
    let headerElement = document.querySelector("header");
    if (!headerElement) {
        headerElement = document.createElement("header");
        let bodyElement = document.querySelector("body");
        bodyElement.prepend(headerElement);
    }

    headerElement.innerHTML = getHeaderTemplateHTML();

    wireNavbarEventListeners();
}

function getHeaderTemplateHTML() {
    return `
        <div class="logo"><a href="./index.html#"><span class="typewrite"><span>Tony Wu.</span></span></a></div>

        <nav id="desktop-nav">
        <ul class="nav-links">
            <li><a class="about-nav" href="./index.html#about"></a></li>
            <li><a class="skills-nav" href="./index.html#skills"></a></li>
            <li><a class="projects-nav" href="./index.html#projects"></a></li>
            <li><a class="contacts-nav" href="./index.html#contacts"></a></li>
            <li><a class="switch-language-btn icon"><ion-icon name="language"></ion-icon></a></li>
        </ul>
        </nav>

        <nav id="hamburger-nav">
        <div class="hamburger-menu">
            <!-- this element will act as the button for opening and closing the nav menu -->
            <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
            </div>

            <div class="menu-links">
            <li><a class="about-nav nav-link" href="./index.html#about"></a></li>
            <li><a class="skills-nav nav-link" href="./index.html#skills"></a></li>
            <li><a class="projects-nav nav-link" href="./index.html#projects"></a></li>
            <li><a class="contacts-nav nav-link" href="./index.html#contacts"></a></li>
            <li><a class="switch-language-btn icon"><ion-icon name="language"></ion-icon></a></li>
            </div>
        </div>
        </nav>
    `;
}

export {
    DATA_JSON,
    PAGE_TEXT_JSON,
    RESUME_DATA_JSON,
    LANGUAGES,
    INTERESTS,
    languageIndex,
    displayLanguage,
    renderNavbar,
    addRenderFunction,
    render
};