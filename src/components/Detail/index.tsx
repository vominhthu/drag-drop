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
  const resolutions = [
    { id: 'low', label: "Low (800x600)", value: { width: 800, height: 600 } },
    { id: 'standard', label: "Standard (1280x720)", value: { width: 1280, height: 720 }, default: true },
    { id: 'hd', label: "HD (1920x1080)", value: { width: 1920, height: 1080 } },
    { id: '2k', label: "2K (2560x1440)", value: { width: 2560, height: 1440 } },
    { id: '4k', label: "4K (3840x2160)", value: { width: 3840, height: 2160 } },
  ];
  const defaultGridSize = 32;
  
    
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
            defaultValue={'standard'}
          >
            {
              resolutions.map(resolution => 
                <MenuItem key={resolution.id} value={resolution.id}>{resolution.label}</MenuItem>
              )
            }
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-label" size="small">
            Grid
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">px</InputAdornment>}
            value={defaultGridSize}
            label="Grid"
            size="small"
          />
        </FormControl>
      </Accordion>
    </>
  );
}
