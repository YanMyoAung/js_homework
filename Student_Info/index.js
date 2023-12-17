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
    if (i > 0) {
        alert(`Complete filling student number ${i}! Now filling student number ${i + 1} info!`);
    }
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

    let student_age = prompt("Enter Student Age");
    while (isNaN(+student_age) || validateBlankValue(student_age) || !validateAge(student_age, 15, 40)) {
        if (isNaN(+student_age)) {
            alert("Age must be number");
        }

        if (!isNaN(+student_age) && validateBlankValue(student_age)) {
            alert("Age cannot be blank!");
        }

        if (!isNaN(+student_age) && !validateBlankValue(student_age) && !validateAge(student_age, 15, 30)) {
            alert("Age must be between 15 and 40");
        }

        student_age = prompt("Enter Student Age!");
    }

    let student_username = prompt("Enter Student UserName!");
    while (validateWhiteSpace(student_username) || validateBlankValue(student_username) || validateMaximumLength(student_username, 20)) {
        if (validateBlankValue(student_username)) {
            alert("Username cannot be blank!");
        }

        if (!validateBlankValue(student_username) && validateMaximumLength(student_username, 20)) {
            alert("Username cannot be exceed 20 words");
        }

        if (!validateBlankValue(student_username) && !validateMaximumLength(student_username, 20) && validateWhiteSpace(student_username)) {
            alert("Username cannot contain whitespaces!");
        }

        student_username = prompt("Enter Student UserName!");
    }

    let student_password = prompt("Enter Student Password!");
    while (validateWhiteSpace(student_password) || validateBlankValue(student_password) || validateMaximumLength(student_password, 20)) {
        if (validateBlankValue(student_password)) {
            alert("Password cannot be blank!");
        }

        if (!validateBlankValue(student_password) && validateMaximumLength(student_password, 20)) {
            alert("Password cannot be exceed 20 words");
        }

        if (!validateBlankValue(student_password) && !validateMaximumLength(student_password, 20) && validateWhiteSpace(student_password)) {
            alert("Password cannot contain whitespaces!");
        }

        student_password = prompt("Enter Student Password!");
    }

    if(i >= register_count - 1){
        alert("All students informations are successfully registered!");
    }

    var student = {
        name: student_name,
        age: student_age,
        gender: student_gender,
        username: student_username,
        password: student_password
    };

    let student_info_key_name = generateStudentID(student_info);

    student_info[student_info_key_name] = student;
}

console.log(student_info);

