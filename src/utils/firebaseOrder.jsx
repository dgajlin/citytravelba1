import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"

const createOrderInFirestore = async (order) => {
    // Add a new document with a generated id
    const newOrderRef = doc(collection(db, "orders"));

    await setDoc(newOrderRef, order);
    return newOrderRef;
}

export default createOrderInFirestore;