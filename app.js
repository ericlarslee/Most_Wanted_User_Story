'use strict';

function searchBy(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let genderInput = document.forms['nameForm']['gender'].value;
    let occupationInput = document.forms['nameForm']['occupation'].value;

    
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}


/* 
function searchByEyeColor(){
    
     if(person.eyeColor === eyeColorInput) {
         return true;
     }
    return false;
});
if(filteredEyePeople.length > 0){
    console.log(filteredEyePeople);
}else{
    console.log('Sorry, looks like there is no one with that eye color.');
} */