import React from 'react'

const MenuItem = ({titulo,img,descricao,marca,preco}) => {
    return (
        <article className=''>
            <img src={img} alt={titulo} className=''/>
            <div>
                <header>
                    <h4> {titulo}</h4>
                    <p> R$ {preco.toFixed(2)}</p>
                </header>
                <p>Descrição: <p>{descricao}</p></p>
                <p>Marca: <p>{marca}</p></p>
            </div>
        </article>

    )
}
export default MenuItem