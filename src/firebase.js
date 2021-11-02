import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLAPjxi-dCgkixPj-pAPO_fX06aAZ9kck",
  authDomain: "crosswalk-poetics.firebaseapp.com",
  projectId: "crosswalk-poetics",
  storageBucket: "crosswalk-poetics.appspot.com",
  messagingSenderId: "715869343026",
  appId: "1:715869343026:web:fcfa0bf97dfa1feeb01b2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore, collection, doc, setDoc, addDoc, updateDoc, getDoc, getDocs, onSnapshot, serverTimestamp, query, where, arrayUnion, Timestamp, orderBy, deleteField, } from "firebase/firestore";

export const db = getFirestore();




export const addLive = async () => {

  // if first bit, set id = 0 and have the info be the server timestamp

}

export const clearLive = async () => {

  // delete all documents in live collection

}


export const fetchPoems = async () => {

  const poemsArr = []

  const poemsRef = collection(db, "poems")
  const q = query(poemsRef, orderBy("timestamp", "asc"))
  const poemsSnapshot = await getDocs(q)

  poemsSnapshot.forEach(doc => {
    const data = doc.data()
    console.log(data)

    poemsArr.push({
      poem: data.poem,
      timestamp: data.timestamp.toDate()

    })

  })

  return poemsArr

}

export const addPoem = async (poem) => {

  await addDoc(collection(db, "poems"), {
    poem: poem,
    timestamp: serverTimestamp()
  })

}

const addTimestamp = async () => {
  const poemRef = doc(db, "poems", "qPu6OevfGDADurYAfhP1");
  await updateDoc(poemRef, {
    timestamp: serverTimestamp()
  })
  console.log('setting doc')
}

// addTimestamp()