const Categorias = ({categorias,filtroItems}) => {
    const getIcon = (categoria) => {
        switch(categoria.toLowerCase())
        {
            case 'Moto-eletrica':
                return;
            case 'Bicicleta-eletrica':
                return;
            default:
                return null;
        }
    };

    return(
        <nav className="">
            {categorias.map((categoria,index)=>(
                <button
                key={index}
                onClick={()=> filtroItems(categoria)}
                className=""
                >
                    {getIcon(categoria)}
                    {categoria}
                </button>
            ))}
        </nav>
    );
};

export default Categorias