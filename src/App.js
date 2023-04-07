import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Infor from "./pages/Infor";
function App() {
  return (
    <Box widdth="400px" sx={{ width: { x1: "14488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetails />}></Route>
        {/* <Route path="/information" element={<Infor />}></Route> */}
      </Routes>
      <Footer></Footer>
    </Box>
  );
}
export default App;
