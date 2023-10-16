import{ Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SeeMore from './SeeMore';
import NoPage from './NoPage';
import BuyForm from './BuyForm';
class App extends Component {
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/seemore' element={<SeeMore/>}/>
                    <Route path='/buy' element={<BuyForm/>}/>
                    <Route path='*' element={<NoPage/>}/>
                </Routes>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default App;