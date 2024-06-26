import { DatePicker, Select, Tag } from 'antd';
import moment from 'moment';
import React, { useCallback, useState } from 'react';

import './index.css';

const getTimestamp = (value: moment.Moment) => {
  if (moment.isMoment(value)) {
    return value.valueOf();
  }
  return value;
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
          {moment.isMoment(currentDate) ? currentDate.date() : currentDate}
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
      onClick={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      popupMatchSelectWidth={false}
      popupClassName={'multipleDropdownClassName'}
      dropdownStyle={{ height: '310px', width: '335px', minWidth: '0' }}
      dropdownRender={() => {
        return (
          <DatePicker
            disabledDate={(current) => {
              const date = new Date();

              return current.valueOf() <= date.setDate(date.getDate() - 1);
            }}
            showTime={{ format: 'HH' }}
            disabledTime={disableMinutes}
            onChange={(date: moment.Moment | null) => {
              if (date) {
                onValueChange(date);
              }
            }}
            open
            // TODO #1013 FIXme
            // @ts-ignore
            cellRender={dateRender}
            // @ts-ignore
            getPopupContainer={(node: HTMLElement) => node.parentNode}
            defaultValue={moment('00:00', 'HH')}
          />
        );
      }}
    />
  );
};
export default MultipleDatePicker;
