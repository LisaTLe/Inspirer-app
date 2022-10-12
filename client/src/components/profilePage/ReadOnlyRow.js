import React from "react";

const ReadOnlyRow = ({ project, handleEditClick, handleDeleteClick }) => {
  return (
    <div>
      <tr>
        <td>{project.projectName}</td>
        <td>{project.colors}</td>
        <td>{project.paintName}</td>
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
    </div>
  );
};

export default ReadOnlyRow;
