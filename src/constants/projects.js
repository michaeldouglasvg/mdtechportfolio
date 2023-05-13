// Working on (Projects)
import Adminpanel from "./projects/adminpanel.png"
import AdvancedToDo from "./projects/advancedtodoapp.png"
import Counter from "./projects/counter.png"
import Facialrba from "./projects/facialrba.png"
import Faqapp from "./projects/faqapp.png"
import Loans from "./projects/loans.png"
import Portfoliotemplates from "./projects/portfoliotemplate.png"
import Colormodel from "./projects/colormodel.png"

export const Partialprojects = [
 {
  id: 1,
  startDate: "21/02/2022",
  endDate: "21/02/2022",
  category: "Website",
  title: "Portfolio",
  image: Portfoliotemplates,
  frontentTechs: "React, HTML, CSS, SASS, JavaScript",
  backendTech: "Firebase",
 },
];






// Working Projects
export const CompleteProjects = [
 {
  id: 1,
  technology: "Website (Panel)",
  projectName: "Admin Panel",
  projectImg: Adminpanel,
  projectDescription: "This admin panel provides the basic functionality to support Create, Read, Update and Deleting data from the database. Great UI designed.",
  projectUrl: "https://commerceadmin.netlify.app/",
 },
 {
  id: 2,
  technology: "Machine Learning",
  projectName: "Face Recognition Based Attendance",
  projectImg: Facialrba,
  projectDescription: "Is a web based advanced student attendance management that uses student biometric(Face) to mark attendance record and Display each student per day attended",
  projectUrl: "https://facial-recognition-based-attendance.netlify.app/",
 },
 {
  id: 3,
  technology: "Machine Learning",
  projectName: "Loan Qualifications Checker",
  projectImg: Loans,
  projectDescription: "Web based application that predicts wether you are or not qualified to apply for any Loan. Based on some user data like Credit history, Basic salary and much more.",
  projectUrl: "https://loan-prediction-system.netlify.app/",
 },
 {
  id: 4,
  technology: "Machine Learning",
  projectName: "Dorminant Color Detector",
  projectImg: Colormodel,
  projectDescription: "Machie learning model that extracts colors in an image and return available percentages if colors detected in specific image",
  projectUrl: "https://multiple-profile-todo.netlify.app/",
 },
 {
  id: 5,
  technology: "MERN Stack Application",
  projectName: "To-do List with Multiple Profiles",
  projectImg: AdvancedToDo,
  projectDescription: "Web based application that helps you to organize your tasks and create multiple profile to distribute your tasks",
  projectUrl: "https://multiple-profile-todo.netlify.app/",
 },
 {
  id: 6,
  technology: "JavaScript",
  projectName: "Frequent Asked Questions (FAQ)", 
  projectImg: Faqapp,
  projectDescription: "PArtial framework integrated in many websites to utilize space and computational workability of the application through toggling of taks.",
  projectUrl: "https://faqquizes.netlify.app/",
 },
 {
  id: 7,
  technology: "React and SASS",
  projectName: "Counter Application", 
  projectImg: Counter,
  projectDescription: "Web based application that helps you to Increment, Reset and Decrement counters. The counter color state changes according to +ve(green), 0(black) or -ve(red) values of the counter.",
  projectUrl: "https://setcounter.netlify.app/",
 },
]