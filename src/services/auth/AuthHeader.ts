import {getDataWithExpiry} from "./StoreItem";

export default function authHeader() {
    const jwtToken = getDataWithExpiry('jwtToken');

    if (jwtToken) {
        return {Authorization: 'Bearer ' + jwtToken};
    } else {
        return {Authorization: ''};
    }
}