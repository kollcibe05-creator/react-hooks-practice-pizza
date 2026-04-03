import React, { useState } from "react";

function PizzaForm({pizza, onSubmission}) {
  const [formData, setFormData] = useState({
      topping:pizza.topping, 
      size: pizza.size, 
      vegetarian: pizza.vegetarian
  })
function handleChange(e) {
    let value =  e.target.value
    if(e.target.name === "vegetarian") {
      value = e.target.value === "vegetarian" ? true : false
    }
    setFormData({
      ...formData, 
      [e.target.name]: value
    })
}
function handleSubmit(e) {
  e.preventDefault()
  onSubmission(pizza.id, formData)
  setFormData({
      topping:"", 
      size: "", 
      vegetarian: "",
})
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={formData.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="vegetarian"
              checked={formData.vegetarian === true}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={formData.vegetarian === false}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
