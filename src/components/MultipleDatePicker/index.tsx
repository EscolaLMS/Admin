import React, { useState } from 'react';
import { Tag, DatePicker, Select } from 'antd';
import moment from 'moment';
import * as R from 'ramda';
import './index.css';

const getTimestamp = (value: moment.Moment) => {
  return value.valueOf();
};

const MultipleDatePicker: React.FC<{
  value?: number[];
  onChange?: any;
  format?: string;
  selectProps?: Record<string, any>;
}> = ({ value: selectedDate = [], onChange, format = 'DD-MM-YYYY HH:mm', selectProps = {} }) => {
  const [open, setOpen] = useState(false);

  const onValueChange = (date: moment.Moment) => {
    const t = getTimestamp(date);

    const index = selectedDate.indexOf(t);
    const clone = R.clone(selectedDate);
    if (index > -1) {
      clone.splice(index, 1);
    } else {
      clone.push(t);
    }

    onChange(clone);
  };

  const dateRender = (currentDate: moment.Moment) => {
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
  };

  const renderTag = ({ value, onClose }: { value: number; onClose: () => void }) => {
    const handleClose = () => {
      onClose();
      onChange(selectedDate.filter((t) => t !== value));
    };
    return (
      <Tag onClose={handleClose} closable>
        {moment(value).format(format)}
      </Tag>
    );
  };

  return (
    <Select
      allowClear
      {...selectProps}
      mode="multiple"
      value={selectedDate}
      onClear={() => onChange && onChange([])}
      tagRender={renderTag}
      open={open}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      dropdownMatchSelectWidth={false}
      dropdownClassName={'multipleDropdownClassName'}
      dropdownStyle={{ height: '310px', width: '450px', minWidth: '0' }}
      dropdownRender={() => {
        return (
          <DatePicker
            showTime
            onChange={(date: any) => onValueChange(date)}
            open
            dateRender={dateRender}
            style={{ visibility: 'hidden' }}
            getPopupContainer={({ parentNode }: any) => {
              return parentNode;
            }}
          />
        );
      }}
    />
  );
};
export default MultipleDatePicker;
