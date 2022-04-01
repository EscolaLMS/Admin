import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import {
  assignable as fetchGetAssignables,
  assigned as fetchGetAssigned,
  unassign as postUnassign,
  assign as postAssign,
} from '@/services/escola-lms/certificate';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';
import { message } from 'antd';

export const AssignTemplateSelect: React.FC<{
  state?: {
    type: number;
  };
  assignable_class: string;
  assignable_id: string | number;
  multiple?: boolean;
  onAssign?: (assignIds: number[]) => void;
  onUnassign?: (assignIds: number[]) => void;
  onChange?: (value: string | string[] | number | number[]) => void;
}> = ({ onChange, multiple = false, assignable_class, assignable_id, onAssign, onUnassign }) => {
  const [templates, setTemplates] = useState<API.Certificate[]>([]);
  const [currentTemplates, setCurrentTemplates] = useState<number[]>([]);

  const [fetching, setFetching] = useState(false);

  const abortController = useRef<AbortController>();

  const setTemplatesFromResponse = useCallback((responseTemplates: API.Certificate[]) => {
    setTemplates(responseTemplates);
  }, []);

  const fetchAssiged = useCallback(() => {
    fetchGetAssigned({
      assignable_class,
      assignable_id: Number(assignable_id),
    }).then((response) => {
      if (response.success) {
        setCurrentTemplates(response.data.map((item) => item.id));
      }
    });
  }, [assignable_class, assignable_id]);

  const fetchAssignales = useCallback(() => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchGetAssignables(
      {
        assignable_class,
      },
      { signal: abortController.current.signal },
    )
      .then((response) => {
        if (response && response.success) {
          setTemplatesFromResponse(response.data);
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));

    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, [assignable_class, assignable_id]);

  const removeIdFromCurrentTemplates = useCallback((id: number) => {
    setCurrentTemplates((prevTemplates) => prevTemplates.filter((item) => item != id));
  }, []);

  const addIdFromCurrentTemplates = useCallback((id: number) => {
    setCurrentTemplates((prevTemplates) =>
      prevTemplates.includes(id) ? prevTemplates : [...prevTemplates, id],
    );
  }, []);

  const handleChange = useCallback(
    (value: number | number[]) => {
      const values = Array.isArray(value) ? value : [value];
      const valuesToAssign = values.filter((item) => !currentTemplates.includes(item));
      const valuesToUnassign = currentTemplates.filter((item) => !values.includes(item));

      if (onChange) {
        onChange(value);
      }

      valuesToAssign.forEach((item) => {
        postAssign(item, {
          assignable_id: Number(assignable_id),
        })
          .then((response) => {
            if (response.success) {
              message.success(response.message);
              // TODO: there can be only one chanel:event assign to model, so if event for this channel is in currentTemplates it replace it so should be removed from list
            }
            if (!response.success) {
              message.error(response.message);
              removeIdFromCurrentTemplates(item);
            }
          })
          .catch((err) => {
            message.error(err.toString());
            removeIdFromCurrentTemplates(item);
          });
      });

      valuesToUnassign.forEach((item) => {
        postUnassign(item, {
          assignable_id: Number(assignable_id),
        })
          .then((response) => {
            if (response.success) {
              message.success(response.message);
            }
            if (!response.success) {
              message.error(response.message);
              addIdFromCurrentTemplates(item);
            }
          })
          .catch((err) => {
            message.error(err.toString());
            addIdFromCurrentTemplates(item);
          });
      });

      if (valuesToAssign.length != 0 && onAssign) {
        onAssign(valuesToAssign);
      }
      if (valuesToUnassign.length != 0 && onUnassign) {
        onUnassign(valuesToUnassign);
      }

      setCurrentTemplates(values);
    },
    [currentTemplates, assignable_id, onChange, onAssign, onUnassign],
  );

  useEffect(() => {
    fetchAssignales();
    fetchAssiged();
  }, [assignable_class, assignable_id]);

  return (
    <Select
      style={{ width: '100%' }}
      value={currentTemplates}
      onChange={handleChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      placeholder={<FormattedMessage id="select_templates" defaultMessage="Select a templates" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return true;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {templates.map((template) => (
        <Select.Option key={template.id} value={template.id}>
          {template.name}{' '}
          <small>
            <FormattedMessage id={template.channel.split('\\').pop()} />:
            <FormattedMessage id={template.event.split('\\').pop()} />
          </small>{' '}
        </Select.Option>
      ))}
    </Select>
  );
};

export default AssignTemplateSelect;
