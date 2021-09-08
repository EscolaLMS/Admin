import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import Divider from 'antd/lib/divider';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';
import { FormattedMessage } from 'umi';

export const SortingButtons = ({ mode = 'middle', onUp, onDown }) => {
  return (
    <React.Fragment>
      {mode !== 'first' && (
        <Tooltip title={<FormattedMessage id="sort_element_up" />}>
          <Button
            icon={<UpOutlined />}
            size="small"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onUp();
            }}
          />
        </Tooltip>
      )}
      {mode === 'middle' && <Divider type="vertical" />}
      {mode !== 'last' && (
        <Tooltip title={<FormattedMessage id="sort_element_down" />}>
          <Button
            icon={<DownOutlined />}
            size="small"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDown();
            }}
          />
        </Tooltip>
      )}
    </React.Fragment>
  );
};

export default SortingButtons;
