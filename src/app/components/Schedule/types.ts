export type TSchedules = { start: Date; end: Date }[];

export interface IAvialableDayAPI {
  schedules: TSchedules;
}

export interface IAvialabilityAPI {
  monday: IAvialableDayAPI;

  tuesday: IAvialableDayAPI;

  wednesday: IAvialableDayAPI;

  thursday: IAvialableDayAPI;

  friday: IAvialableDayAPI;

  saturday: IAvialableDayAPI;

  sunday: IAvialableDayAPI;
}

export type TDaysKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface IAPPOnlyAvialbiltyProprties {
  rangeAdderVisible: boolean;
  newRangeOverlapsError?: string | boolean;
  updatingValue?: boolean;
}

export interface IAvialableDayAPP
  extends IAvialableDayAPI,
    IAPPOnlyAvialbiltyProprties {
  dayName: string;
}

export interface IAvialabilityAPP {
  monday: IAvialableDayAPP;

  tuesday: IAvialableDayAPP;

  wednesday: IAvialableDayAPP;

  thursday: IAvialableDayAPP;

  friday: IAvialableDayAPP;

  saturday: IAvialableDayAPP;

  sunday: IAvialableDayAPP;
}

export interface TeacherSchedulesState {
  avialabilitySchedule: IAvialabilityAPP;
}

export type ContainerState = TeacherSchedulesState;

export interface AvailabilityDialogProps {
  avialableDays: IAvialabilityAPP;
  setADaysAppOnlyProperties: (
    day: TDaysKey,
    property: IAPPOnlyAvialbiltyProprties,
  ) => void;
  setAvialabilityChanges: (
    dayKey: TDaysKey,
    newSchedules: IAvialabilityAPP,
  ) => void;
  open: boolean;
  onClose: () => void;
}

export interface RangePickersProps {
  addingARange?: boolean;
  addRange: (start: Date, end: Date) => void;
  newRangeOverlapsError?: boolean | string;
}

export interface RangesChipProps {
  start: Date;
  end: Date;
  dayIsUpdating: boolean;
  onDelete: () => void;
}
