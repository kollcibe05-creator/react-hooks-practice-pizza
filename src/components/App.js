import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
const [pizzas, setPizzas] = useState([])
const [pizzaEdited, setPizzaEdited] = useState({
  id: '',
  topping: "", 
  size: "",
  vegetarian: true
})
useEffect(() => {
  fetch("http://localhost:3001/pizzas")
  .then(r => r.json())
  .then(data => setPizzas(data))
}, [])

function onEditClick(item) {
  setPizzaEdited(item)
}
function handleSubmit(id, editedObj) {
    // console.log(id, editedObj)
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
      }, 
      body: JSON.stringify(editedObj)
    })
    .then(r => r.json())
    .then(item => {
      const updatedArr = pizzas.map(pizza => pizza.id === item.id ? item : pizza)
      setPizzas(updatedArr)
    })
}
  return (
    <>
      <Header />
      <PizzaForm key={pizzaEdited.id} pizza={pizzaEdited} onSubmission={handleSubmit}/>
      <PizzaList pizzas={pizzas} onEditPizza={onEditClick}/>
    </>
  );
}

export default App;
