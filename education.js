// globals
const DATA_JSON = await (await fetch('./data.json')).json();
const PAGE_TEXT_JSON = await (await fetch('./pageText.json')).json();

let LANGUAGES = ["en", "cn"];

let languageIndex;
let displayLanguage;

// an array
let EDUCATIONS_DATA = DATA_JSON["education"];

init();

function init() {
    setSessionDisplayLanguage();
    renderAllEducationData();
}

function setSessionDisplayLanguage() {
    languageIndex = sessionStorage.getItem("languageIndex");
    if (!languageIndex) {
        languageIndex = 0;
    }
    displayLanguage = LANGUAGES[languageIndex];
}

function renderAllEducationData() {
    let allEducationHTML = "";

    for (let i=0; i<EDUCATIONS_DATA.length; i++) {
        allEducationHTML += getEducationItemHTMLTemplate(EDUCATIONS_DATA[i]);
    }

    let mainElement = document.querySelector("main");
    mainElement.innerHTML = allEducationHTML;
}

function getEducationItemHTMLTemplate(educationItem) {
    // an education item represents education information at one institution
    let institutionName = educationItem["institution"][displayLanguage];
    let degreeTitle = educationItem["degree-title"][displayLanguage];
    let degreeClassification = educationItem["degree-classification"][displayLanguage];
    let startDate = educationItem["start-date"];
    let endDate = educationItem["end-date"];
    let modulesStudied = educationItem["modules-studied"];

    let academicYearsHTML = "";
    for (let academicYear=1; academicYear<=modulesStudied.length; academicYear++) {
        academicYearsHTML += getAcademicYearHTMLTemplate(modulesStudied[academicYear-1]);
    }

    return `
        <section class="education-institution-container">
            <h1 class="institution-name">${institutionName}</h1>
            <h2 class="degree-title">${degreeTitle}</h2>
            <h3 class="dergee-classification">${degreeClassification}</h3>
            ${academicYearsHTML}
        </section>\n
    `;
}

function getAcademicYearHTMLTemplate(modulesStudied) {
    let moduleCardsHTML = "";

    for (let i=0; i<modulesStudied.length; i++) {
        moduleCardsHTML += getModuleCardHTMLTemplate(modulesStudied[i]);
    }

    let academicYearHTML = `
        <div class="academic-year-container">
            <div class="modules-grid">
                ${moduleCardsHTML}
            </div>
        </div>\n
    `;

    return academicYearHTML;
}

function getModuleCardHTMLTemplate(moduleData) {
    let moduleCode = moduleData["module-code"];
    let moduleName = moduleData["module-name"][displayLanguage];
    let moduleDescription = moduleData["module-description"][displayLanguage];
    let workLinks = moduleData["links"];
    let imageSrc = moduleData["image"];
    
    let starIcon = "";
    if (moduleData["starred"]) {
        starIcon = `<span class="star"><ion-icon name="star"></ion-icon></span>`;
    }

    let cardHTML = `
        <div class="module-card" id="${moduleCode}">
            <div class="card-header">
                <div class="module-pic"><img src="${imageSrc}" /></div>
                ${starIcon}
            </div>

            <div class="card-body">
                <div class="module-code">${moduleCode.toUpperCase()}</div>
                <h4 class="module-name">${moduleName}</h4>
                <div class="module-description">${moduleDescription}</div>
                <div class="card-footer">
                    ${getPublicWorkLinksHTML(workLinks)}
                </div>
            </div>
        </div>\n
    `;

    return cardHTML;
}

function getPublicWorkLinksHTML(links) {
    // links for public work
    let linksHTML = "";
    for (let i=0; i<links.length; i++) {
        linksHTML += publicWorkLinkHTMLTemplate(links[i]);
        linksHTML += "\n";
    }
    return linksHTML;
}

function publicWorkLinkHTMLTemplate(link) {
    return `
        <a class="icon" href="${link}" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
        </a>
    `;
}
