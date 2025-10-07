import React from 'react'

const MenuItem = ({ titulo, img, descricao, marca, preco }) => {
    return (
        <article className='bg-white rounded-xl shadow-lg flex items-center flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
            <img src={img} alt={titulo} className='w-full max-h-52 rounded-t-xl' />
            <div className="p-5 flex flex-col flex-grow">
                <header className="flex justify-between items-baseline border-b-2 border-orange-200 pb-2 mb-4">
                    <h4 className="text-xl text-slate-800 capitalize font-medium"> {titulo}</h4>
                    <p> R$ {preco.toFixed(2)}</p>
                </header>
                    <div className='*:flex *:justify-between *:px-2'>
                        <div><strong>Descrição:</strong> <p className='max-w-2/3 text-justify'>{descricao}</p></div>
                        <div><strong>Marca:</strong> <p>{marca}</p></div>
                    </div>
            </div>
        </article>
    )
}
export default MenuItem