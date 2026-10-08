import Encabezado from './Components/Encabezado'
import ListaProductos from './Components/Listarproductos'
import Carrito from './Components/Carrito'

function App() {
  return (
    <div className="app">

      <Encabezado />

      <main className="contenido">
        <ListaProductos />
        <Carrito />
      </main>

    </div>
  )
}

export default App