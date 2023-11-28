import {auth} from "../../../firebaseConfig";

export const resetPassword = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        return true;
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            alert('There is no user record corresponding to this identifier. The user may have been deleted.');
        } else if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
        } else {
            alert(error);
        }
        return false;
    }
}