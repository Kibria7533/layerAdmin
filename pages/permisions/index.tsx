import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
//-------------------------------
import axios from "axios";
import { useState, useEffect } from "react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

//------------------------------------

const myobj = [
  {
    id: 1,
    user_id: "189892788390",
    first_name: "Shm",
    last_name: "Usuf",
    email: "as@gmail.com",
    pass: "$2a$08$t9C8RfYq5fveHuL0T8uO6OfnhEXl0V4U8JlmuhIT8JthVi0hhn7Fa",
    stripe_customer_id: null,
    stripe_subscription_id: null,
    lawyer_categories: null,
    profile_pic: "https://randomuser.me/api/portraits/men/40.jpg",
    role: "lawyer",
    phone: "01711223344",
    createdAt: "2023-03-02T01:33:55.513Z",
    updatedAt: "2023-03-02T01:33:55.513Z",
  },
  {
    id: 2,
    user_id: "18989244788390",
    first_name: "Shn",
    last_name: "Usuf",
    email: "as@gmail.com",
    pass: "$2a$08$gI/w3UGy1I2cTXnWJhXDFeMdLNhJpHLjWZ98532AWDaaQnh2sinaC",
    stripe_customer_id: null,
    stripe_subscription_id: null,
    lawyer_categories: null,
    profile_pic: "https://randomuser.me/api/portraits/men/40.jpg",
    role: "lawyer",
    phone: "01711223344",
    createdAt: "2023-03-02T03:10:03.212Z",
    updatedAt: "2023-03-02T03:10:03.212Z",
  },
  {
    id: 3,
    user_id: "1898924478558390",
    first_name: "Shm",
    last_name: "Usuf",
    email: "as@gmail.com",
    pass: "$2a$08$y6Ex4/yOmc5BpA0kJu2Ve.k8NKSxFVV.QVBhUehmcYnDhtgxWOznu",
    stripe_customer_id: null,
    stripe_subscription_id: null,
    lawyer_categories: null,
    profile_pic: "https://randomuser.me/api/portraits/men/40.jpg",
    role: "lawyer",
    phone: "01711223344",
    createdAt: "2023-03-02T05:51:07.885Z",
    updatedAt: "2023-03-02T05:51:07.885Z",
  },
];

//-------------------------------------

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function Permisions() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  //getting data from the server
  useEffect(() => {
    fetchData();
  }, []);

  //featching data
  const fetchData = async () => {
    await axios
      .get("http://35.77.46.232:8080/admin/service-providers")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <Container fixed sx={{ marginTop: "30px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>Permision caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))} */}
            {myobj &&
              myobj.map((obj) => (
                <TableRow key={obj?.id}>
                  <TableCell component="th" scope="row">
                    <img
                      style={{ width: "50px" }}
                      src={obj?.profile_pic}
                      alt={obj?.first_name}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {obj?.first_name} {obj?.last_name}
                  </TableCell>
                  <TableCell align="right">{obj?.phone}</TableCell>
                  <TableCell align="right">{obj?.role}</TableCell>
                  <TableCell align="right">
                    <span>details</span> <span>reset</span> <span>delete</span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

//----------------------
