import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";

const CatTable = ({list, deleteCat})=> {

    return (
        <>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Color</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {list.map((cat) => (
          <tr key={cat.id}>
            <td>{cat.name}</td>
            <td>{cat.age}</td>
            <td>{cat.gender}</td>
            <td>{cat.color}</td>
            <td>
                <DeleteButton id={cat.id} onDelete={deleteCat}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
    );
}

export default CatTable;

// {/* <DeleteButton employeeId={employee.id} onDelete={onDelete} /> */}