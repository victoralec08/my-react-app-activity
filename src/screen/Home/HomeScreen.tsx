import { Container, Box } from '@mui/material';
import Component1 from './component/component1';

const HomeScreen = () => (
  <Container maxWidth="xl">
    <Box className="component1Container">
      <Component1 />
    </Box>
  </Container>
);

export default HomeScreen;
