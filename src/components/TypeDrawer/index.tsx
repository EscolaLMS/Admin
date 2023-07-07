import { Drawer, List, Typography } from 'antd';
import React from 'react';

import ProDescriptions from '@ant-design/pro-descriptions';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import { FormattedMessage } from 'umi';
import { TableColumns as UserTableColumns } from '@/pages/Users/index';
import { TableColumns as OrderTableColumns } from '@/pages/Orders/index';
import { TableColumns as CourseTableColumns } from '@/pages/Courses/index';
import { TableColumns as UserGroupTableColumns } from '@/pages/UserGroups/index';
import { TableColumns as QuestionnaireTableColumns } from '@/pages/Questionnaire/index';
import { TableColumns as ConsultationsTableColumns } from '@/pages/Consultations/index';
import { TableColumns as WebinarsTableColumns } from '@/pages/Webinars/index';
import { TableColumns as StationaryEventsColumns } from '@/pages/StationaryEvents/index';
import { TableColumns as ProductTableColumns } from '@/pages/Products/index';
import { StudentsTableColumns } from '@/pages/TeacherSubjects/components/Groups';
import { GiftQuizTableColumns } from '@/pages/QuizReports';
import { staticColumns as CategoryTableColumns } from '@/pages/Categories';

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
    <Drawer width={600} open={visible} onClose={onClose} closable={true}>
      {(data.type === 'App\\Models\\User' || data.type === 'EscolaLms\\Core\\Models\\User') && (
        <ProDescriptions<API.UserItem>
          {...descrProps}
          title={<FormattedMessage id="user" />}
          columns={UserTableColumns as ProDescriptionsItemProps<API.UserItem>[]}
        />
      )}

      {(data.type === 'App\\Models\\Consultation' ||
        data.type === 'EscolaLms\\Consultations\\Models\\Consultation') && (
        <ProDescriptions<API.Consultation>
          {...descrProps}
          title={<FormattedMessage id="Consultation" />}
          columns={ConsultationsTableColumns as ProDescriptionsItemProps<API.Consultation>[]}
        />
      )}

      {(data.type === 'App\\Models\\StationaryEvent' ||
        data.type === 'EscolaLms\\StationaryEvents\\Models\\StationaryEvent') && (
        <ProDescriptions<EscolaLms.StationaryEvents.Models.StationaryEvent>
          {...descrProps}
          title={<FormattedMessage id="StationaryEvent" />}
          columns={
            StationaryEventsColumns as ProDescriptionsItemProps<EscolaLms.StationaryEvents.Models.StationaryEvent>[]
          }
        />
      )}

      {(data.type === 'App\\Models\\Webinar' ||
        data.type === 'EscolaLms\\Webinars\\Models\\Webinar') && (
        <ProDescriptions<API.Webinar>
          {...descrProps}
          title={<FormattedMessage id="Webinar" />}
          columns={WebinarsTableColumns as ProDescriptionsItemProps<API.Webinar>[]}
        />
      )}

      {(data.type === 'EscolaLms\\Cart\\Models\\Order' ||
        data.type === 'EscolaLms\\Vouchers\\Models\\Order') && (
        <ProDescriptions<API.Order>
          {...descrProps}
          title={<FormattedMessage id="order" />}
          columns={OrderTableColumns as ProDescriptionsItemProps<API.Order>[]}
        />
      )}

      {(data.type === 'EscolaLms\\Cart\\Models\\Course' || data.type === 'App\\Models\\Course') && (
        <ProDescriptions<API.Course>
          {...descrProps}
          title={<FormattedMessage id="course" />}
          columns={CourseTableColumns as ProDescriptionsItemProps<API.Course>[]}
        />
      )}

      {data.type === 'EscolaLms\\Auth\\Models\\UserGroup' && (
        <ProDescriptions<API.UserGroup>
          {...descrProps}
          title={<FormattedMessage id="user_group" />}
          columns={UserGroupTableColumns as ProDescriptionsItemProps<API.UserGroup>[]}
        />
      )}

      {data.type === 'Product' && (
        <ProDescriptions<EscolaLms.Cart.Models.Product>
          {...descrProps}
          title={<FormattedMessage id="product" />}
          columns={ProductTableColumns as ProDescriptionsItemProps<EscolaLms.Cart.Models.Product>[]}
        />
      )}

      {data.type === 'Students' && (
        <ProDescriptions<API.StudentUserGroup>
          {...descrProps}
          title={<FormattedMessage id="studentsList" />}
          columns={StudentsTableColumns as ProDescriptionsItemProps<API.StudentUserGroup>[]}
        />
      )}

      {data.type === 'EscolaLms\\TopicTypeGift\\Models\\GiftQuiz' && (
        <ProDescriptions<API.GiftQuiz>
          {...descrProps}
          title={<FormattedMessage id="gift_quiz" defaultMessage="GIFT Quiz" />}
          columns={GiftQuizTableColumns as ProDescriptionsItemProps<API.GiftQuiz>[]}
        />
      )}

      {data.type === 'Questionnaire' && (
        <ProDescriptions<API.Questionnaire>
          {...descrProps}
          title={<FormattedMessage id="questionnaire" />}
          columns={
            [
              ...QuestionnaireTableColumns,
              {
                title: <FormattedMessage id="question_list" defaultMessage="question_list" />,
                dataIndex: 'questions',
                hideInSearch: true,
                width: '100%',
                render: (_, record) => {
                  return (
                    <List
                      grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                      }}
                      dataSource={record.questions as EscolaLms.Questionnaire.Models.Question[]}
                      renderItem={(item) => (
                        <List.Item>
                          <Typography.Text mark>{item.id}</Typography.Text>{' '}
                          <Typography.Text>{item.title}</Typography.Text>
                          <Typography.Text> {item.description}</Typography.Text>
                        </List.Item>
                      )}
                    />
                  );
                },
              },
            ] as ProDescriptionsItemProps<API.Questionnaire>[]
          }
        />
      )}
      {data.type === 'Category' && (
        <ProDescriptions<API.Category>
          {...descrProps}
          title={<FormattedMessage id="category" defaultMessage="Category" />}
          columns={CategoryTableColumns as ProDescriptionsItemProps<API.Category>[]}
        />
      )}
    </Drawer>
  );
};

export default TypeDrawer;
