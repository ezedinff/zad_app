import React, { useState } from 'react';
import {
  TextField,
  TextFieldProps,
  InputAdornment,
  IconButton,
  OutlinedTextFieldProps,
  WithStyles,
  Box,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import styles from '../TextInput/styles';
import { withStyles } from '@material-ui/styles';

interface Props
  extends Omit<Partial<OutlinedTextFieldProps>, 'classes'>,
    WithStyles<typeof styles> {
  label: string;
}
const PasswordInput: React.FC<Props> = React.memo(
  ({ classes, label, ...props }) => {
    type InputTypes = 'password' | 'text';

    const [type, setType] = useState<InputTypes>('password');

    const toogleInputType = () => {
      const changeTo = type === 'password' ? 'text' : 'password';
      setType(changeTo);
    };

    return (
      <Box className={classes.root}>
        <TextField
          className={classes.input}
          variant="outlined"
          size="small"
          placeholder={label}
          {...props}
          type={type}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="show password"
                  onClick={toogleInputType}
                >
                  {type === 'text' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    );
  },
);

export default withStyles(styles)(PasswordInput);
