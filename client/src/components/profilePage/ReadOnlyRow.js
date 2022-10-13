import React from "react";
import "./profile.css"

const ReadOnlyRow = ({ project, handleEditClick, handleDeleteClick }) => {
  return (
      <tr>
        <td className="render-name">{project.projectName}</td>
        <td className="render">{project.colors}</td>
        <td className="render">{project.paintName}</td>
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, project)}
          >
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteClick(project.id)}>
            Delete
          </button>
        </td>
      </tr>
  );
};

export default ReadOnlyRow;
