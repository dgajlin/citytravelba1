import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"
    
const firestoreFetchList = async(value) => {
    let q = ""
    if (value !== 0 && value !== 1) 
         q = query(collection(db, "destinos"), where("category", "!=", -1))
    else
         q = query(collection(db, "destinos"), where("category", "==", value));
    const querySnapshot = await getDocs(q);
    const dataFromFirebase = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));

    return dataFromFirebase;
}

export default firestoreFetchList;
