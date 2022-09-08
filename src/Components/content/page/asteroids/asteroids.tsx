import { ContentData, ButtonPrevNextBlock, ButtonPrevNext,Pages } from "./style";
import { Iearth_objects } from "../../../../store/slices/nasaSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PROPS, IAstrApproachData } from "./model";
import { useState, useEffect } from "react";

const Asteroids_page = ({ data }: PROPS) => {
  const [asteroidsArrayNumber, setAsteroidsArrayNumber] = useState<number>(0);
  const [pagination, SetPagination] = useState<number[]>([]);
  const obj = data?.earth_objects;
  const asteroidObject = Object.values(data?.earth_objects || {});
  const objK = Object.keys(obj || {});
  const asteroidData = asteroidObject[asteroidsArrayNumber];
  const indexArray = asteroidObject.length - 1;

  const prevPage = () => {
    setAsteroidsArrayNumber((prev) => prev - 1);
  };
  const nextPage = () => {
    setAsteroidsArrayNumber((prev) => prev + 1);
  };
  const selectPage = (page:number) => {
    setAsteroidsArrayNumber(page-1);
  };

  useEffect(() => {
    for (let i: number = 1; i < asteroidObject.length+1; i++) {
      
      SetPagination((prev) => [...prev, i]);
      
    }
  }, [asteroidObject.length]);

  return (
    <ContentData>
      <ButtonPrevNextBlock>
        <ButtonPrevNext
          type="button"
          value="Prev page"
          onClick={prevPage}
          disabled={asteroidsArrayNumber === 0 && true}
        />
        {pagination.map((page:any,index:any)=><Pages key={page} onClick={()=>selectPage(page)} style={ index===asteroidsArrayNumber ? { fontWeight:'bold'} : { fontWeight:'500'}}>{page}</Pages>)}
        <ButtonPrevNext
          type="button"
          value="Next page"
          onClick={nextPage}
          disabled={asteroidsArrayNumber === indexArray && true}
        />
      </ButtonPrevNextBlock>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, minHeight: 600 }} aria-label="simple table">
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
            {asteroidData?.map((earth_objects: Iearth_objects) => (
              <TableRow
                key={earth_objects.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:nth-child(odd)": { backgroundColor: "#e6e0e0" },
                }}
              >
                <TableCell component="th" scope="row">
                  {earth_objects.name}
                </TableCell>
                <TableCell align="center">
                  {String(earth_objects.is_potentially_hazardous_asteroid)}
                </TableCell>
                <TableCell align="center">
                  {earth_objects.absolute_magnitude_h}
                </TableCell>
                <TableCell align="center">
                  {Math.ceil(
                    (earth_objects.estimated_diameter.meters
                      .estimated_diameter_max +
                      earth_objects.estimated_diameter.meters
                        .estimated_diameter_min) /
                      2
                  )}
                </TableCell>
                <TableCell align="center">
                  {earth_objects.close_approach_data.map((data: any) => (
                    <>{data.orbiting_body}</>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentData>
  );
};
export default Asteroids_page;
