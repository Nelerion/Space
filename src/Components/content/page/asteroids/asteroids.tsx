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
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../../store/hooks";

interface PROPS {
  data?: IAsteroids;
}


interface IAstrApproachData{
  orbiting_body:string
}
interface IAsteroidData{
  name:string
  is_potentially_hazardous_asteroid:boolean
  absolute_magnitude_h:number
  estimated_diameter:{
    meters:{
      estimated_diameter_max:number
      estimated_diameter_min:number
    }
  }
  close_approach_data:IAstrApproachData[]
}

const Asteroids_page = ({ data }: PROPS) => {
  const astedoidsDateStart = useAppSelector(state=>state.space.AstrDate.startDate);
  const astedoidsDateEnd = useAppSelector(state=>state.space.AstrDate.endDate);

  
  const obj = data?.earth_objects[String(astedoidsDateEnd)];
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
              <TableCell align="center">Diameter (meters)</TableCell>
              <TableCell align="center">Orbiting body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {obj?.map((asteroid: IAsteroidData) => (
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
                <TableCell align="center">{asteroid.close_approach_data.map((data:IAstrApproachData)=><>{data.orbiting_body}</>)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentData>
  );
};

export default Asteroids_page;
