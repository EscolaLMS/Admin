import { permisions, setRolePermisions } from '@/services/escola-lms/roles';
import ProCard from '@ant-design/pro-card';
import ProForm from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Form, Row, Spin, Tooltip, message } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';

import { useCallback } from 'react';
import { FormattedMessage, useParams } from 'umi';

import './index.css';

import { getTranslationRetrieve } from '@/services/escola-lms/translations';
import CustomCheckbox, { CheckboxValueType } from './components/CustomCheckbox';

type CheckboxValueType = string | number | boolean;

export default () => {
  const params = useParams<{ name: string }>();
  const { name } = params;

  const [data, setData] = useState<Partial<API.Role[]>>([]);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [selectedPermisions, setSelectedPermisions] = useState<CheckboxValueType[]>([]);
  const [form] = Form.useForm();
  const initiallySelected = useRef<null | CheckboxValueType[]>(null);

  const fetchData = useCallback(async () => {
    if (name) {
      const response = await permisions(name);
      if (response.success) {
        const assignedItems = response.data
          .filter((item) => item.assigned)
          .map((item) => item.name);
        initiallySelected.current = assignedItems;
        setData(response.data);
        setSelectedPermisions(assignedItems);
      }
    }
  }, [name]);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const request = await getTranslationRetrieve('permissions');
        if (!request.success) {
          throw new Error('Failed to download translations of the permissions!');
        }
        const translationsObject = request.data.reduce(
          (acc, { key, value }) => ({
            ...acc,
            [key.split('.')[1]]: value,
          }),
          {},
        );
        setTranslations(translationsObject);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    fetchTranslations();
  }, [name, fetchData]);

  const formProps = useMemo(
    () => ({
      onFinish: async () => {
        if (!name) {
          return;
        }
        try {
          const request = await setRolePermisions(name, { permissions: [...selectedPermisions] });
          const response = await request;
          if (response.success) {
            message.success(response.message);
            initiallySelected.current = selectedPermisions;
          }
        } catch (error: any) {
          message.error(error.data.message);
        }
      },
      onReset: () => initiallySelected.current && setSelectedPermisions(initiallySelected.current),
      initialValues: data,
    }),
    [data, name, selectedPermisions],
  );

  const handleChange = useCallback(
    (toggledValue: CheckboxValueType) => {
      setSelectedPermisions((values) =>
        values.includes(toggledValue)
          ? values.filter((value) => value !== toggledValue)
          : [...values, toggledValue],
      );
    },
    [name],
  );

  const splittedData = data.reduce<Record<string, API.Role[]>>((acc, item) => {
    if (typeof item === 'undefined') return acc;
    acc[item.name.split('_')[0]] = [...(acc[item.name.split('_')[0]] ?? []), item];
    return acc;
  }, {});

  const renderData = Object.entries(splittedData).sort(
    ([, first], [, second]) => first.length - second.length,
  );

  if (!data.length) {
    return <Spin />;
  }

  return (
    <PageContainer title={<FormattedMessage id="permissions" />}>
      <ProCard>
        <ProForm {...formProps} form={form} className="permissions-form">
          {!!renderData.length &&
            renderData.map(([key, value]) => (
              <Card title={key} key={key} size="small" className="permissions-cart">
                {value.map((al) => (
                  <Tooltip key={al.id} title={translations[al.name]} placement="topLeft">
                    <Row>
                      <CustomCheckbox
                        nameKey={key}
                        name={al.name}
                        assigned={selectedPermisions.includes(al.name)}
                        onChange={handleChange}
                      />
                    </Row>
                  </Tooltip>
                ))}
              </Card>
            ))}
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
