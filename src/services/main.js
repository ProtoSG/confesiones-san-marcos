import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyAs5VzHn7vJtUK_JllXNEsozu0TJWNXTH0",
authDomain: "confesiones-san-marcos-8ca35.firebaseapp.com",
projectId: "confesiones-san-marcos-8ca35",
storageBucket: "confesiones-san-marcos-8ca35.appspot.com",
messagingSenderId: "941494511060",
appId: "1:941494511060:web:dc0881e720fcf5018aa241",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.languageCode = "es";

export const user = auth.currentUser;

export const provider = new GoogleAuthProvider();

//Base de datos
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";

const db = getFirestore(app);

const academiasCollection = collection(db, "academias");

const q = query(academiasCollection, orderBy("votes", "desc"));

export const getAcademias =  () => getDocs(q);

export const onGetAcademias = (callback) => onSnapshot(q, callback)

export const updateVotes = async (id, votes) => {
    try {
        // Intenta actualizar el documento en Firestore
        await updateDoc(doc(db, "academias", id), {
            votes: votes + 1
        });
        console.log("Documento actualizado correctamente");
    } catch (error) {
        console.error("Error al actualizar el documento:", error);
    }
};

const usersCollection = collection(db, "users");

export const saveUser = (id, vote) => {
    addDoc(usersCollection, {
        id: id,
        vote: vote
    })
}

export const getUsers = () => getDocs(usersCollection)

export const getUser = (id) => getDoc(doc(usersCollection, id))