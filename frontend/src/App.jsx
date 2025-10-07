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
      <div className=''>
        <hedaer className="">
          <div>
            <h1 className=''>
                Agência de veiculos elétricos
            </h1>
            <div></div>
          </div>
        </hedaer>  
        
        <main>
          <section>
            <Categorias categorias={categorias} filtroItems={filtroItems} />
            <Menu items={menuItems}/>
          </section>
        </main>

        <footer className=''>
          <p className=''>&copy; 2025 - Todos os direitos reservados</p>
        </footer>

      </div>  
    </>
  )
}

export default App
