import React from 'react'

const GifList = ({gifs}) => {
  return (
    <ul classname='gif-container'>
        {gifs.map((gif) => (
        <li className='gif-li' key={gif.url}>
          <img className='gif-img' src={gif.url} alt="gif" />
        </li>
      ))}
  </ul>
   
  )
}

export default GifList