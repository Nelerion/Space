import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { isLoadingFalse } from "../../../../store/slices/nasaSlice";
import { fetchTechTransfer } from "../../../header/fetch";

const TechTransfer = () => {
    const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    fetchTechTransfer().then((res) => {
      if (res.status >= 400) {
        dispatch(isLoadingFalse());
        setError(true);
        return;
      }
      return res.json().then((data) => {
        setError(false);
        console.log(data)
      });
    });
  }, []);

  return <div>Page</div>;
};

export default TechTransfer;
