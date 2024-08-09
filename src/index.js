import './styles.css';


import './projectCreate.js'
import { dialogOpenFunc } from './projectCreate.js';
import { projectCreateFunc } from './projectCreate.js';
import { projectDivCreateFunc } from './projectCreate.js';


const addProjectBtn = document.querySelector(".add-project-btn");
const submitProjectBtn = document.getElementById("project-submit-btn");

const projectDialog = document.querySelector(".project-dialog");

const projectsDiv = document.getElementById('projects-div');

const navBtnProject = document.querySelector(".nav-btn-project");

const projectName = document.getElementById("project-name").value;




addProjectBtn.addEventListener("click", () => {
    dialogOpenFunc();
});


submitProjectBtn.addEventListener("click", (event) => {

    projectDialog.close();
    event.preventDefault();
    projectCreateFunc();
    projectDivCreateFunc();
});

