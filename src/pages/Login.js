import Box from '@mui/material/Box';
import LoginForm from '../containers/LoginForm'

function Login() {
  return (
    <Box sx={{display:'flex', justifyContent:'center', p:2, height:'80vh'}}>
      <LoginForm />
    </Box>
  )
}

export default Login