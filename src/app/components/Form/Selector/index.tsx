import React, { useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  withStyles,
  OutlinedTextFieldProps,
} from '@material-ui/core';
import { SelectOption } from '../types';
import { useEffect } from 'react';
import TextInput, { TextInputProps } from '../TextInput';
import api from 'api/useFetch';
interface Props extends Partial<OutlinedTextFieldProps> {
  label: string;
  name: string;
  example?: string;
  from: 'array' | 'remote';
  options?: SelectOption[];
  url?: string;
}
const Selector: React.FC<Props> = ({ from, url, ...rest }) => {
  const [options, setOptions] = useState<Array<SelectOption>>([]);
  useEffect(() => {
    if (from === 'remote') {
      api({
        url: url || '',
        method: 'GET',
      })
      .then((response) =>  {
        setOptions(response.data.map((d) => ({label: d.name, value: d._id})))
      })
      .catch((err) => console.log(err));
    } else {
      setOptions(rest.options || [])
    }
  }, []);
  return (
    <TextInput select {...rest}>
      <MenuItem value={''} key="" disabled>
        <em>None</em>
      </MenuItem>
      {options
        ? options.map((opt: any) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))
        : null}
    </TextInput>
  );
};

export default React.memo(Selector);
