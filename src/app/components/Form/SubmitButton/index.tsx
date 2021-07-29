import * as React from 'react';
import { ButtonProps, Button, withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props extends ButtonProps {
  title: string;
  loading: boolean;
}
const SubmitButton: React.FC<Props> = ({ title, loading, ...rest }) => {
  return (
    <Button disabled={loading} {...rest}>
      {title}
      {loading ? (
        <CircularProgress
          style={{ margin: '0 8px' }}
          color="primary"
          size={20}
        />
      ) : null}
    </Button>
  );
};
export default SubmitButton;
