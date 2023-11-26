import {auth, db} from "../../../firebaseConfig";

export const register = async (data) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(data.email, data.password);
        const user = userCredential.user;
        await db.collection('users').doc(user.uid).set({
            name: data.name,
            email: data.email,
        });
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
        } else {
            alert(error);
        }
        return false;
    }
};