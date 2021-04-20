import { useState } from 'react';
//Importação do useState para utilizar um componente com memória

function About() {
    return (
        <body>
            <header class="">
                <div class="">
                    <ul class="header header-frame ">
                        <li class="header-text header-item"><a href="/">HOME</a></li>
                        <li class="header-text header-item">/</li>
        
                        <li class="header-text header-item"><a href="/sobre">SOBRE</a></li>
                        <li class="header-text header-item">/</li>
        
                        <li class="header-text header-item"><a href="/portifolio">PROJETOS</a></li>
                        <li class="header-text header-item">/</li>
        
                        <li class="header-text header-item"><a href="/links">LINK</a></li>
                        <li class="header-text header-item">/</li>
        
                        <li class="header-text header-item"><a href="/contato">CONTATO</a></li>
                    </ul>
                </div>
            </header>
            <div class="text-box">
                <h1>SOBRE</h1>
                <div class="white-line"></div>
                <div class="text">Sou um programador full stack jr. Estou em São Paulo-SP e tenho disponibilidade para trabalhos remotos ou em diferentes cidades.</div>
                   <br />
                <div class="text">Tenho experiência em: JS, Node, Express, React, Api, MYSQL, Mongodb, Git, HTML+CSS, alguns exemplos estão no meu portfolio e no meu Github.</div>
                   <br />
                <div>Antes de virar programador era um empresário organizando eventos e cursos de desenvolvimento humano.</div>
            </div>
        </body>
    )
}

export default About