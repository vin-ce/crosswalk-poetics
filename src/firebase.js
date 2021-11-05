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

import { getFirestore, collection, doc, setDoc, addDoc, updateDoc, getDoc, getDocs, onSnapshot, serverTimestamp, query, where, arrayUnion, Timestamp, orderBy, deleteField, deleteDoc, limit } from "firebase/firestore";

export const db = getFirestore();




export const addLive = async (id, type, content) => {

  if (type === 'image') {

    await setDoc(doc(db, "live", id.toString()), {
      image: content
    })

  } else if (type === 'break') {

    await setDoc(doc(db, "live", id.toString()), {
      break: true
    })

  }

}

export const clearLive = async (numOfSections) => {

  // delete all documents in live collection
  for (let i = 1; i <= numOfSections; i++) {
    await deleteDoc(doc(db, "live", i.toString()))
  }

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

export const fetchLatestPoem = async () => {
  const poemsRef = collection(db, "poems")
  const q = query(poemsRef, orderBy("timestamp", "desc"), limit(1))
  const poemsSnapshot = await getDocs(q)

  let poem;

  poemsSnapshot.forEach(doc => {
    const data = doc.data()
    console.log(data)

    poem = {
      poem: data.poem,
      timestamp: data.timestamp.toDate()
    }
  })

  return poem

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