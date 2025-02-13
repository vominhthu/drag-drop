import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Accordion from "../Accordion/Accordion";

export default function DetailAccordion() {
  return (
    <>
      <Accordion title="Detail">
        <TextField
          id="fileName"
          label="Name"
          variant="outlined"
          fullWidth
          size="small"
        />
        <FormControl>
          <FormLabel>Orientation</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="horizontal"
              control={<Radio />}
              label="Horizontal"
            />
            <FormControlLabel
              value="vertical"
              control={<Radio />}
              label="Vertical"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" size="small">
            Resolution
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Resolution"
            size="small"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-label" size="small">
            Grid
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">px</InputAdornment>}
            label="Grid"
            size="small"
          />
        </FormControl>
      </Accordion>
    </>
  );
}
