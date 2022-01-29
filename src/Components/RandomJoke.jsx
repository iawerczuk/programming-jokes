import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomJoke= () => {
    const [joke, setJoke]=useState("");
    const [loading, setLoading]=useState(true);
    const [fetching, setFetching]=useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setLoading(true)
         const result = await axios ("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general")
        setJoke(`${result.data[0].setup} ${result.data[0].punchline}`)
        setLoading(false)
        }
        fetchData()
    },[fetching])

    return (
        <div className='content-div'>
            <div className="content">
                {loading ? (
                    <p className="loader"> loading</p>
                ) : (
                    <h1 className="joke">{joke}</h1>
                )}
            </div>
            <p className="button" onClick={() => setFetching(!fetching)}>Not funny!<br></br>Try again!</p> 
        </div>
    )
}

export default RandomJoke