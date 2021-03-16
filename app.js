'use strict';

<<<<<<< HEAD
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let genderInput = document.forms['nameForm']['gender'].value;
    let occupationInput = document.forms['nameForm']['occupation'].value;

=======
>>>>>>> f008ae9a8483dde76e1f38bae1dbae159dc96a8f
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
<<<<<<< HEAD
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
=======
>>>>>>> f008ae9a8483dde76e1f38bae1dbae159dc96a8f
    }else{
        alert('Sorry, looks like there is no one with that name.');
    }
}
<<<<<<< HEAD



=======
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
>>>>>>> f008ae9a8483dde76e1f38bae1dbae159dc96a8f
 
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

<<<<<<< HEAD
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
=======


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
>>>>>>> f008ae9a8483dde76e1f38bae1dbae159dc96a8f
