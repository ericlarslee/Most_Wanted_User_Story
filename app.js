'use strict';

function searchBy(){
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let genderInput = document.forms['nameForm']['gender'].value;
    let occupationInput = document.forms['nameForm']['occupation'].value;
 
    
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput || person.lastName === lastNameInput || person.eyeColor === eyeColorInput || person.gender === genderInput
             || person.occupation === occupationInput){
            return true;
        }
        return false;
    });
    
 
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}


 
function searchByEyeColor(){
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let filteredEyeColor = people.filter(function (person) {
    if(person.eyeColor === eyeColorInput) {
        return true;
    }
    return false;
    }); 
    if(filteredEyeColor.length > 0){
        console.log(filteredEyeColor);
    }else{
        console.log('Sorry, looks like there is no one with that eye color.');
    }
}

function searchByGender(){
    let genderInput = document.forms['nameForm']['gender'].value;
    let filteredGender = people.filter(function (person) {
    if(person.gender === genderInput) {
        return true;
    }
    return false;
    }); 
    if(filteredGender.length > 0){
        console.log(filteredGender);
    }else{
        console.log('Sorry, looks like there is no one with that gender.');
    }
}

function searchByOccupation(){
    let occupationInput = document.forms['nameForm']['occupation'].value;
    let filteredOccupation = people.filter(function (person) {
    if(person.occupation === occupationInput) {
        return true;
    }
    return false;
    }); 
    if(filteredOccupation.length > 0){
        console.log(filteredOccupation);
    }else{
        console.log('Sorry, looks like there is no one with that occupation.');
    }
}


