import { 
    DATA_JSON, RESUME_DATA_JSON,
    displayLanguage, 
    renderNavbar, addRenderFunction, render
} from "./global.js";

let styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

init();

function init() {
    addRenderFunction(renderNavbar);
    addRenderFunction(renderControls);
    addRenderFunction(renderLanguagesSection);
    addRenderFunction(renderTechnicalSkillsSection);
    addRenderFunction(renderAchievementsSection);
    addRenderFunction(renderHeaderSection);
    addRenderFunction(renderEducationSection);
    addRenderFunction(renderProjectsSection);
    addRenderFunction(renderAboutSection);
    render();
    wireEventListeners();
}

function wireEventListeners() {
    // controls
}

// strongly coupled with current setup: html section structure and resume json data structure
// make sure these files use sectionName where needed
// then only need to pass in template function to return HTML
function generalRenderFunction(sectionName, getTemplateFunction) {
    // render section title
    let titleElement = document.querySelector(`.${sectionName} h2 span`);
    titleElement.textContent = 
        RESUME_DATA_JSON[`${sectionName}-section`]["title"][displayLanguage];

    // render container
    let sectionData = RESUME_DATA_JSON[`${sectionName}-section`][`${sectionName}`];
    let sectionContainerElement = document.querySelector(`.${sectionName}-container`);
    sectionContainerElement.innerHTML = ""; // clear inner HTML
    sectionData.forEach(itemJson => {
        sectionContainerElement.innerHTML += getTemplateFunction(itemJson);
    });
}

function renderControls() {
    let downloadBtnText = RESUME_DATA_JSON["controls"]["download-btn"][displayLanguage]
    document.querySelector(".download-btn").textContent = downloadBtnText;
}

function renderLanguagesSection() {
    generalRenderFunction("languages", languageJson => {
        let name = languageJson["name"];
        let proficiency = languageJson["proficiency"];

        let cssClassName = name["en"].toLowerCase();

        // add styles to stylesheet element
        styleSheet.innerText += `
            .skill-per.${cssClassName} {
                width: ${proficiency["quantification"]}%;
            }
        `;

        return `
            <div class="language-item">
                <div class="skill-name">${name[displayLanguage]} (${proficiency[displayLanguage]})</div>
                <div class="skill-bar">
                    <span class="skill-per ${cssClassName}"></span>
                </div>
            </div>
        `;
    });
}

function renderTechnicalSkillsSection() {
    generalRenderFunction("technical-skills", descriptionJson => {
        return `<li>${descriptionJson[displayLanguage]}</li>`;
    });
}

function renderAchievementsSection() {
    generalRenderFunction("achievements", achievementJson => {
        let year = achievementJson["year"];
        let description = achievementJson[displayLanguage];
        return `
            <div class="achievement-item">
                <span class="achievement-year">${year}</span> - 
                <span class="achievement-description">${description}</span>
            </div>
        `;
    });
}

function renderHeaderSection() {
    let name = DATA_JSON["about"]["name"][displayLanguage];
    let interest = RESUME_DATA_JSON["header"]["interest"][displayLanguage];

    document.querySelector(".name").textContent = name;
    document.querySelector(".interest").textContent = interest;
}

function renderEducationSection() {
    generalRenderFunction("education", educationJson => {
        let institutionName = educationJson["institution"][displayLanguage];
        let degreeTitle = educationJson["degree-title"][displayLanguage];
        let degreeClassification = educationJson["degree-classification"][displayLanguage];
        let startDate = educationJson["start-date"];
        let endDate = educationJson["end-date"];

        return `
            <div class="education-container">
                <div class="education-item">
                    <div class="education-date"><p>${startDate} - ${endDate}</p></div>
                    <div class="education-details-container">
                        <div class="education-institution-course">
                            <span class="education-institution">${institutionName}</span>
                            <span class="education-course">${degreeTitle}</span>
                        </div>

                        <div>${degreeClassification}</div>
                    </div>
                </div>
            </div>
        `;
    })
}

function renderProjectsSection() {
    let notesElement = document.querySelector(".projects .notes");
    let notesText = RESUME_DATA_JSON[`projects-section`]["notes"][displayLanguage];
    notesElement.innerHTML = `<span class="asterisk">*</span> ${notesText}`;

    let inProgressText = RESUME_DATA_JSON[`projects-section`]["statuses"]["in-progress"][displayLanguage];

    generalRenderFunction("projects", projectJson => {
        let projectName = projectJson["project-name"][displayLanguage];
        let asterisk = projectJson["links"].length != 0 ? `<span class="asterisk">*</span>` : "";
        let inProgress = projectJson["in-progress"]? `<span class="project-in-progress">${inProgressText}</span>` : "";
        let projectDescription = projectJson["project-description"][displayLanguage];

        return `
            <div class="project-item">
                <span class="project-item-title">${projectName}${asterisk}</span> ${inProgress} - ${projectDescription}
            </div>
        `;
    });
}

function renderAboutSection() {
    generalRenderFunction("about", descriptionJson => {
        return `<li>${descriptionJson[displayLanguage]}</li>`
    });
}