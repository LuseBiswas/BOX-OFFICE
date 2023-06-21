
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Started from './pages/Started'
import Show from './pages/Show';
import MainLayout from './components/MainLayout';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
    <BrowserRouter>
    <Routes>

      <Route element={<MainLayout/>}>
      <Route path="/" element ={ <Home /> } />
      <Route path="/started" element ={ <Started /> } />

      </Route>

      <Route path="/show/:showId" element={<Show/>}/>

      

      
    </Routes>
  </BrowserRouter>
  </GlobalTheme>
  </QueryClientProvider>
  );
}

export default App;
