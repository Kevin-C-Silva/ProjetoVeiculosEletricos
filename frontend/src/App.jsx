import { useState } from 'react'
import Menu from "./components/Menu";
import Categorias from './components/Categoria';
import dados from './Data/dados';

const todasCategorias = ['todos', ... new Set(dados.map(item => item.categoria))]

function App() {

  const [menuItems, setMenuItems] = useState(dados);
  const [categorias, setCategorias] = useState(todasCategorias);

  const filtroItems = (categoria) => {
    if (categoria == "todos")
        setMenuItems(dados);
    else
    {
      const novoItem = dados.filter((item) => item.categoria === categoria)
      setMenuItems(novoItem);
    }
  }
  return (
    <>
      <div className='min-h-screen bg-gray-50 text-gray'>
        <hedaer className="py-12 bg-white shadow-sm">
          <div className='container mx-auto px-4 mt-3 text-center'>
            <h1 className='text-5xl md:text-4xl text-slate-800 font-bold uppercase tracking-wider mb-2'>
                Agência de veiculos elétricos
            </h1>
            <div className='className="w-20 h-1 bg-orange-500 mx-auto rounded-full'></div>
          </div>
        </hedaer>  
        
        <main className="flex-grow py-10 px-4 mb-45">
          <section className="container mx-auto max-w-7xl">
            <Categorias categorias={categorias} filtroItems={filtroItems} />
            <Menu items={menuItems}/>
          </section>
        </main>

        <footer className='bg-slate-800 text-white text-center p-5 w-full'>
          <p className='text-sm'>&copy; 2025 - Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  )
}

export default App
