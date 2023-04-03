import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  return (
    <Box sx={{ display:'flex', backgroundColor: 'primary.main', justifyContent:'center', alignItems:'center', p: 2}}>
      <Button onClick={() => navigate('/')} sx={{ textTransform: 'none', color:'primary.contrastText' }}>Home</Button>
    </Box>
  )
}

export default Header