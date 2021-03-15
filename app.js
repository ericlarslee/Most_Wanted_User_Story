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
    
    /* test different filter options
    if(person.firstName.length > 0){

        alert('Sorry, looks like there is no one with that name.')
    }

    if(person.lastName.length > 0) {
        alert('Sorry, looks like there is no one with that name.')
    }

    if(person.gender.length > 0) {
        alert('Sorry, looks like there is no one with that gender.')
    }

    if(person.eyeColor.length > 0) {
        alert('Sorry, looks like there is no one with that eye color.')
    }
    if(person.occupation.length > 0) {
        alert('Sorry, looks like there is no one with that occupation.')
    }
}
*/
