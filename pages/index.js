import { useState } from 'react';
//Importação do useState para utilizar um componente com memória

function Home() {
    return (
        <div>
            <h1>Hello World!</h1>
            <div>
                <p>Site em desenvolvimento.</p>
                <div><a href="https://github.com/rdmoedas">Link do meu github</a></div>
                <div><a href="https://www.linkedin.com/in/rodolfo-santana-57766b47/">Link do meu linkedin</a></div>
            </div>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    function subtrairContador() {
        setContador(contador - 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <div><button onClick={adicionarContador}>Adicionar</button></div>
            <div><button onClick={subtrairContador}>Remover</button></div>
        </div>
    )
}

//Novo padrão de export de módulo do js
export default Home