import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function signIn(userData: {username: string}) {
    const q = query(
        collection(firestore, "users"),
        where("username", "==", userData.username)
    );

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data) {
        return data[0];
    } else {
        return null;
    }
}

export async function signUp(userData: {
    fullName: string,
    phone: string,
    address: string,
    username: string,
    email: string,
    password: string,
    gender: number,
    instansiId: number,
    cabangId: number,
    usertypeId: number,
}, callback: Function) {
    const q = query(collection(firestore, "users"), where("username", "==", userData.username));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data.length > 0) {
        callback({status: false, message: "Username already exists"});
    } else {
        userData.password = await bcrypt.hash(userData.password, 10);

        await addDoc(collection(firestore, "users"), userData)
            .then(() => {
                callback({status: true, message: "Register success"});
            })
            .catch((error) => {
                callback({status: false, message: error.message});
            })
    }
}
