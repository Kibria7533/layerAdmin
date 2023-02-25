import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import { Box, Grid } from "@mui/material";
import ChartSecond from "./ColumnChart";
import ChartFirst from "./BarChart";

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

export default function Clients() {
  return (
    <Container fixed sx={{ marginTop: "30px" }}>
      <Box>
        <Grid container>
          <Grid item={true} xs={6}>
            <ChartSecond />
          </Grid>
          <Grid item={true} xs={6}>
            <ChartFirst />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
