'use strict';

function filterByFirstName() {
    let firstNameInput = document.forms['nameForm']['fname'].value;    
    if(firstNameInput === ""){
        return;
    }
    let filteredFirstNamePeople = people.filter(function (person) {
            if(person.firstName === firstNameInput){
                return true;
            }
            return false;
        });
        if(filteredFirstNamePeople.length > 0){
            return filteredFirstNamePeople
         }else{
             alert("There is no one by that first name.")
             return;
        }
}
function filterByLastName() {
    let lastNameInput = document.forms['nameForm']['lname'].value;    
    if(lastNameInput === "") {
        return;
    }
    let filteredLastNamePeople = people.filter(function (person) {
        if(person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    if(filteredLastNamePeople.length > 0){
       return filteredLastNamePeople
    }else{
        alert("There is no one by that last name.")
        return;

    }
}


function filterByEyeColor() {
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    if(eyeColorInput === "") {
        return;
    }
    let filteredEyeColor = people.filter(function (person) {
    if(person.eyeColor === eyeColorInput) {
        return true;
    }
    return false;
    }); 
    if(filteredEyeColor.length > 0){
        return filteredEyeColor
    }else{
        alert("There is no one by that eye color.")
        return;
    }
}

function filterByGender() {
    let genderInput = document.forms['nameForm']['gender'].value;
    if(genderInput === "") {
        return;
    }
    let filteredGender = people.filter(function (person) {
    if(person.gender === genderInput) {
        return true;
    }
    return false;
    }); 
    if(filteredGender.length > 0){
        return filteredGender
    }else{
        alert("There is no one by that gender.")
        return;
    }
}

function filterByOccupation() {
    let occupationInput = document.forms['nameForm']['occupation'].value;
    if(occupationInput === "") {
        return;
    }
    let filteredOccupation = people.filter(function (person) {
    if(person.occupation === occupationInput) {
        return true;
    }
    return false;
    }); 
    if(filteredOccupation.length > 0){
        return filteredOccupation;
    }else{
        alert("There is no one by that occupation.")
        return;
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

    
    console.log(results);
}


/* Lets try this table when we get the data returned
let myTable = document.getElementById('#table');

let mostWanted = []
 
let headers = ['ID', "First Name", 'Last Name', 'Gender', 'Eye Color', 'DOB', 'Height', 'Weight', 'Occupation'];

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

mostWanted.forEach(person => {
    let row = document.createElement('tr');

    Object.values(person).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })

    table.appendChild(row);
})

myTable.appendChild(table);

*/