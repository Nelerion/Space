import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchingTechTransfer,
  isLoadingFalse,
} from "../../../../store/slices/nasaSlice";
import { fetchTechTransfer } from "../../../header/fetch";
import { ITechTransfer } from "./../../../../store/slices/nasaSlice";


const TechTransferPhotos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  margin-top: 5px;
  padding: 10px 0;
`;

const Card = styled.div`
  width: 30%;
  min-width: 250px;
  height: 300px;
  background-color: #fffbfb;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
`;

const CardHeader = styled.div`
  width: 100%;
  height: 150px;
  -webkit-box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  z-index: -1;
  transition: 300ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
    z-index: 2;
    transition: 300ms;
    border-radius: 10px;
  }
`;
const InfoLabel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #686868;
`;
const CardSubtext = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // max nb lines to show
  -webkit-box-orient: vertical;
`;
const OptionalName = styled.span`
  font-weight: bold;
`;

const TechTransfer: React.FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);
  const data = useAppSelector((state) => state.space.techTransfer);

  const fetchTech = () => {
    fetchTechTransfer().then((res) => {
      if (res.status >= 400) {
        dispatch(isLoadingFalse());
        setError(true);
        return;
      }
      return res.json().then((data) => {
        setError(false);
        const arr: any = [];
        data.results.map((result: any) => {
          arr.push({
            nameId: result[1],
            name: result[2],
            description: result[3],
            optionalText: result[5],
            image: result[10],
            id: result[0],
          });
        });
        dispatch(fetchingTechTransfer(arr));
      });
    });
  };

  useEffect(() => {
    fetchTech();
  }, []);
  return (
    <TechTransferPhotos>
      {data?.map((tech: ITechTransfer) => (
        <Card>
          <CardHeader>
            <NavLink to={`/techTransfer/${tech.id}`}>
              <CardImage src={tech.image} />
            </NavLink>
          </CardHeader>
          <InfoLabel>
            <CardTitle>{tech.name.replace(/<[^>]*>/g, "")}</CardTitle>
            <CardSubtext>
              {tech.description.replace(/<[^>]*>/g, "")}
            </CardSubtext>
            {/* <OptionalName>{tech.optionalText}</OptionalName>
          <OptionalName>{tech.nameId}</OptionalName> */}
          </InfoLabel>
        </Card>
      ))}
    </TechTransferPhotos>
  );
};

export default TechTransfer;
