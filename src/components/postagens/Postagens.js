import React from "react";
import Styled from "../Styled";

function Postagens(props) {
    return (
        <Styled>
            <section class="postagens">
                <h2>titulo</h2>
                <span class="data-postagem">20 de março</span>
                <img src={`images/${props.image}`} alt="imagem 1" width='620px' />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <a href="">leia mais</a>
            </section>
        </Styled>
    );
}
export default Postagens;