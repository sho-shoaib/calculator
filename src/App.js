import { Container, Grid, Paper, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import { useState } from "react";

const data = [
  { id: 0, icon: 1, value: 1 },
  { id: 1, icon: 2, value: 2 },
  { id: 2, icon: 3, value: 3 },
  { id: 3, icon: <AddIcon />, value: "+" },
  { id: 4, icon: 4, value: 4 },
  { id: 5, icon: 5, value: 5 },
  { id: 6, icon: 6, value: 6 },
  { id: 7, icon: <RemoveIcon />, value: "-" },
  { id: 8, icon: 7, value: 7 },
  { id: 9, icon: 8, value: 8 },
  { id: 10, icon: 9, value: 9 },
  { id: 11, icon: <CloseIcon />, value: "*" },
  { id: 12, icon: 0, value: 0 },
  { id: 13, icon: <BackspaceOutlinedIcon />, value: "back" },
  { id: 14, icon: "=", value: "=" },
  { id: 15, icon: "/", value: "/" },
];

function App() {
  const [toCalc, setToClac] = useState("0");

  const handleClick = (val) => {
    //Calcute handle
    if (val === "=") {
      if (
        toCalc.includes("+") ||
        toCalc.includes("-") ||
        toCalc.includes("*") ||
        toCalc.includes("/")
      ) {
        const res = eval(toCalc);
        if (res !== Infinity) {
          setToClac(String(res));
        }
      }
      return;
    }

    //Clear last handle
    if (val === "back") {
      if (toCalc.length === 1) {
        setToClac("0");
        return;
      } else {
        setToClac((prev) => {
          prev.replace("back", "");
          return prev.slice(0, -1);
        });
        return;
      }
    }

    //Start handle
    if (toCalc === "0") {
      setToClac("");
      setToClac((prev) => {
        return prev + val;
      });
      return;
    }

    //Begin handle
    setToClac((prev) => {
      prev.replace("back", "");
      return prev + val;
    });
  };

  return (
    <>
      <Container
        maxWidth='xl'
        sx={{
          backgroundColor: "#da77f2",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            height: "80%",
            border: 15,
            borderRadius: 4,
            borderColor: "#228be6",
            maxWidth: "500px",
            paddingRight: 1,
            paddingBottom: 1,
            gridTemplateRows: "repeat(auto-fill, 1fr)",
          }}
        >
          <Grid item xs={12}>
            <Paper
              sx={{
                height: "100%",
                backgroundColor: "#e3f2fd",
                fontSize: 48,
                display: "flex",
                alignItems: "center",
                paddingInline: 1,
                overflowX: "auto",
              }}
              elevation={0}
            >
              {toCalc}
            </Paper>
          </Grid>
          {data.map((item) => {
            return (
              <Grid
                key={item.id}
                item
                xs={3}
                value={item.value}
                onClick={() => handleClick(item.value)}
              >
                <Paper
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    fontSize: 32,
                    p: 0,
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:active": {
                      boxShadow: "none",
                    },
                  }}
                  elevation={4}
                >
                  {item.icon}
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default App;
