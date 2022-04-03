import React, {useEffect} from 'react'
import Axios from 'axios'

function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    useEffect(() => {


        let variables = {
            userFrom,
            movieId
        }
        Axios.post('/api/favorite/favoriteNumber', variables)
        .then(response => {
            console.log(response.data) 
            if (response.data.success){
            } else {
                alert('Fail to get the numeric information.')
            }
        })  
        
    }, [])



    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite
