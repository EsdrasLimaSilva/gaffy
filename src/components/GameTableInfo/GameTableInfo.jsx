import React from "react";

function GameTableInfo({ data }) {
  return (
    <>
      <table className="text-sm">
        <thead>
          <tr>
            <th colSpan={2}>Requiriments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>graphics</th>
            <td>{data.minimum_system_requirements.graphics}</td>
          </tr>
          <tr>
            <th>memory</th>
            <td>{data.minimum_system_requirements.memory}</td>
          </tr>
          <tr>
            <th>OS</th>
            <td>{data.minimum_system_requirements.os}</td>
          </tr>
          <tr>
            <th>processor</th>
            <td>{data.minimum_system_requirements.processor}</td>
          </tr>
          <tr>
            <th>storage</th>
            <td>{data.minimum_system_requirements.storage}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default GameTableInfo;
