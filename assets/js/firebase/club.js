
import app from './app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToClub(subscription){

    const database = getFirestore(app);
    const clubCollection = collection(database, 'dungeos&dragonsClub');
    const promise = await addDoc(clubCollection, subscription);

    return promise.id;

}