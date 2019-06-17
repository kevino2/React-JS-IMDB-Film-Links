import React from 'react';
import FilmLink from './FilmLink'

const FilmList = (props) => {

const filmNodes = props.data.map((filmLink) => {
  return (
    <Film={film.name} url={film.url}
  )
})
return (
  <div>
  {filmNodes}
  </div>
 )
}

export default FilmList;
