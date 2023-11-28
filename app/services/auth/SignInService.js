import {auth, db} from "../../../firebaseConfig";
import {storeUser} from "../../storage/UserStorage";

export const signIn = async (data) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(data.email, data.password);
        const user = userCredential.user;

        await fetchUserDataFromFirestore(user.uid);

        return true;

    } catch (error) {
        if (error.code === 'auth/invalid-login-credentials') {
            alert('Invalid login credentials !')
        }else if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid !');
        } else if (error.code === 'auth/user-not-found') {
            alert('User not found !');
        } else if (error.code === 'auth/wrong-password') {
            alert('Wrong password !');
        } else {
            alert(error);
        }
        return false;
    }
}

const fetchUserDataFromFirestore = async (uid, userDispatch) => {
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (userDoc.exists) {
            const userData = userDoc.data();

            await storeUser({
                id: uid,
                name: userData.name,
                email: userData.email,
            });

        } else {
            console.log('Aucune donnée utilisateur trouvée dans Firestore.');
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données de Firestore:', error);
    }
};