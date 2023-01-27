import { useState } from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  border-collapse: collapse;
  border-spacing: 30px;
  border: 2px solid #ddd;  
`;

const TD = styled.td`
  text-align: center;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const TH = styled.th`
  text-align: center;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const TR = styled.tr`
  border-top: 1px solid #c3c3c3;
  border-bottom: 1px solid #ddd;
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

function Home() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'));

  function handleCart(){
    const answer = window.confirm("¿Está seguro de hacer la compra?")
    if(answer) {
      localStorage.removeItem('cart');
      setCart([]);
      window.alert("Operación realizada satisfactoriamente");
    }
  }

  return (
    <div>
      <h1 className='App'>Carrito de compras</h1>
      {
        cart && cart.length > 0?
        <div>
          <TableStyled>
            <thead>
              <TR>
                <TH>Título</TH>
                <TH>Cantidad</TH>
                <TH>Modalidad</TH>
                <TH>Fecha</TH>
              </TR>
            </thead>
            <tbody>
              {
                cart.map((item: any) => {
                  return <TR>
                    <TD>{item.title}</TD>
                    <TD>{item.cantidad}</TD>
                    <TD>{item.modo}</TD>
                    <TD>{item.fecha}</TD>
                  </TR>
                })                
              }                          
            </tbody>            
          </TableStyled>
          <div className="App">
            <Button onClick={handleCart}>Comprar</Button>
          </div> 
        </div> : <h3 className="App">No hay pelicula en el carrito</h3>
      }          
    </div>
  )
};

export default Home;