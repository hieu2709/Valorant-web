import Home from "./pages/Home";
import 'antd/dist/antd.css';
import Maps from "./components/Maps/Maps";
import Header from "./components/Header/Header";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Weapons from "./components/Weapons/Weapons";
import Agents from "./components/Agents/Agents";
import './App.css';


function App() {

    return (
        <div className="App">
            <Header/>
                <div className='main'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/maps' element={<Maps/>}/>
                        <Route path='/weapons' element={<Weapons/>}/>
                        <Route path='/agents' element={<Agents/>}/>
                    </Routes>
                </div>
        </div>

    );
}

export default App;
