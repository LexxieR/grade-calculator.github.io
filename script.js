// Function for calculating grade
function avgcalc(){
    let grade1 = parseFloat(document.querySelector("#grade1").value);
    let grade2 = parseFloat(document.querySelector("#grade2").value);
    let grade3 = parseFloat(document.querySelector("#grade3").value);
    let grade4 = parseFloat(document.querySelector("#grade4").value);
    let weight1 = parseFloat(document.querySelector("#weight1").value);
    let weight2 = parseFloat(document.querySelector("#weight2").value);
    let weight3 = parseFloat(document.querySelector("#weight3").value);
    let weight4 = parseFloat(document.querySelector("#weight4").value);
    
    totweight = weight1 + weight2 + weight3 + weight4;
    return (grade1 * weight1 + grade2 * weight2 + grade3 * weight3 + grade4 * weight4)/totweight;
}

function calculate(){

    // Getting input from user into height variable.
    let grade1 = document.querySelector("#grade1").value;
    let grade2 = document.querySelector("#grade2").value;
    let grade3 = document.querySelector("#grade3").value;
    let grade4 = document.querySelector("#grade4").value;
    let grade = "";

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
