import React from 'react';
import FilmLink from './FilmLink'

const FilmList = (props) => {

const filmNodes = props.data.map((filmLink) => {
  return (
    <FilmLink name={filmLink.name} url={filmLink.url}/>
  )
})
return (
  <div>
  {filmNodes}
  </div>
 )
}

export default FilmList;
