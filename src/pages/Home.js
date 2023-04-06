import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProfileIcon from "../assets/profile.svg";
import ProjectIcon from "../assets/project.svg";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        p: 2,
        gap: 2,
      }}
    >
      <Link href="/stage-profile" underline="none">
        <img src={ProfileIcon} alt="project icon" height="100" width="100" />
      </Link>
      <Link href="/stage-project" underline="none">
        <img src={ProjectIcon} alt="project icon" height="100" width="100" />
      </Link>
    </Box>
  );
}

export default Home;
