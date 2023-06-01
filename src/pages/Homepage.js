import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import CodeOffRounded from "@mui/icons-material/CodeOffRounded";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* summary */}

        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight={"bold"}>
            Text Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Text Summary
              </Typography>
              <Typography variant="h6">
                Summarise long text into short sentences
              </Typography>
            </Stack>
          </Card>
        </Box>

        {/* paragraph generation */}
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight={"bold"}>
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Paragraph
              </Typography>
              <Typography variant="h6">Generate Paragraph with wods</Typography>
            </Stack>
          </Card>
        </Box>

        {/* chatbot */}
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight={"bold"}>
            AI Chatbot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Chatbot
              </Typography>
              <Typography variant="h6">Chat with AI Chatbot</Typography>
            </Stack>
          </Card>
        </Box>

        {/* js convertor */}
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight={"bold"}>
            Javascript Convertor
          </Typography>
          <Card
            onClick={() => navigate("/convertor")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <CodeOffRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                JS Convertor
              </Typography>
              <Typography variant="h6">
                Translate english to Javascript code
              </Typography>
            </Stack>
          </Card>
        </Box>

        {/* image generator */}
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight={"bold"}>
            AI SCIFI IMAGE
          </Typography>
          <Card
            onClick={() => navigate("/sci-img")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ImageOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Scifi image
              </Typography>
              <Typography variant="h6">Generate Scifi image</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
