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
import userStyle from "./userStyle.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

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

export default function User1() {
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
      <div className={userStyle.userDiv}>
        <div className={userStyle.userText}>
          <BookmarkIcon />
          <span style={{ marginLeft: "5px" }}>ব্যবহারকারী</span>
        </div>
        <div className={userStyle.userBtn}>
          <button className={userStyle.addBtn}>
            <AddCircleIcon style={{ color: "white", marginRight: "3px" }} />
            <span>নতুন যোগ করুন</span>
          </button>
          <button className={userStyle.pullBtn}>
            <AddCircleIcon style={{ color: "white", marginRight: "3px" }} />
            <span>নতুন পুল করুন</span>
          </button>
        </div>
      </div>
      <div className={userStyle.serachDiv}>
        <div className={userStyle.serarchLeft}>
          <input type="number" className={userStyle.searchInLeft} />{" "}
          <span>টা এন্ট্রি</span>
        </div>
        <div className={userStyle.serarchRight}>
          <span>অনুসন্ধানঃ</span>
          <input type="number" className={userStyle.searchInRight} />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic user table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell align="left">ছবি</TableCell>
              <TableCell align="left">ব্যবহারকারীর নাম</TableCell>
              <TableCell align="left">ইমেইল</TableCell>
              <TableCell align="left">মোবাইল নম্বর</TableCell>
              <TableCell align="left">রোল</TableCell>
              <TableCell align="left">পদক্ষেপ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myobj &&
              myobj.map((obj) => (
                <TableRow key={obj?.id}>
                  <TableCell component="th" scope="row">
                    <img
                      style={{ width: "20px" }}
                      src={obj?.profile_pic}
                      alt={obj?.first_name}
                    />
                  </TableCell>
                  <TableCell align="left">
                    {obj?.first_name} {obj?.last_name}
                  </TableCell>
                  <TableCell align="left">{obj?.email}</TableCell>
                  <TableCell align="left">{obj?.phone}</TableCell>
                  <TableCell align="left">{obj?.role}</TableCell>
                  <TableCell
                    align="left"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span className={userStyle.detail}>
                      <VisibilityOutlinedIcon style={{ marginRight: "3px" }} />{" "}
                      বিস্তারিত
                    </span>{" "}
                    <span className={userStyle.reset}>
                      <DriveFileRenameOutlineOutlinedIcon
                        style={{ marginRight: "3px" }}
                      />{" "}
                      সংশোধন
                    </span>
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
