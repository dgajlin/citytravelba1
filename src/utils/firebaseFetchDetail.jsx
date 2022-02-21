import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"
    
const firestoreFetchDetail = async(valor) => {
    const q = query(collection(db, "destinos"), where("idItem", "==", valor));
    const querySnapshot = await getDocs(q);
    const dataFromFirebase = querySnapshot.docs.map(item => ({
        idItem: item.id,
        ...item.data()
    }));

    return dataFromFirebase;
}

export default firestoreFetchDetail;
