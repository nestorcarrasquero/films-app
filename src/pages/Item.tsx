import Film from "./Film";
import styled from "styled-components";
import Icon from "../assets/cart-add-svgrepo-com.svg";
import { Link } from "react-router-dom";

const ItemStyle = styled.div`  
  width: 30%;
  margin: 1rem;
  text-align: center;  
`;

const ImagePoster = styled.img`
  border-radius: 11px;
  box-shadow: 0px 2px 15px 2px #8b8eaf;
`;

const ImageIcon = styled.img`
  width: 50px;
`;

const Item: React.FunctionComponent<Film> = (props) => {
  const {Poster, Title, Type, Year, imdbID} = props;

  return (    
    <ItemStyle>      
      <h1>{Title}</h1>
      <h2>{Year}</h2>
      <p>{Type}</p>      
      <Link to="/buy" state={{ID: imdbID, Poster: Poster, Title: Title}}>
        <ImagePoster src={Poster} alt="Movie image" /> 
        <p><ImageIcon src={Icon} alt="Add to Cart" /></p>
      </Link>
    </ItemStyle>
  )
}

export default Item;