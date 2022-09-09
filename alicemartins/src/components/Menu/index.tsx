import React from "react";
import * as S from "./styles";
import logo from "assets/img/logo.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to= "/">
          <img src={logo} alt="Imagens principais" />
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
