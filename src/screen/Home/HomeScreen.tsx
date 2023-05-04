import { Container, Box } from '@mui/material';
import Component1 from './component/component1';
import Component2 from './component/component2';

const HomeScreen = () => (
  <Container maxWidth="xl">
    <Box className="index-containter">
      <Component1 />
      <Component2 />
    </Box>
  </Container>
);

export default HomeScreen;
