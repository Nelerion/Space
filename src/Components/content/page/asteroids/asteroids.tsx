import {
  ContentData,
  ButtonPrevNextBlock,
  ButtonPrevNext,
  PaginationPages,
  SearchAsteroidInput,
  SearchAsteroidInputForm,
  ButtonSearch,
} from "./style";

import { Iearth_objects } from "../../../../store/slices/nasaSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import { PROPS, IAstrApproachData } from "./model";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../../store/hooks";

const Asteroids_page:React.FC<PROPS> = ({
  data,
  setStartDateValue,
  setPrevDateValue,
}) => {
  const isLoad = useAppSelector(state=>state.space.loading)
  const [asteroidsArrayNumber, setAsteroidsArrayNumber] = useState<number>(0);
  const [pagination, SetPagination] = useState<number[]>([]);
  const obj = data?.earth_objects;
  const asteroidObject = Object.values(data?.earth_objects || {});
  const objK = Object.keys(obj || {});
  const asteroidData = asteroidObject[asteroidsArrayNumber];
  const indexArray = asteroidObject.length - 1;
  const [startDateAsteroidValue, setStartDateAsteroidValue] =
    useState<string>("");
  const [endDateAsteroidValue, setEndDateAsteroidValue] = useState<string>("");
  const prevPage = () => {
    setAsteroidsArrayNumber((prev) => prev - 1);
  };
  const nextPage = () => {
    setAsteroidsArrayNumber((prev) => prev + 1);
  };
  const selectPage = (page: number) => {
    setAsteroidsArrayNumber(page - 1);
  };

  const onChangeAsteroidInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "startDate") {
      setStartDateAsteroidValue(e.target.value);
    }
    if (e.target.name === "endDate") {
      setEndDateAsteroidValue(e.target.value);
    }
  };
  const searchAsteroidForDate = () => {
    setStartDateValue(startDateAsteroidValue);
    setPrevDateValue(endDateAsteroidValue);
  };
  useEffect(() => {
    const arr: number[] = [];
    for (let i: number = 1; i < asteroidObject.length + 1; i++) {
      arr.push(i);
      SetPagination([...arr]);
    }
  }, [indexArray]);

  return (
    <ContentData>
      <ButtonPrevNextBlock>
        <ButtonPrevNext
          type="button"
          value="Prev page"
          onClick={prevPage}
          disabled={asteroidsArrayNumber === 0 && true}
        />
        {pagination.map((page: any, index: any) => (
          <PaginationPages
            key={page}
            onClick={() => selectPage(page)}
            style={
              index === asteroidsArrayNumber
                ? { fontWeight: "bold" }
                : { fontWeight: "500" }
            }
          >
            {page}
          </PaginationPages>
        ))}
        <ButtonPrevNext
          type="button"
          value="Next page"
          onClick={nextPage}
          disabled={asteroidsArrayNumber === indexArray && true}
        />
      </ButtonPrevNextBlock>
      <SearchAsteroidInputForm>
        <SearchAsteroidInput
          value={startDateAsteroidValue}
          onChange={onChangeAsteroidInput}
          name="startDate"
          placeholder="start date format YYYY-MM-DD"
        ></SearchAsteroidInput>
        <ButtonSearch
          type="button"
          value="Search"
          onClick={searchAsteroidForDate}
        />
        <SearchAsteroidInput
          value={endDateAsteroidValue}
          onChange={onChangeAsteroidInput}
          name="endDate"
          placeholder="end date format YYYY-MM-DD"
        ></SearchAsteroidInput>
      </SearchAsteroidInputForm>
      {isLoad&&<Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>}
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
                  {earth_objects.close_approach_data.map(
                    (data: any, index: number) => (
                      <span key={data + index}>{data.orbiting_body}</span>
                    )
                  )}
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
