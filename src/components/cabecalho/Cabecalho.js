import React from "react";
import Styled from "../Styled";

function Cabecalho() {
    return (
        <Styled>
            <header id="area-cabeçalho">
                <div id="area-logo">
                    <h1>Tec<span class="branco">Blog</span></h1>
                </div>
                <div id="area-menu">
                    <a href="index.html">Home</a>
                    <a href="/">Jogos</a>
                    <a href="/">Celulares</a>
                    <a href="/">Informática</a>
                    <a href="/">Eletrônicos</a>
                </div>
            </header>
        </Styled>
    );
}
export default Cabecalho;