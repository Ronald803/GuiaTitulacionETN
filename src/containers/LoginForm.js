import { Box, Typography, TextField, Button, Link } from "@mui/material/";
import { useState } from "react";

function LoginForm() {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const URI = 'https://api-guia-titulacion/';
  const handleSubmit = function () {
    console.log(email);
    postData(URI, { email: email, password: password}).then((data) => {
      console.log(data); 
    });
  };

  async function postData(url="", data = {}){
    const response = await fetch(url,{method: "POST", body: JSON.stringify(data)});
    return response.json();
  }

  return (
    <Box
      sx={{
        width: 450,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        required
        fullWidth
        id="email"
        label="Email"
        variant="outlined"
        size="small"
        value={email}
        onChange={(e) => {SetEmail(e.target.value)}}
      />
      <TextField
        required
        fullWidth
        id="password"
        label="Password"
        variant="outlined"
        size="small"
        type="password"
        value={password}
        onChange={(e) => {SetPassword(e.target.value)}}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button onClick={() => handleSubmit()} variant="contained" sx={{ textTransform: "none", width: 150 }}>
          Sign in
        </Button>
        <Typography variant="body2">
          No tienes una cuenta?{" "}
          <Link href="#" underline="hover">
            Registrate
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginForm;
