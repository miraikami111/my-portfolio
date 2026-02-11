//①Appという名前のコンポーネント
//②のHeaderのimport
//③のHeaderのimport

//Router（ページ切り替えの仕組み）
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Header from "./components/Header";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Project_1 from "./components/Project_1";
import Project_2 from "./components/Project_2";
import Skills from "./components/Skills";






function App(){
  
  //returnの中身が画面(ブラウザに表示される)
  return(
    <Router>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project_1"element={<Project_1 />} />
        <Route path="/project_2" element={<Project_2 />} />


      </Routes>
    </Router>

  )
}

//このAppコンポーネントをほかのファイルから呼び出せるようにする
//この場合は呼び出される側
export default App;