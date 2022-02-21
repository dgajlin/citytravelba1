import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"
    
const firestoreFetchList = async(valor) => {
    let q = ""
    if (valor !== 0 && valor !== 1) 
         q = query(collection(db, "destinos"), where("categoria", "!=", -1))
    else
         q = query(collection(db, "destinos"), where("categoria", "==", valor));
    const querySnapshot = await getDocs(q);
    const dataFromFirebase = querySnapshot.docs.map(item => ({
        idItem: item.idItem,
        ...item.data()
    }));

    return dataFromFirebase;
}

export default firestoreFetchList;
