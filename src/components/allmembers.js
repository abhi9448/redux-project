import { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 110 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "occupation",
    headerName: "Occupation",
    width: 190,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    width: 110,
    editable: true,
  },
  {
    field: "bio",
    headerName: "Bio",
    width: 110,
    editable: true,
  },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const newRow = () => {
    fetch(`http://localhost:5000/api/members/getAllUser`)
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        res2.forEach(ele => {
          ele.id = ele._id;
        })
        setRows(res2);
      });
  };
  useEffect(() => {
    newRow();
  }, []);
  
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} checkboxSelection disableSelectionOnClick />
    </div>
  );
}
