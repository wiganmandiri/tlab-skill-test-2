// import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlankPages from './components/blank-pages'
import Layouts from './components/layouts'
import ApiHome from './pages/api-home'

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='*' element={<BlankPages />} />
        <Route path='/' element={<Layouts><ApiHome /></Layouts>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
