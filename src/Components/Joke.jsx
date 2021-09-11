import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios';

const Joke= () => {
    const [joke, setJoke]=useState("");
    const [loading, setLoading]=useState(true);
    const [fetching, setFetching]=useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setLoading(true)
         const result = await axios ("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/programming")
        setJoke(`${result.data[0].setup} ${result.data[0].punchline}`)
        setLoading(false)
        }
        fetchData()
    },[fetching])

    return (
        <>
        <div className="content">
            {loading ? (
                <p className="loader"> loading</p>
            ) : (
                <h1 className="joke">{joke}</h1>
            )}
        </div>
        <p className="button" onClick={() => setFetching(!fetching)}>Not funny!<br></br>Try again!</p>
        <Footer/>
        </>
    )
}

export default Joke
