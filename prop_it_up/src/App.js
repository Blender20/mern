import React from 'react';
import './App.css';
// import MyNewComponent from './components/MyNewComponent';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard lastName = {"Doe"} name ={"Jane"} age = {45} hair_color = {"Black"}></PersonCard>
      <PersonCard lastName = {"Smith"} name ={"John"} age = {88} hair_color = {"Brown"}></PersonCard>
      <PersonCard lastName = {"Fillmore"} name ={"Millard"} age = {50} hair_color = {"Brown"}></PersonCard>
      <PersonCard lastName = {"Smith"} name ={"Maria"} age = {62} hair_color = {"Brown
      "}></PersonCard>
      

    </div>
  )
}

export default App;
