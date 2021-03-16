'use strict';

function filterByFirstName() {
    let firstNameInput = document.forms['nameForm']['fname'].value;    
    let filteredFirstNamePeople = people.filter(function (people) {
        if(people.firstName === firstNameInput){
            return true;
        }
        return false;
    });
    if(filteredFirstNamePeople.length > 0){
        return filteredFirstNamePeople
    }else{
        alert('Sorry, looks like there is no one with that name.');
    }
}
function filterByLastName() {
    let lastNameInput = document.forms['nameForm']['lname'].value;    
    let filteredLastNamePeople = people.filter(function (people) {
        if(people.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    if(filteredLastNamePeople.length > 0){
       return filteredLastNamePeople
    }else{
        alert('Sorry, looks like there is no one with that name.');
    }
}
 
function filterByEyeColor() {
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let filteredEyeColor = people.filter(function (people) {
    if(people.eyeColor === eyeColorInput) {
        return true;
    }
    return false;
    }); 
    if(filteredEyeColor.length > 0){
        return filteredEyeColor
    }else{
        alert('Sorry, looks like there is no one with that eye color.');
    }
}

function filterByGender() {
    let genderInput = document.forms['nameForm']['gender'].value;
    let filteredGender = people.filter(function (people) {
    if(people.gender === genderInput) {
        return true;
    }
    return false;
    }); 
    if(filteredGender.length > 0){
        return filteredGender
    }else{
        alert('Sorry, looks like there is no one with that gender.');
    }
}

function filterByOccupation() {
    let occupationInput = document.forms['nameForm']['occupation'].value;
    let filteredOccupation = people.filter(function (people) {
    if(people.occupation === occupationInput) {
        return true;
    }
    return false;
    }); 
    if(filteredOccupation.length > 0){
        return filteredOccupation
    }else{
        alert('Sorry, looks like there is no one with that occupation.');
    }
}



function intersect(arr1, arr2) {
    if (arr2=== undefined || arr2.length === 0) {
        return arr1;
    }
    else{
    let filteredResults = arr1.filter(x=> arr2.includes(x));
    if (filteredResults.length === 0){
        return arr1;
    }
        else { 
        return filteredResults;
        }
    }
}

function completeSearch() {
    let results = people;
    let firstNameResults = filterByFirstName();
    let lastNameResults = filterByLastName();
    let eyeColorResults = filterByEyeColor();
    let genderResults = filterByGender();
    let occupationResults = filterByOccupation();

    results = intersect(results, firstNameResults);
    results = intersect(results, lastNameResults);
    results = intersect(results, eyeColorResults);
    results = intersect(results, genderResults);
    results = intersect(results, occupationResults);

    /* let results = firstNameResults.filter(x=> lastNameResults.includes(x)); */

    console.log(results);
}