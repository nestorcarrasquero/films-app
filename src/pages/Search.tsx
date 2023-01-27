import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Film from '../pages/Film';
import Item from './Item';
import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid aqua;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Search() {
  const [textFilm, setTextFilm] = useState('');
  const [films, setFilms] = useState<Film[] | null>();  

  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=5eec5adc&s=${textFilm}`
    axios.get(url)
    .then((response) => {
      const {Search} = response.data;
      setFilms(Search); 
    });
  },[textFilm])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextFilm(e.target.value);
  }

  return (
    <>
      <div className='App'>
        <h1>Buscar Película</h1>
        <div>
          <Input type="text" name='busqueda' onChange={handleChange} placeholder="Type the film name" />              
        </div>
      </div>
      <ListItem>
        {
          films? films.map((film) => {
            return <Item key={film.imdbID} {...{
              Poster: film.Poster, 
              Title: film.Title, 
              Type: film.Type, 
              Year: film.Year, 
              imdbID: film.imdbID}} />
          }) : 'Ningún elemento encontrado'
        }              
      </ListItem>
    </>
  );
}

export default Search;