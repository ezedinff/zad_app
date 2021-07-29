import React, { CSSProperties, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  ViewSwitcher,
  Toolbar,
  WeekView,
  MonthView,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Fab, useTheme } from '@material-ui/core';
import { tasks } from './examples';
import { EventAvailable } from '@material-ui/icons';
import {
  apiAvialabilityToAppAvalability,
  generateAppReadyAvialablility,
} from './util';
import {
  IAPPOnlyAvialbiltyProprties,
  IAvialabilityAPP,
  TDaysKey,
} from './types';
import AvailabilityDialog from './AvailablityDialog';

interface Props {}
// 2020-12-04
const temp = new Date();
const currentDate = `${temp.getFullYear()}-${
  temp.getMonth() + 1 < 10 ? `0${temp.getMonth() + 1}` : temp.getMonth() + 1
}-${temp.getDate() < 10 ? `0${temp.getDate()}` : temp.getDate()}`;

export function VetSchedules(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = useTheme();

  const [openAvailabilityDialog, setOpenAvailabilityDialog] = useState(false);

  const toogleAvailabilityDialog = () =>
    setOpenAvailabilityDialog(!openAvailabilityDialog);

  interface APCProps extends Appointments.AppointmentProps {
    style?: CSSProperties;
  }

  const initialAvialabilitySchedules: IAvialabilityAPP = {
    monday: generateAppReadyAvialablility('monday', []),
    tuesday: generateAppReadyAvialablility('tuesday', []),
    wednesday: generateAppReadyAvialablility('wednesday', []),
    thursday: generateAppReadyAvialablility('thursday', []),
    friday: generateAppReadyAvialablility('friday', []),
    saturday: generateAppReadyAvialablility('saturday', []),
    sunday: generateAppReadyAvialablility('sunday', []),
  };

  const AppointmentComponent = ({
    children,
    style,
    ...restProps
  }: APCProps) => (
    <Appointments.Appointment
      {...restProps}
      style={{ ...style, backgroundColor: theme.palette.primary.light }}
    >
      {children}
    </Appointments.Appointment>
  );
  const setAvialabilityChanges = (
    dayKey: TDaysKey,
    newSchedules: IAvialabilityAPP,
  ) => {
    // dispatch(
    //   actions.updateAvialabilityChanges({
    //     day: dayKey,
    //     newAvailabilitySchedules: newSchedules,
    //   }),
    // );
  };
  const setADaysAppOnlyProperties = (
    day: TDaysKey,
    properties: IAPPOnlyAvialbiltyProprties,
  ) => {
    // dispatch(
    //   actions.setADaysExtraProperties({
    //     day,
    //     properties,
    //   }),
    // );
  };

  return (
    <>
      <Div>
        <Scheduler data={tasks}>
          <ViewState
            defaultCurrentViewName="daily"
            defaultCurrentDate={currentDate}
          />
          <MonthView name="monthly" />
          <WeekView name="weekly" />
          <DayView name="daily" startDayHour={3} endDayHour={14} />
          <Toolbar />

          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments appointmentComponent={AppointmentComponent} />
          <AppointmentTooltip showCloseButton showOpenButton />
        </Scheduler>

        <AvailabilityDialog
          open={openAvailabilityDialog}
          onClose={toogleAvailabilityDialog}
          avialableDays={initialAvialabilitySchedules}
          setADaysAppOnlyProperties={setADaysAppOnlyProperties}
          setAvialabilityChanges={setAvialabilityChanges}
        />

        <Fab
          style={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            zIndex: 10,
          }}
          color="primary"
          title="Schedule Settings"
          onClick={toogleAvailabilityDialog}
          // variant="extended"
        >
          <EventAvailable />
          {/* Availability */}
          {/* {props.savingProfile && (
            <CircularProgress
              size={68}
              style={{ position: 'absolute', top: -6, left: -6, zIndex: 1 }}
            />
          )} */}
        </Fab>
      </Div>
    </>
  );
}

const Div = styled.div``;
