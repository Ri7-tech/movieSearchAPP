import React from 'react'
import logo from '../assets/Image/image-missing .png'

export default function MoviesCard({film,inde}) {

    if(film.poster_path !=''){
     var image=`https://image.tmdb.org/t/p/w1280/${film.poster_path}`
    }else{
       var image=logo;

    }

    return (
        <>
            <div className="box">

                <img src={image} alt="" />
                <div class="overlay">
                    <div class="title">
                        <h2>{film.title}</h2>
                        <span></span>
                        
                            <h3>{film.vote_average}</h3>
                            <p>
                               {film.original_title}
                            </p>
                            
                    </div>
                </div>`
            </div >
        </>
    )
}
