'use strict';

    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let genderInput = document.forms['nameForm']['gender'].value;
    let occupationInput = document.forms['nameForm']['occupation'].value;

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

function completeSearch() {
    let firstNameResults = filterByFirstName();
    let lastNameResults = filterByLastName();

    let results = firstNameResults.filter(x=> lastNameResults.includes(x));

    /* for(let i=0; i < firstNameResults.length; i++) {
        for(let e=0; e < lastNameResults.length; e++) {
            if (firstNameResults[i] === lastNameResults[e]) {
                results.push(lastNameResult[e]);
                }
            else {
                e++; 
            }
        }
    i++;
    } */
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
