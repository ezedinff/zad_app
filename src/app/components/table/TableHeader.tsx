import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
type OpenModal = () => void;
interface Props {
  title: string;
  openDialog: OpenModal;
  hideCreate: boolean;
}
const TableHeader: React.FC<Props> = ({ title, openDialog, hideCreate }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          padding: '16px 24px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Typography color="textPrimary" variant="h5" children={title} />
        </div>
        {!hideCreate && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={() => openDialog()}
              size="medium"
              variant="contained"
              color="primary"
            >
              Create
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
export default TableHeader;
