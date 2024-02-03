import { 
    DATA_JSON, PAGE_TEXT_JSON,
    displayLanguage, 
    wireHamburgerBtn, wireSwitchLanguageBtn, renderNavbar, addRenderFunction, render
} from "./global.js";

// an array
let EDUCATIONS_DATA = DATA_JSON["education"];

init();

function init() {
    addRenderFunction(renderNavbar);
    addRenderFunction(renderControlsSection);
    addRenderFunction(renderAllEducationData);
    render();
    wireEventListeners();
}

function renderControlsSection() {
    // checkbox text
    let showAllModulesText = PAGE_TEXT_JSON["education-section"]["show-all-modules"][displayLanguage];
    let showAllModulesLabel = document.querySelector(".show-modules-cb-container label");
    showAllModulesLabel.textContent = showAllModulesText;

    // uncheck/reset checkbox
    let showAllModulesCB = document.getElementById("show-all-modules-cb");
    showAllModulesCB.checked = false;
}

function wireEventListeners() {
    wireHamburgerBtn();
    wireSwitchLanguageBtn();
    wireShowAllModulesCB();
}

function wireShowAllModulesCB() {
    let showAllModulesCB = document.getElementById("show-all-modules-cb");
    showAllModulesCB.addEventListener("change", (e) => {
        let displayValue = e.target.checked ? "block" : "none";
        let nonStarredModules = document.querySelectorAll(".module-card:not(:has(span.star))");
        for (let i=0; i<nonStarredModules.length; i++) {
            nonStarredModules.item(i).style.display = displayValue;
        }
    });
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
    let logoPath = educationItem["logo"];
    let degreeTitle = educationItem["degree-title"][displayLanguage];
    let degreeClassification = educationItem["degree-classification"][displayLanguage];
    let startDate = educationItem["start-date"];
    let endDate = educationItem["end-date"];
    let modulesStudied = educationItem["modules-studied"];

    let academicYearsHTML = "";
    for (let academicYear=1; academicYear<=modulesStudied.length; academicYear++) {
        academicYearsHTML += getAcademicYearHTMLTemplate(academicYear, modulesStudied[academicYear-1]);
    }

    return `
        <section class="education-institution-container">
            <div class="education-header">
                <div class="institution-logo"><img src="${logoPath}" /></div>
                
                <div class="institution-details">
                    <div>${startDate} - ${endDate}</div>
                    <h1 class="degree-title">${degreeTitle}</h1>
                    <h3 class="institution-name">${institutionName}</h3>
                </div>
            </div>
            
            ${academicYearsHTML}
        </section>\n
    `;
}

function getAcademicYearHTMLTemplate(academicYear, modulesStudied) {
    let moduleCardsHTML = "";

    for (let i=0; i<modulesStudied.length; i++) {
        moduleCardsHTML += getModuleCardHTMLTemplate(modulesStudied[i]);
    }

    let academicYearText = PAGE_TEXT_JSON["education-section"]["years"][`${academicYear}`][displayLanguage];

    let academicYearHTML = `
        <div class="academic-year-container">
            <h1>${academicYearText}</h1>
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
