"use strict"

let student_info = {};

function generateStudentID(obj) {
    return "student_" + (Object.keys(obj).length + 1);
}

function validateWhiteSpace(value) {
    if (value === null) {
        return false;
    }
    return value.indexOf(" ") >= 0;
}

function validateBlankValue(value) {
    return value === "" || value === null;
}

function validateMaximumLength(value, length) {
    if (value === null) {
        return true;
    }
    return value.length >= +length;
}

function validateGender(value) {
    if (value === null) {
        return false;
    }
    value = value.toUpperCase();
    return value === "MALE" || value === "FEMALE";
}

function validateAge(value, min, max) {
    if (value === null) {
        return false;
    }
    return +value >= min && +value <= max;
}


let register_count = prompt("Enter the count of students to register");

for (let i = 0; i < register_count; i++) {
    let student_name = prompt("Enter Student Name");
    while (!isNaN(+student_name) || validateBlankValue(student_name) || validateMaximumLength(student_name, 20)) {
        if (validateBlankValue(student_name)) {
            alert("Student cannot be blank!");
        }

        if (!validateBlankValue(student_name) && !isNaN(+student_name)) {
            alert("Student name cannot be numeric!");
        }

        if (!validateBlankValue(student_name) && isNaN(+student_name) && validateMaximumLength(student_name, 20)) {
            alert("Student name cannot be over 20 words");
        }
        student_name = prompt("Enter Student Name");
    }

    let student_gender = prompt("Enter Student Gender");
    while (!validateGender(student_gender) || validateBlankValue(student_gender)) {
        if (validateBlankValue(student_gender)) {
            alert("Student gender cannot be blank!");
        }
        if (!validateBlankValue(student_gender) && !validateGender(student_gender)) {
            alert("Student gender only accept male and female");
        }
        student_gender = prompt("Enter Student Gender");
    }

    let age = prompt("Enter Student Age");
    while (isNaN(+age) || validateBlankValue(age) || !validateAge(age, 15, 40)) {
        if (isNaN(+age)) {
            alert("Age must be number");
        }

        if (validateBlankValue(age)) {
            alert("Age cannot be blank!");
        }

        if (!isNaN(+age) && !validateBlankValue(age) && !validateAge(age, 15, 30)) {
            alert("Age must be between 15 and 40");
        }

        age = prompt("Enter Student Age!");
    }

    let student_username = prompt("Enter Student UserName!");
    
}
