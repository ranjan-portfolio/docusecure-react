
import Header from './components/Header'
import Footer from './components/Footer'
import Main   from './components/Main'


function App() {

  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh' // ✅ ensures full height
  };

  return (
    <div style={layoutStyle}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  )
}

export default App
