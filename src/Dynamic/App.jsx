import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from './Posts';
import Post_details from './Post_details';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<Post_details/>}/>
            </Routes>
        </Router>
    )
}

export default App