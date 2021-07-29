import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import ScrollArea from 'react-scrollbar';

interface Props {
  handleClose: () => void;
  isOpen: boolean;
  title: string;
  subTitle?: string;
}
const CustomDialog: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={props.isOpen}
      onClose={props.handleClose}
    >
      <DialogTitle>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography
              color="textSecondary"
              variant="h5"
              children={props.title}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={props.handleClose}>
              <Close />
            </IconButton>
          </div>
        </div>
      </DialogTitle>
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
        <DialogContent>
          <DialogContentText>{props.subTitle}</DialogContentText>
          {children}
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
};
export default CustomDialog;
