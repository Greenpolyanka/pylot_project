import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../src/layout/Nav.jsx';
import Main from '../src/pages/Main.jsx';
import Aboutus from '../src/pages/Aboutus.jsx';
import Cats from '../src/pages/Cats.jsx';
import Dogs from '../src/pages/Dogs.jsx';
import Contacts from '../src/pages/Contacts.jsx';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="*" element={<Main/>}/>
                <Route path="/Aboutus" element={<Aboutus/>}/>
                <Route path="/Cats" element={<Cats/>}/>
                <Route path="/Dogs" element={<Dogs/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
            </Routes>
        </Router>
    );
}

export default App;