import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '&>*': {
        minWidth: '100%',
      },
    },
    label: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
    },
    input: {
      backgroundColor: theme.palette.grey[200],
      '&>div>input::placeholder': {
        color: theme.palette.grey[700],
        opacity: '1',
      },
      '&>.MuiFormHelperText-root': {
        backgroundColor: 'white',
        width: '100%',
        position: 'relative',
        left: '-14px',
        paddingLeft: '14px',
      },
    },
  });

export default styles;
