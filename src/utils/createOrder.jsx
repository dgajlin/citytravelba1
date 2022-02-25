import { increment, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { db } from "../utils/firebaseConfig"
import createOrderInFirestore from '../utils/firebaseOrder';

const createOrder = (elements) => {
    let order = {
        buyer: {
            name: 'Juan Perez',
            phone: '541141110000',
            email: 'jperez@mail.com'
        },
        items: elements.cartList.map(item => ({
            id: item.id,
            price: item.price,
            title: item.title,
            stock: item.stock,
            qty: item.qty
        })),
        date: serverTimestamp(),
        total: elements.calcTotal()
    }

    // Creo la Orden y devuelvo el Order ID
    createOrderInFirestore(order)
        .then(result => alert("Su orden ha sido creada con exito\nOrder Id: " + result.id))
        .catch(error => console.log(error))

    // Decremento las cantidades (stock) de cada destino comprado
    elements.cartList.forEach(async(elements) => {
        const itemRef = doc(db, "destinos", elements.id);
        await updateDoc(itemRef, {
            stock: increment(-elements.qty)
        });
    });

    // Vacio el Carrito
    elements.clearItems();
}

export default createOrder;