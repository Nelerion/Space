import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Error = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">Ошибка!</Alert>
    </Stack>
  );
};

export default Error;
