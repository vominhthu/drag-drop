import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import DetailAccordion from './components/Detail';
import AttributeAccordion from './components/Attribute';

export default function App() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid size={3}>
          <DetailAccordion />
        </Grid>
        <Grid size={6}>
          
        </Grid>
        <Grid size={3}>
          <AttributeAccordion />
        </Grid>
      </Grid>
    </Container>
  );
}
