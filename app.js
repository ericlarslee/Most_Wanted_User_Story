'use strict';

function filterByID() {
    let iDInput = parseInt(document.forms['nameForm']['idn'].value);    
    if(Number.isNaN(iDInput)=== true){
        return;
    }
    let filteredID= people.filter(function (person) {
            if(parseInt(person.id) === iDInput){
                return true;
            }
            return false;
        });
        if(filteredID.length > 0){
            return filteredID;
         }else{
             alert("There is no one by that ID number.")
             return;
        }
    }

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
    let iDResults = filterByID();
    let firstNameResults = filterByFirstName();
    let lastNameResults = filterByLastName();
    let eyeColorResults = filterByEyeColor();
    let genderResults = filterByGender();
    let occupationResults = filterByOccupation();

    results = intersect(results, iDResults);
    results = intersect(results, firstNameResults);
    results = intersect(results, lastNameResults);
    results = intersect(results, eyeColorResults);
    results = intersect(results, genderResults);
    results = intersect(results, occupationResults);
    
 return results;
}

function findSpouse(entry) {
    let filteredSpouse = people.filter(function (person) {
        if(person.currentSpouse === entry.id){
            return true;
        }
        return false;
    });
    if(filteredSpouse.length > 0){
        return filteredSpouse
    }else{
        alert("This person does not have a spouse.");
        return;
    }
}
   

function findSibling(entry) {
    let filteredSibling = people.filter(function (person) {
        if(person.parents === entry.parents && person.id !== entry.id) {
            return true;
        }
        return false;
    });
    if(filteredSibling.length > 0) {
        return filteredSibling;
    }else{
        alert("This person does not have any siblings.");
        return;
    }
}

function findParents(entry) {
    let i = 0;
    let filteredParents = [];
    do {    
        people.filter(function (person) {
            if(person.id === entry[i]) {
            filteredParents.push(person);
                return true;
            }
            return false;
        });
        i += 1;
    } while(i < entry.length); 
    if(filteredParents.length > 0) {
        return filteredParents;
    }else{
        alert("This person appeared on this earth magically, and does not have parents.")
    }

}

function findKids(entry) {
    let i = 0;
    let filteredKids = [];
    do {
        people.filter(function (person) {
            if(person.parents[i] === entry.id) {
                filteredKids.push(person);
                    return true;
                }
                return false;
        });
        i += 1;
    } while(i < 2);
    if(filteredKids.length > 0) {
        return filteredKids;
        }else{
            alert("This person does not have any children.");
        }
}
 
function makeArray(entry) {
    return Array.from(entry);
}

function removeUndefinedFromArray(entry) {
    let i = entry.length 
    do {
        if(entry[i] === undefined || entry[i] === 0) {
            entry.pop(i);
                return entry;
            }
            return false;
            i += 1;
    } while (i > -1))
}

let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

btnGet.addEventListener('click', () => {
 let results = completeSearch();
    if(results.length < 2) {
        let person = results[0]
        let parents = intersect(person.parents, people.id)
        let spouse = findSpouse(person);
        let siblings = findSibling(person);
        let kids = findKids(person);
        parents = (findParents(parents));
        let finalResultsArray = [];
        finalResultsArray.push(person);
        finalResultsArray = finalResultsArray.concat(spouse,siblings,kids,parents);
        console.log(finalResultsArray);
        

    let headers = ['ID','First Name', 'Last Name', 'Gender', 'Eye Color', 'DOB', 'Height', 'Weight', 'Occupation', 'Parent', 'Spouse'];
    let table = document.createElement('table');   
    let titleRow = document.createElement('tr');

    headers.forEach(titleText => {
        let title = document.createElement('th');
        let textNode = document.createTextNode(titleText);
        title.appendChild(textNode);
        titleRow.appendChild(title);
       
    });
table.appendChild(titleRow);

finalResultsArray.forEach(persons => {
    let row = document.createElement('tr');

    Object.values(persons).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })

    table.appendChild(row);
})

myTable.appendChild(table);
        

        
        return;
    }
    else {
    let headers = ['ID','First Name', 'Last Name', 'Gender', 'Eye Color', 'DOB', 'Height', 'Weight', 'Occupation', 'Parent', 'Spouse'];
    let table = document.createElement('table');   
    let titleRow = document.createElement('tr');

    headers.forEach(titleText => {
        let title = document.createElement('th');
        let textNode = document.createTextNode(titleText);
        title.appendChild(textNode);
        titleRow.appendChild(title);
       
    });
table.appendChild(titleRow);

results.forEach(person => {
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
}});
