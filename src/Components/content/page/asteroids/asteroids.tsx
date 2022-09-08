import { ContentData, InfoData, ImageData } from "./style";
import { IAsteroids } from "../../../../store/slices/nasaSlice";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface PROPS {
  data?: IAsteroids;
}

const Asteroids_page = ({ data }: PROPS) => {
  const obj = data?.earth_objects["2015-09-07"];
 console.log(data)
 
  return (
    <ContentData>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name Asteroid</TableCell>
              <TableCell align="center">Potentially dangerous</TableCell>
              <TableCell align="center">Absolute magnitude</TableCell>
              <TableCell align="center">diameter (meters)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {obj?.map((asteroid: any) => (
              <TableRow
                key={asteroid.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {asteroid.name}
                </TableCell>
                <TableCell align="center">
                  {String(asteroid.is_potentially_hazardous_asteroid)}
                </TableCell>
                <TableCell align="center">{asteroid.absolute_magnitude_h}</TableCell>
                <TableCell align="center">{Math.ceil((asteroid.estimated_diameter.meters.estimated_diameter_max+asteroid.estimated_diameter.meters.estimated_diameter_min)/2)}</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentData>
  );
};

export default Asteroids_page;
