import { useState } from 'react'
import Categorias from './components/Categoria';

const todasCategorias = ['todos', ... new Set(dados.map(item => item.categoria))]

function App() {

  const [menuItems, setMenuItems] = useState();
  const [categorias, setCategorias] = useState();

  const filtorItems = (categorias) => {
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
            <Categorias categorias={categorias} filtorItems={filtorItems} />
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
