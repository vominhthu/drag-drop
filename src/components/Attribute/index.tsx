import { Button, FormGroup, InputLabel } from "@mui/material";
import Accordion from "../Accordion/Accordion";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField, Typography, Grid2 as Grid, Box } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const componentTypes = [
  {
    id: 'userMessage',
    displayName: 'User Messages'
  },
  {
    id: 'light',
    displayName: 'Light'
  }
];

export default function AttributeAccordion() {
  const selectedObject: any = useSelector((state: RootState) => state.canvas.selectedObject || {})
  const { left: positionX = '', top: positionY = '', width = '', height = '', scaleX = '', scaleY = '' } = selectedObject
  return (
    <>
      <div className="attributes-container" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Accordion title="Area 1">
          {/** Position */}
          <Typography variant="subtitle1">Position</Typography>
          <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
            <Grid item xs={6}>
              <FormGroup row sx={{ flexWrap: "nowrap", gap: "10px", alignItems: "center" }}>
                <Typography>X</Typography>
                <TextField
                  name="positionX"
                  variant="outlined"
                  size="small"
                  value={positionX}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup row sx={{ flexWrap: "nowrap", gap: "10px", alignItems: "center" }}>
                <Typography>Y</Typography>
                <TextField
                  name="positionY"
                  variant="outlined"
                  size="small"
                  value={positionY}
                />
              </FormGroup>
            </Grid>
          </Grid>
           {/** Size */}
          <Typography variant="subtitle1">Size</Typography>
          <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
            <Grid item xs={6}>
              <FormGroup row sx={{ flexWrap: "nowrap", gap: "10px", alignItems: "center" }}>
                <Typography>Width</Typography>
                <TextField
                  name="sizeWidth"
                  variant="outlined"
                  size="small"
                  value={width * scaleX}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup row sx={{ flexWrap: "nowrap", gap: "10px", alignItems: "center" }}>
                <Typography>Height</Typography>
                <TextField
                  name="sizeHeight"
                  variant="outlined"
                  size="small"
                  value={height * scaleY}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Autocomplete
            multiple
            options={componentTypes}
            getOptionLabel={(option) => option.displayName}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Component Type"
                placeholder="Type"
              />
            )}
          />
        </Accordion>
      </div>
    </>
  );
}
