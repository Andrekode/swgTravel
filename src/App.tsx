import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from './components/appbar/ResponsiveAppBar';
import Home from './pages/Home';
import News from './pages/News';
import Travel from './pages/Travel';
import Resources from './pages/Resources';

function App(): JSX.Element {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <ResponsiveAppBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/travel' element={<Travel />} />
                    <Route path='/resources' element={<Resources />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
