import React from 'react';
import {
  Box,
  OutlinedTextFieldProps,
  TextField,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import styles from './styles';

export interface TextInputProps
  extends Omit<Partial<OutlinedTextFieldProps>, 'classes'>,
    WithStyles<typeof styles> {
  label: string;
  name: string;
  example?: string;
}
const TextInput: React.FC<TextInputProps> = React.memo(
  ({ example, classes, label, ...rest }) => {
    return (
      <Box className={classes.root}>
        <TextField
          className={classes.input}
          placeholder={example || label}
          variant="outlined"
          size="small"
          {...rest}
        />
      </Box>
    );
  },
);

export default withStyles(styles)(TextInput);
