import { Box, Typography } from "@mui/material";
import Image from "next/image";

type TProps = {
  title: string;
  comment: string;
};

const AboutCommentArea: React.FC<TProps> = ({ title, comment }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      px={{ xs: 5, md: 45 }}
    >
      <Box
        my={4}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        py={{ xs: 2, md: 8 }}
        px={{ xs: 2, md: 10 }}
        border={"1px solid grey"}
      >
        <Box display={"flex"} alignItems={"center"} mr={{ xs: 0, md: 8 }}>
          <Image src="/peachtech.png" alt="logo" width={180} height={180} />
        </Box>
        <Box>
          <Typography
            component={"h3"}
            fontWeight={"bold"}
            fontSize={{ xs: 18, sm: 26 }}
            mb={2}
          >
            {title}
          </Typography>
          <Typography
            fontSize={{ xs: 12, md: 16 }}
            letterSpacing={0.8}
            fontWeight={"bold"}
          >
            {comment}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCommentArea;
