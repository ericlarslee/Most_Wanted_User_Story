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
    }else if(filteredFirstNamePeople.length === 0 || filteredFirstNamePeople === undefined){
        return
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
        return;
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
        return;
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
        return;
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
        return
    }
}

function intersect(arr1, arr2, name) {
    if (arr2 === undefined || arr2.length === 0) {
        alert(`Sorry, there is no one by that ${name}.`)
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

    if(1 > 0){
            results = intersect(results, firstNameResults, "First Name");
            results = intersect(results, lastNameResults, "Last Name");
            results = intersect(results, eyeColorResults, "eye color");
            results = intersect(results, genderResults, "gender");
            results = intersect(results, occupationResults, "occupation");
        }
    
    
    if (firstNameResults === 0 || firstNameResults === undefined && lastNameResults === 0 || lastNameResults === undefined && eyeColorResults === 0 || eyeColorResults === undefined && genderResults === 0 || genderResults === undefined && occupationResults === 0 || occupationResults ===undefined) {
        results = ""
        return results;
    }
    
    

    console.log(results);
}