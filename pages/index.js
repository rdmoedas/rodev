function home() {
    return (
        <div>
            <h1>Home Rodev.com.br :)</h1>
            <contador />
        
        </div>
    


    )
}

function contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

//Novo padrão de export de módulo do js
export default home