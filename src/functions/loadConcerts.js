import {CONCERTS_URL} from "../constants";
import {mapFirebaseDoc} from "./mapFirebaseDoc";

export const loadConcerts = async (compare, filter) => {
    const response = await fetch(CONCERTS_URL);
    const firestoreObject = await response.json();
    const concerts = firestoreObject.documents
        .filter(doc => doc.fields)
        .map(mapFirebaseDoc);

    let sortedAndFilteredConcerts = [...concerts]
        .sort(compare)
        .filter(filter);

    return sortedAndFilteredConcerts;
}