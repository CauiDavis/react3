import React from "react";
import Lateral from "../lateral/Lateral";
import Postagens from "../postagens/Postagens";
import Rodape from "../rodape/Rodape";
import Styled from "../Styled";

function Principal() {
    return (

        <Styled>
            <main id="area-principal">
                <div id="area-postagens">
                    <Postagens image="imagem1.jpg" />
                    <Postagens image="imagem2.jpg" />
                    <Postagens image="imagem3.jpg" />
                    <Postagens image="imagem4.jpg" />
                    <Postagens image="imagem5.jpg" />
                </div>
                <Lateral />
                <Rodape />
            </main>
        </Styled>

    );
};
export default Principal;