import { LoadingScreen } from './components/LoadingScreen'
import { ShopPage } from './pages/ShopPage'
import { useLoadingScreen } from './hooks/useLoadingScreen'
import './index.css'

function App() {
  const { visible, exiting, progress } = useLoadingScreen()

  return (
    <>
      {visible ? <LoadingScreen exiting={exiting} progress={progress} /> : null}
      <ShopPage />
    </>
  )
}

export default App
