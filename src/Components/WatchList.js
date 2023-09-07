import React, { useEffect, useState } from 'react'
import { getDocs, collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../Helpers/firebase'
function WatchList() {
    const [movieList, setMovieList] = useState([])
    const movieCollectionRef = collection(db, "movies")
    const getMovieList = async () => {
        try {
            const data = await getDocs(movieCollectionRef)
            const filteredMovieData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setMovieList(filteredMovieData)
        }
        catch (err) {
            console.error(err)
        }
    }
    useEffect = (() => {
        getMovieList()
    }, [])
    return (
        <div > Watchlist</div >
    )
}

export default WatchList