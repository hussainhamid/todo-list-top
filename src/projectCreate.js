import './styles.css';

const projectDialog = document.querySelector(".project-dialog");



export function dialogOpenFunc() {
    projectDialog.showModal();

}


export function projectCreateFunc() {

    const navDiv = document.querySelector(".nav-div-project");
    const projectName = document.getElementById("project-name").value;


    const newProject = document.createElement("a");
    newProject.classList.add("nav-btn-project");
    newProject.innerText = projectName;
    newProject.setAttribute("href", `#${projectName}`);
    

    navDiv.appendChild(newProject);

};




export function projectDivCreateFunc() {

    const projectsDiv = document.getElementById('projects-div');
    const projectName = document.getElementById("project-name").value;

    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("projects");
    newProjectDiv.setAttribute("id", `${projectName}`)

    const newProjectHeading = document.createElement("h2");
    newProjectHeading.innerText = projectName;


    newProjectDiv.appendChild(newProjectHeading);
    projectsDiv.appendChild(newProjectDiv);

};

