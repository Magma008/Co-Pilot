import Header from './components/Header'
import Content from './components/Content'
import About from './components/About'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Navbarsm from './components/Navbarsm'

const App = () => {
  const winWidth = window.innerWidth
  return (
    <div className='bg-white dark:bg-slate-800 min-h-screen'>
      {winWidth < 621 ? <Navbarsm/> : <Header/> }
      <Content/>
      <About/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App