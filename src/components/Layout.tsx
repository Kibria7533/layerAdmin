import CssBaseline from "@mui/material/CssBaseline";
import Navber from "@/components/Navber";
import SideBar from "./SideBar";
import { Box } from "@mui/system";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navber />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <SideBar />
        <Box
          sx={{
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
