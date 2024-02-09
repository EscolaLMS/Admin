import { DatePicker, Select, Tag } from 'antd';
import moment from 'moment';
import React, { useCallback, useState } from 'react';

import './index.css';

const getTimestamp = (value: moment.Moment) => {
  return value.local().valueOf();
};

const MultipleDatePicker: React.FC<{
  value?: number[];
  onChange?: any;
  format?: string;
  selectProps?: Record<string, any>;
}> = ({ value: selectedDate = [], onChange, format = 'DD-MM-YYYY HH:mm', selectProps = {} }) => {
  const [open, setOpen] = useState(false);

  const onValueChange = useCallback(
    (date: moment.Moment) => {
      const t = getTimestamp(date);

      const index = selectedDate.indexOf(t);
      const clone = [...selectedDate];

      if (index > -1) {
        clone.splice(index, 1);
      } else {
        clone.push(t);
      }

      onChange(clone);
    },
    [selectedDate],
  );

  const dateRender = useCallback(
    (currentDate: moment.Moment) => {
      const isSelected = selectedDate.indexOf(getTimestamp(currentDate)) > -1;

      return (
        <div
          className={'ant-picker-cell-inner'}
          style={
            isSelected
              ? {
                  position: 'relative',
                  zIndex: 2,
                  display: 'inlineBlock',
                  width: '24px',
                  height: '22px',
                  lineHeight: '22px',
                  backgroundColor: '#1890ff',
                  color: '#fff',
                  margin: 'auto',
                  borderRadius: '2px',
                  transition: 'background 0.3s, border 0.3s',
                }
              : {}
          }
        >
          {currentDate.date()}
        </div>
      );
    },
    [selectedDate],
  );

  const renderTag = useCallback(
    ({ value, onClose }: { value: number; onClose: () => void }) => {
      const handleClose = () => {
        onClose();

        onChange(selectedDate.filter((t) => t !== value));
      };
      return (
        <Tag onClose={handleClose} closable>
          {moment(value).format(format)}
        </Tag>
      );
    },
    [selectedDate],
  );
  const disableMinutes = () => {
    return {
      disabledMinutes: () => Array.from({ length: 59 }, (_, i) => i + 1),
    };
  };

  return (
    <Select
      {...selectProps}
      allowClear
      mode="multiple"
      value={selectedDate}
      onClear={() => onChange && onChange([])}
      tagRender={renderTag}
      open={open}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      dropdownMatchSelectWidth={false}
      dropdownClassName={'multipleDropdownClassName'}
      dropdownStyle={{ height: '310px', width: '335px', minWidth: '0' }}
      dropdownRender={() => {
        return (
          <DatePicker
            disabledDate={(current: moment.Moment) => {
              const date = new Date();

              return current && current.valueOf() <= date.setDate(date.getDate() - 1);
            }}
            showTime={{ format: 'HH' }}
            disabledTime={disableMinutes}
            onChange={(date: moment.Moment | null) => date && onValueChange(date)}
            open
            dateRender={dateRender}
            style={{ visibility: 'hidden' }}
            getPopupContainer={({ parentNode }: any) => {
              return parentNode;
            }}
            defaultValue={moment('00:00', 'HH')}
          />
        );
      }}
    />
  );
};
export default MultipleDatePicker;
