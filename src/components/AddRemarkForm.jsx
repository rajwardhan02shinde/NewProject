import React, { useState } from "react";

const AddRemarkForm = ({ onAddRemark }) => {
  // State variables for form fields
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Still Communication");

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!text.trim()) {
      alert("Please enter a remark.");
      return;
    }
    // Create new remark object
    const newRemark = {
      text: text.trim(),
      status,
      date: new Date().toISOString().split("T")[0], // Get current date in YYYY-MM-DD format
    };
    // Call the parent component's callback function to add the new remark
    onAddRemark(newRemark);
    // Clear form fields
    setText("");
    setStatus("Still Communication");
  };

  // Render the form
  return (
    <div className="add-remark-form">
      <h2>Add New Remark</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Remark:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="10"
            cols="50"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Still Communication">Still Communication</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Paused">Paused</option>
          </select>
        </div>
        <button type="submit">Add Remark</button>
      </form>
    </div>
  );
};

export default AddRemarkForm;
