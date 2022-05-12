import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Navbar from "./Navbar";
import "./Ft.css";
import { Routes, Route } from "react-router-dom";
import List from "./List";
import Edit from "./Edit";
import Homepage from "./Homepage";

const getLocalStorage = () => {
  let data = localStorage.getItem("data");
  if (data) {
    return (data = JSON.parse(localStorage.getItem("data")));
  } else {
    return [];
  }
};

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    img: "",
  });

  const [Enb , setEnb] = useState(true);
  const [data, setAllData] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  
  }, [data]);

  const editVal = (id) => {
    const eVal = data.find((elem) => elem.id === id);
    setFormData(eVal);
  }

  const updateVal = (e) => {
    e.preventDefault();
    setAllData(
      data.map((oldData) => {
        return oldData.id === formData.id ? formData : oldData
       })
    );
    
    setFormData({ name: "", email: "", gender: "", dob: "", img: "" });
  }

  return (
    <div className="App">
      <Navbar />
      <br />
      <Routes>

      <Route path="/" element={<Homepage/>}></Route>

        <Route
          path="/List"
          element={<List data={data} setFormData={setFormData} setAllData={setAllData} setEnb={setEnb}
          Enb={Enb} editVal={editVal} />}
        />
        <Route
          path="/Form"
          element={
            <Form
              data={data}
              setFormData={setFormData}
              formData={formData}
              setAllData={setAllData}
              setEnb={setEnb}
              Enb={Enb}
            />
          }
        />
        <Route path="/Edit/:id" element={<Edit formData={formData} setFormData={setFormData}  updateVal={updateVal} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
