import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import EditRow from "./EditRow";
import ReadOnlyRow from "./ReadOnlyRow";
import data from "./seeds.json";
import "./profile.css";

const Table = () => {
  const [projects, setProjects] = useState(data);
  const [addFormData, setAddFormData] = useState({
    projectName: "",
    colors: "",
    paintName: "",
  });

  const [editFormData, setEditFormData] = useState({
    projectName: "",
    colors: "",
    paintName: "",
  });

  const [editProjectId, setEditProjectId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newProject = {
      id: nanoid(),
      projectName: addFormData.projectName,
      colors: addFormData.colors,
      paintName: addFormData.paintName,
    };

    const newProjects = [...projects, newProject];
    setProjects(newProjects);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedProject = {
      id: editProjectId,
      projectName: editFormData.projectName,
      colors: editFormData.colors,
      paintName: editFormData.paintName,
    };

    const newProjects = [...projects];

    const index = projects.findIndex((project) => project.id === editProjectId);

    newProjects[index] = editedProject;

    setProjects(newProjects);
    setEditProjectId(null);
  };

  const handleEditClick = (event, project) => {
    event.preventDefault();
    setEditProjectId(project.id);

    const formValues = {
      projectName: project.projectName,
      colors: project.colors,
      paintName: project.paintName,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditProjectId(null);
  };

  const handleDeleteClick = (projectId) => {
    const newProjects = [...projects];

    const index = projects.findIndex((project) => project.id === projectId);

    newProjects.splice(index, 1);

    setProjects(newProjects);
  };

  return (
    <div className="notes-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Project Title:</th>
              <th>Colors (Hex #):</th>
              <th>Painting Name:</th>
              <th>Actions: </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <Fragment>
                {editProjectId === project.id ? (
                  <EditRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    project={project}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="addProject"> Add an Inspiration: </h2>
      <form className="addForm" pl={3} onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="projectName"
          placeholder="Enter Project Name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="colors"
          placeholder="Enter color's Hex #..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="paintName"
          placeholder="Enter Painting's Name..."
          onChange={handleAddFormChange}
        />
        <button className="addButton" type="submit">Add</button>
      </form>
    </div>
  );
};

export default Table;
