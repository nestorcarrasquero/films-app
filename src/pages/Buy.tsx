import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImagePoster = styled.img`
  border-radius: 11px;
  box-shadow: 0px 2px 15px 2px #8b8eaf;
`;

const InputNumber = styled.input.attrs(props => ({
  type: "number",
  size: props.size || "1em",
}))`
  border: 2px solid aqua;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const InputDate = styled.input.attrs(props => ({
  type: "date",
  size: props.size || "1em",
}))`
  border: 2px solid aqua;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const Button = styled.button`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;

const ButtonBack = styled.button`
  background: white;
  color: black;
  border-radius: 7px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;

function Buy() {
  let {state} = useLocation();
  const [modo, setModo] = useState(''); 
  const [values, setValues] = useState({
    id: state.ID,
    title: state.Title,
  }); 
  const navigate = useNavigate(); 

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;    
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const answer = window.confirm('¿Está seguro de agregar esta película al carrito?');
    if(answer) {
      let carts = JSON.parse(localStorage.getItem('cart') || "[]");
      carts.push(values);
      localStorage.setItem('cart', JSON.stringify(carts)); 
      window.alert('Muchas gracias');
      navigate("/search");
    }   
  }

  return (
    <div className="App">
      <h1>Detalle de Compra</h1>
      <ImagePoster src={state.Poster} alt="Movie image" />
      <form onSubmit={handleSubmit}>        
        <div>
          <input type="radio" name="modo" value="rent" onChange={handleChange} onClick={() => setModo('rent')} required />&nbsp;Renta
          <input type="radio" name="modo" value="sale" onChange={handleChange} onClick={() => setModo('sale')} required />&nbsp;Venta
        </div>      
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <InputDate type="date" name="fecha" disabled={modo!=='rent'} onChange={handleChange} />
        </div>   
        <div> 
          <label htmlFor="cantidad">Cantidad:</label> 
          <InputNumber type="number" name="cantidad" onChange={handleChange} required />                   
        </div>
        <div>
          <Button>Enviar</Button>
          <Link to="/search"><ButtonBack>Regresar</ButtonBack></Link>
        </div>
      </form>
    </div>
  )
};

export default Buy;