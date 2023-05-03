import { Container, Box } from '@mui/material';
import Component1 from './component/component1';

const HomeScreen = () => (
  <Container maxWidth="lg">
    <Box className="component1Container">
      <Component1 />
    </Box>
  </Container>
);

export default HomeScreen;
