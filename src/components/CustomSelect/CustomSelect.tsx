import { FC } from 'react';
import { Select } from 'antd';
import { OptionFromSelct } from '../../types/types';

interface PropsCustomSelect {
  options: OptionFromSelct[];
}

const CustomSelect: FC<PropsCustomSelect> = ({ options }) => {
  return (
    <Select>
      {options.map(({ value, text }) => (
        <Select.Option key={value} value={value}>
          {text}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
