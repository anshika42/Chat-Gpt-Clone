import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";

const Convertor = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // media
  const isNotMobile = useMediaQuery("(min-width :1000px)");

  // states

  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/convertor", { text });
      console.log(data);
      setCode(data);
    } catch (err) {
      console.log(err);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">JS Convertor</Typography>

        <TextField
          placeholder="add your text"
          type="text"
          required
          multiline={true}
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
        >
          Convert
        </Button>
        <Typography mt={2}>
          not this tool ? <Link to="/">Go Back</Link>
        </Typography>
      </form>

      {code ? (
        <Card
          sx={{
            overflow: "auto",
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgColor: "background.default",
          }}
        >
          <pre>
            <Typography p={2}>{code}</Typography>
          </pre>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgColor: "background.default",
          }}
        >
          <Typography
            variant="h5"
            color="natural-main"
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "450px",
            }}
          >
            Your Code will appear here
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default Convertor;
