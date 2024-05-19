import { useRoutes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';

const App = () => {
  const element = useRoutes([
    { path: '/', element: <HomePage /> }
  ])

  return (
    <>
      <Navigation />
      {element}
      <Footer />
    </>
  );
}

export default App;