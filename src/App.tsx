import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import DetailAccordion from './components/Detail';
import AttributeAccordion from './components/Attribute';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid size={4}>
          <DetailAccordion />
        </Grid>
        <Grid size={4}>
          
        </Grid>
        <Grid size={4}>
          <AttributeAccordion />
        </Grid>
      </Grid>
    </Container>
  );
}
