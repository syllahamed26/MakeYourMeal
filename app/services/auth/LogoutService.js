import {auth, db} from "../../../firebaseConfig";
import {removeUser} from "../../storage/UserStorage";

export const logout = async () => {
    try {
        await auth.signOut();
        await removeUser();
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}