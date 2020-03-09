import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const INITIAL_STATE = {
  description: ""
};

function TodoForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch({ type: "ADD_TODO", payload: formData });
    setFormData(INITIAL_STATE);
  }


  return (
    <form>
      <label htmlFor="description">Description</label>
      <input id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default TodoForm;