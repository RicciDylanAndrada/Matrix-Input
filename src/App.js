import "./styles.css";
import React from "react";
const { useState } = React;

export default function App() {
  const n = 4;
  const [matrix, setMatrix] = useState(
    Array.from({ length: 1 }, () => Array.from({ length: 2 }, () => null))
  );
  const handleAddClick = () => {
    setMatrix([
      ...matrix,
      Array.from({ length: 2 }, () => Array.from({ length: 1 }, () => null))
    ]);
  };

  const handleChange = (row, column, event) => {
    let copy = [...matrix];
    copy[row][column] = +event.target.value;
    setMatrix(copy);

    console.log(matrix);
  };
  return (
    <div className="sheet">
      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((column, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="number"
                    onChange={(e) => handleChange(rowIndex, columnIndex, e)}
                  />
                </td>
              ))}
              <button className="border-2 ml-2 " onClick={handleAddClick}>
                Add
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
