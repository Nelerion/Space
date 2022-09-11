import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../../store/hooks";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Error from "./../../../../error";
import {
  Container,
  FullInfoContainer,
  InfoCard,
  Title,
  Description,
  OptionalTextBlock,
  OptionalText,
  ImageCard,
  Image,
  BackButton,
} from "./style";

interface PROPS {
  fetchTech: () => void;
  error: boolean;
}
const FullInfo: React.FC<PROPS> = ({ fetchTech, error }) => {
  useEffect(() => {
    fetchTech();
  }, []);
  const { title } = useParams();
  const data = useAppSelector((state) => state.space.techTransfer);
  const findItem = data?.find((item: any) => item.id === title);
  const isLoad = useAppSelector((state) => state.space.loading);
  return (
    <Container>
      {isLoad && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {error ? (
        <Error />
      ) : (
        <FullInfoContainer>
          <InfoCard>
            <Title>{findItem?.name.replace(/<[^>]*>/g, "")}</Title>
            <Description>
              {findItem?.description.replace(/<[^>]*>/g, "")}
            </Description>
            <OptionalTextBlock>
              <OptionalText>{findItem?.optionalText}</OptionalText>
              <OptionalText>{findItem?.nameId}</OptionalText>
            </OptionalTextBlock>
          </InfoCard>
          <ImageCard>
            <Image src={`${findItem?.image}`} />
          </ImageCard>
        </FullInfoContainer>
      )}
      <BackButton onClick={() => window.history.back()}>Back</BackButton>
    </Container>
  );
};
export default FullInfo;
