import { 
    DATA_JSON, PAGE_TEXT_JSON, LANGUAGES, 
    languageIndex, displayLanguage, 
    wireHamburgerBtn, wireSwitchLanguageBtn, renderNavbar
} from "./global.js";

let styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

// let languageFlexDirectionAsRow = displayLanguage === LANGUAGES[1];
function languageFlexDirectionAsRowCheck() {
    // if (displayLanguage === LANGUAGES[1]) {
    //     let elementsToToggle = document.querySelectorAll("#language-skills .skill-details");
    //     for (let i=0; i<elementsToToggle.length; i++) {
    //         elementsToToggle.item(i).classList.toggle('row');
    //     }
    // }
}

init();

function init() {
    wireEventListeners();
    render();

    languageFlexDirectionAsRowCheck();
}

function wireEventListeners() {
    wireHamburgerBtn();
    wireSwitchLanguageBtn();
}

function renderLandingSection() {
    // text content
    let greetingText = PAGE_TEXT_JSON["landing-section"]["greeting"][displayLanguage];
    let nameText = DATA_JSON["about"]["name"][displayLanguage];
    let occupationText = PAGE_TEXT_JSON["landing-section"]["occupation"][displayLanguage];
    document.getElementById("greeting").textContent = greetingText;
    document.getElementById("name").textContent = nameText;
    document.getElementById("occupation").textContent = occupationText;

    // buttons
    let btn1Text = PAGE_TEXT_JSON["landing-section"]["btn-1"][displayLanguage];
    let btn2Text = PAGE_TEXT_JSON["landing-section"]["btn-2"][displayLanguage];
    document.getElementById("landing-btn-1").textContent = btn1Text;
    document.getElementById("landing-btn-2").textContent = btn2Text;
}

function renderAboutSection() {
    // title
    let titleText = PAGE_TEXT_JSON["about-section"]["title"][displayLanguage];
    let aboutDetailsText = PAGE_TEXT_JSON["about-section"]["personal-background"][displayLanguage];
    document.getElementById("about-title").textContent = titleText;
    document.getElementById("personal-background").textContent = aboutDetailsText;

    // subsection 1
    let subtitleText1 = PAGE_TEXT_JSON["about-section"]["subtitle-1"][displayLanguage];
    let achievementDateText = PAGE_TEXT_JSON["about-section"]["achievement-date"];
    let achievementDescriptionText = PAGE_TEXT_JSON["about-section"]["achievement-description"][displayLanguage];
    document.getElementById("achievement-subtitle").textContent = subtitleText1;
    document.getElementById("achievement-date").textContent = achievementDateText;
    document.getElementById("achievement-description").textContent = achievementDescriptionText;

    // subsection 2
    let subtitleText2 = PAGE_TEXT_JSON["about-section"]["subtitle-2"][displayLanguage];
    let educationsText = getDegreeListHTML();
    document.getElementById("education-subtitle").textContent = subtitleText2;
    document.getElementById("degree-list").innerHTML = educationsText;

    // view details buttons
    let viewDetailsBtnText = PAGE_TEXT_JSON["about-section"]["view-details-btn"][displayLanguage];
    let viewDetailsBtns = document.getElementsByClassName("view-details-btn-text")
    for (let i=0; i<viewDetailsBtns.length; i++) {
        viewDetailsBtns.item(i).textContent = viewDetailsBtnText;
    }
}

function getDegreeListHTML() {
    let educationsList = DATA_JSON["education"];
    let educationsText = "";

    for (let i=0; i<educationsList.length; i++) {
        educationsText += `${educationsList[i]["start-date"]}-${educationsList[i]["end-date"]}`;
        educationsText += "<br />";
        educationsText += educationsList[i]["degree-title"][displayLanguage];
        educationsText += ` @ ${educationsList[i]["institution"][displayLanguage]}`;
        if (i != educationsList.length-1) {
            educationsText += "<br />";
        }
    }

    return educationsText;
}

function renderEducationSection() {

}

function renderSkillsSection() {
    let titleText = PAGE_TEXT_JSON["nav-links"]["skills"][displayLanguage];
    let subtitleText1 = PAGE_TEXT_JSON["skills-section"]["subtitle-1"][displayLanguage];
    let subtitleText2 = PAGE_TEXT_JSON["skills-section"]["subtitle-2"][displayLanguage];
    let foreignLanguagesData = DATA_JSON["skillset"]["languages"];
    let technicalSkillsData = DATA_JSON["skillset"]["technical-skills"];

    document.getElementById("skills-title").textContent = titleText;

    // foreign languages skills
    document.getElementById("skills-subtitle-1").textContent = subtitleText1;
    let foreignLanguagesDiv = document.getElementById("language-skills");
    // clear previous element content before appending skills in different language
    foreignLanguagesDiv.innerHTML = "";
    foreignLanguagesData.forEach(language => {
        foreignLanguagesDiv.innerHTML += 
            skillBarDivTemplate(language);
    });

    // technical skills
    document.getElementById("skills-subtitle-2").textContent = subtitleText2;
    let technicalSkillsDiv = document.getElementById("technical-skills");
    technicalSkillsDiv.innerHTML = "";
    technicalSkillsData.forEach(skill => {
        technicalSkillsDiv.innerHTML += 
            skillBarDivTemplate(skill, true);
    });
}

function skillBarDivTemplate(skillDict, isTechnicalSkill=false) {
    let skillName = skillDict["name"];
    let proficiency = skillDict["proficiency"];
    let iconPath;

    let cssClassName;
    if (isTechnicalSkill) {
        // only have English name for technical skills
        cssClassName = skillName.toLowerCase();
        iconPath = `./assets/logos/${skillDict["icon"]}`;
    } else { // foreign language skills has translations
        cssClassName = skillName["en"].toLowerCase();
    }

    // names with symbols doesn't work with css identifiers
    if (cssClassName === "c++") {
        cssClassName = "cpp";
    }

    // add styles to stylesheet element
    styleSheet.innerText += `
        .skill-per.${cssClassName} {
            width: ${proficiency["quantification"]}%;
        }
    `;

    let skillNameDisplayText = skillName.hasOwnProperty(displayLanguage) ? skillName[displayLanguage] : skillName;

    // construct HTML from template
    // add icon image for technical skills
    let iconImageTemplate = "";
    if (isTechnicalSkill) {
        iconImageTemplate = `
            <img 
                src="${iconPath}" 
                alt="${skillNameDisplayText}"
                class="programming-lang-icon"
            />
        `;
    }

    let outputHTMLTemplate = `
        <article class="skill-box">
            <div class="skill-icon-details-container">
                ${iconImageTemplate}
                <div class="skill-details">
                    <h3>${skillNameDisplayText}</h3>
                    <p>${proficiency[displayLanguage]}</p>
                </div>
            </div>
            <div class="skill-bar">
                <span class="skill-per ${cssClassName}"></span>
            </div>
        </article>
    `;

    return outputHTMLTemplate;
}

function renderProjectsSection() {

}

function renderContactsSection() {
    let titleText = PAGE_TEXT_JSON["nav-links"]["contacts"][displayLanguage];
    document.querySelector("#contacts .title").textContent = titleText;
}

function render() {
    renderNavbar();
    renderLandingSection();
    renderAboutSection();
    renderEducationSection();
    renderSkillsSection();
    renderProjectsSection();
    renderContactsSection();
}
