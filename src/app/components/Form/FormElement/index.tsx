import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
const styles = createStyles({
  label: {
    textTransform: 'capitalize',
    fontWeight: 500,
  },
});
interface Props extends WithStyles<typeof styles> {
  label: string;
}
// 3375f883673b92e7f06f1643aab9cb3455c152a9eeb99102d5500f400f0f7415
const FormElement: React.FC<Props> = ({ classes, label, children }) => {
  return (
    <>
      <Typography
        className={classes.label}
        variant="subtitle1"
        component={'label'}
      >
        {label}
      </Typography>
      {children}
    </>
  );
};

export default withStyles(styles)(FormElement);
