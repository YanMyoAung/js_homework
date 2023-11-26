"use strict"

const MU = 'Medical Univerisity'; // above 520
const TU = 'Technology Univerisity'; // above 470
const CU = 'Computer Univerisity';  // above 450
const UFL = 'Univerisity Of Foreign Language'; //above 400
const IN = 'Institute Of Nursing'; // above 350
const YU = 'Yandanabon Univerisity'; // above 239

let myanmar_score = prompt("Enter Myanmar Score");
let english_score = prompt("Enter English Score");
let math_score = prompt("Enter Math Score");
let chemistry_score = prompt("Enter Chemistry Score");
let physics_score = prompt("Enter Physic Score");
let bio_score = prompt("Enter Bio Score");

if (myanmar_score === '' || english_score === '' || math_score === ''
    || chemistry_score === '' || physics_score === '' || bio_score === '') {
    alert("Score Cannot Be Blank!");
} else if (
    myanmar_score === null || english_score === null || math_score === null
    || chemistry_score === null || physics_score === null || bio_score === null
) {
    alert("Score Cannot Be Blank");
} else {
    if (Number(myanmar_score).toString() === 'NaN' || Number(english_score).toString() === 'NaN' ||
        Number(math_score).toString() === 'NaN' || Number(chemistry_score).toString() === 'NaN' ||
        Number(physics_score).toString() === 'NaN' || Number(bio_score).toString() === 'NaN') {
        alert("Score Must Be Number");
    } else {
        if(+myanmar_score < 0 || +myanmar_score > 100 || +english_score < 0 || +english_score > 100 
            || +math_score < 0 || +math_score > 100 || +chemistry_score < 0 || +chemistry_score > 100
            || +bio_score < 0 || +bio_score > 100 || +physics_score < 0 || +physics_score > 100){
                alert("Score Must Be Between 0 and 100");
            }else{
                if(+myanmar_score < 40 || +english_score < 40 || +math_score < 40 ||
                    +chemistry_score < 40 || +physics_score < 40 || +bio_score < 40 ){
                        alert("You Failed The Exam!");
                    }else{
                        let total_score = +myanmar_score + +english_score + +math_score + 
                        +chemistry_score + +physics_score + +bio_score;
                        if(total_score >= 520){
                            alert(`Available Univerisity List 
                            - ${MU} 
                            - ${TU} 
                            - ${CU} 
                            - ${UFL}
                            - ${IN}
                            - ${YU} `);
                        }else if(total_score >= 470){
                            alert(`Available Univerisity List 
                            - ${TU} 
                            - ${CU} 
                            - ${UFL}
                            - ${IN}
                            - ${YU} `);
                        }else if(total_score >= 450){
                            alert(`Available Univerisity List 
                            - ${CU} 
                            - ${UFL}
                            - ${IN}
                            - ${YU} `);
                        }else if(total_score >= 400){
                            alert(`Available Univerisity List 
                            - ${UFL}
                            - ${IN}
                            - ${YU} `);
                        }else if(total_score >= 350){
                            alert(`Available Univerisity List 
                            - ${IN}
                            - ${YU} `);
                        }else{
                            alert(`Available Univerisity List 
                            - ${YU} `);
                        }
                    }
            }
    }
}