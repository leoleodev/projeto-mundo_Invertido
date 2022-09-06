
import { subscribeToClub } from './firebase/club.js';

const name = document.querySelector('#txtName');
const email = document.querySelector('#txtEmail');
const level = document.querySelector('#txtLevel');
const character = document.querySelector('#txtCharacter');
const button = document.querySelector('#buttonSubmit');

button.addEventListener('click', async ()=>{
    
    const subscription = {
        name: name.value,
        email: email.value,
        level: level.value,
        character: character.value
    }

    const subscriptionId = await subscribeToClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);

    name.value = '';
    email.value = '';
    level.value = '';
    character.value = '';
    
})
