import { Drawer } from 'antd';
import React from 'react';

import ProDescriptions from '@ant-design/pro-descriptions';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import { FormattedMessage } from 'umi';
import { TableColumns as UserTableColumns } from '@/pages/Users/index';
import { TableColumns as OrderTableColumns } from '@/pages/Orders/index';
import { TableColumns as CourseTableColumns } from '@/pages/Courses/index';
import { TableColumns as UserGroupTableColumns } from '@/pages/UserGroups/index';
import { TableColumns as QuestionnaireTableColumns } from '@/pages/Questionnaire/index';

type TypeDrawerProps = {
  visible: boolean;
  onClose: () => void;
  data: API.LinkedType;
};

export const TypeDrawer: React.FC<TypeDrawerProps> = ({ visible, data, onClose }) => {
  const descrProps = {
    column: 2,
    title: data.type.split('\\').pop(),
    request: async () => ({
      data: data.value || {},
    }),
    params: {
      id: data?.value?.id,
    },
  };
  return (
    <Drawer width={600} visible={visible} onClose={onClose} closable={false}>
      {(data.type === 'App\\Models\\User' || data.type === 'EscolaLms\\Core\\Models\\User') && (
        <ProDescriptions<API.UserItem>
          {...descrProps}
          title={<FormattedMessage id="user" />}
          columns={UserTableColumns as ProDescriptionsItemProps<API.UserItem>[]}
        />
      )}

      {data.type === 'EscolaLms\\Cart\\Models\\Order' && (
        <ProDescriptions<API.Order>
          {...descrProps}
          title={<FormattedMessage id="order" />}
          columns={OrderTableColumns as ProDescriptionsItemProps<API.Order>[]}
        />
      )}

      {data.type === 'EscolaLms\\Cart\\Models\\Course' && (
        <ProDescriptions<API.Course>
          {...descrProps}
          title={<FormattedMessage id="course" />}
          columns={CourseTableColumns as ProDescriptionsItemProps<API.Course>[]}
        />
      )}

      {data.type === 'EscolaLms\\Auth\\Models\\UserGroup' && (
        <ProDescriptions<API.Course>
          {...descrProps}
          title={<FormattedMessage id="user_group" />}
          columns={UserGroupTableColumns as ProDescriptionsItemProps<API.UserGroup>[]}
        />
      )}

      {data.type === 'Questionnaire' && (
        <ProDescriptions<API.Questionnaire>
          {...descrProps}
          title={<FormattedMessage id="questionnaire" />}
          columns={QuestionnaireTableColumns as ProDescriptionsItemProps<API.Questionnaire>[]}
        />
      )}
    </Drawer>
  );
};

export default TypeDrawer;
