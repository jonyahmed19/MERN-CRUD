import "./App.css";
import CreatePage from "./Pages/CreatePage.jsx";
import AppNavBar from "./Components/Common/AppNavBar.jsx";
import { Route, Routes } from "react-router-dom";
import ReadPage from "./Pages/ReadPage";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/all" element={<ReadPage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </>
  );
}

export default App;
