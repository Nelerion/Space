import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import Error from "./../../../error";
import { ITechTransfer } from "./interfaces";

import {
  More,
  CardSubtext,
  CardTitle,
  InfoLabel,
  CardImage,
  CardHeader,
  Card,
  TechTransferPhotos,
} from "./style";
interface PROPS {
  fetchTech: () => void;
  error: boolean;
}
const TechTransfer: React.FC<PROPS> = ({ fetchTech, error }) => {
  const data = useAppSelector((state) => state.space.techTransfer);
  const isLoad = useAppSelector((state) => state.space.loading);

  useEffect(() => {
    fetchTech();
  }, []);
  return (
    <TechTransferPhotos>
      {isLoad && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {error ? (
        <Error />
      ) : (
        data?.map((tech: ITechTransfer) => (
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
              <NavLink to={`/techTransfer/${tech.id}`}>
                <More>More...</More>
              </NavLink>
            </InfoLabel>
          </Card>
        ))
      )}
    </TechTransferPhotos>
  );
};

export default TechTransfer;
