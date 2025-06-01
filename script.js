let lengrades = 4; // Stating number of rows
let grade = [];
let weight = [];
let extra = 0;

function addRow(){

    const container = document.getElementById("input-container");

    const newRow = document.createElement("div");
    newRow.className = "row";

    newRow.innerHTML = `
        <input type="text" placeholder="Course" />
        <input type="text" placeholder="Grade" id="grade${lengrades}" />
        <input type="text" placeholder="Weight" id="weight${lengrades}" />
        
      `;
    
    container.appendChild(newRow); // Appends at the end of the container
    
    lengrades++;
}
// Function for calculating grade
function avgcalc(){
    grade = []
    weight = []
    let numerator = 0
    let denominator = 0
    
    for (let i = 0; i < lengrades; i++){
        let CurGrade = parseFloat(document.querySelector(`#grade${i}`).value)
        let CurWeight = parseFloat(document.querySelector(`#weight${i}`).value)
    
        if (isNaN(CurGrade) && isNaN(CurWeight)){
            continue;
        }

        grade.push(CurGrade);
        console.log(grade);

        weight.push(CurWeight);
        console.log(weight);

        numerator += weight[i] * grade[i]
        denominator += weight[i]

    }

    return numerator/denominator
}

function calculate(){

    // Getting input from user into height variable.
    let grade1 = document.querySelector("#grade0").value;
    let grade2 = document.querySelector("#grade1").value;
    let grade3 = document.querySelector("#grade2").value;
    let grade4 = document.querySelector("#grade3").value;
    
    // Checking the condition for the providing the 
    // grade to student based on percentage
    
    let percentage = avgcalc()

    if (percentage <= 100 && percentage >= 90) {
        grade = "A+";
    } else if ( percentage >= 85) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "A-";
    } else if (percentage >= 77) {
        grade = "B+";
    } else if ( percentage >= 73) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "B-";
    } else if (percentage >= 67) {
        grade = "C+";
    } else if (percentage >= 63) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "C-";
    } else if (percentage >= 57) {
        grade = "D+";
    } else if (percentage >= 53) {
        grade = "D";
    } else if (percentage >= 50) {
        grade = "D-";
    } else {
        grade = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (grade1 == "" || grade2 == ""
        || grade3 == "" || grade4 == "") {
            x=0
            document.querySelector("#showdata").innerHTML =
            ` Your percentage is ${percentage}%.
            <br> Your letter grade is ${grade}.`;
        //document.querySelector("#showdata").innerHTML
            //= "Please enter all the fields";
    } else {
        document.querySelector("#showdata").innerHTML =
            ` Your percentage is ${percentage}%.
            <br> Your letter grade is ${grade}.`;
    }
};
