import React from "react";

export default function EditRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter a Project Name..."
          name="projectName"
          value={editFormData.projectName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        {" "}
        <input
          type="text"
          placeholder="Enter color's Hex #..."
          name="colors"
          value={editFormData.colors}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        {" "}
        <input
          type="text"
          placeholder="Enter Painting's Name..."
          name="paintName"
          value={editFormData.paintName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
}
