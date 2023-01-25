import React from "react";
import Styled from "../Styled";

function Lateral() {
    return (
     <Styled>
            <aside id="area-lateral">
                <div class="conteudo-lateral">
                    <h3>postagens recentes</h3>
                    <div class="postagem-lateral">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's
                            standard</p>
                        <a href="">leia mais</a>
                    </div>
                    <div class="postagem-lateral" styles="border-bottom:none;">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's
                            standard</p>
                        <a href="">leia mais</a>
                    </div>
                </div>
                <div class="conteudo-lateral">
                    <h3>Categorias</h3>
                    <a href="jogos.html">Jogos</a><br />
                    <a href="celulares.html">Celulares</a><br />
                    <a href="informatica.html">Informática</a><br />
                    <a href="eletronicos.html">Eletrônicos</a><br />
                </div>
            </aside>
     </Styled>
    );
};
export default Lateral;