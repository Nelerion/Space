import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../../../../store/hooks";

const FullInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 5px;
  padding: 20px;
`;

const InfoCard = styled.div`
  width: 50%;
`;
const ImageCard = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 25px;
`;
interface PROPS {
  fetchTech: () => void;
}
const FullInfo: React.FC<PROPS> = ({ fetchTech }) => {
  useEffect(() => {
    fetchTech();
  }, []);
  const { title } = useParams();
  const data = useAppSelector((state) => state.space.techTransfer);
  const findItem = data?.find((item: any) => item.id === title);

  return (
    <FullInfoContainer>
      <InfoCard>123</InfoCard>
      <ImageCard>
        <Image src={`${findItem?.image}`} />
      </ImageCard>
    </FullInfoContainer>
  );
};
export default FullInfo;
