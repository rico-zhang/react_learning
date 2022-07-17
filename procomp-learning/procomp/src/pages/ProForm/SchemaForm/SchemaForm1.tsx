import type { ProFormColumnsType, ProFormLayoutType } from '@ant-design/pro-form';
import {
  BetaSchemaForm,
  ProFormSelect,
  ProFormText,
  ProForm,
  ProFormInstance,
  ProFormList,
  ProFormField,
  ProFormDateRangePicker,
  StepsForm,
} from '@ant-design/pro-form';
import { Alert, DatePicker, Space, Input, Form, FormInstance } from 'antd';
import moment from 'moment';
import React, { useState, useRef, PropsWithChildren } from 'react';

const valueEnum = {
  all: { text: '全部', status: 'Default' },
  open: { text: '未解决', status: 'Error' },
  closed: { text: '已解决', status: 'Success', disabled: true },
  processing: {
    text: '解决中',
    status: 'Processing',
  },
};
type DataItem = {
  name: string;
  state: string;
};
const Test = (props: PropsWithChildren<{}>) => {
  return <div>Test{props.children}</div>;
};
const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
    initialValue: '默认值',
    transform: (value) => {
      return {
        title: `${value}-转换`,
      };
    },
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'md',
    colProps: {
      xs: 12,
      md: 4,
    },
  },
  {
    valueType: 'switch',
    title: '开关',
    dataIndex: 'Switch',
    fieldProps: {
      style: {
        width: '200px',
      },
    },
    width: 'md',
    colProps: {
      xs: 12,
      md: 20,
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    initialValue: [moment().add(-1, 'm'), moment()],
    renderFormItem: (schema, config) => <ProFormDateRangePicker />,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
    // ignoreFormItem: true,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    initialValue: [moment().add(-1, 'm'), moment()],
    renderFormItem: () => <DatePicker.RangePicker />,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
  {
    title: '分组',
    valueType: 'group',
    columns: [
      {
        title: '状态',
        dataIndex: 'groupState',
        valueType: 'select',
        width: 'xs',
        colProps: {
          xs: 12,
        },
        valueEnum,
      },
      {
        title: '标题',
        width: 'md',
        dataIndex: 'groupTitle',
        colProps: {
          xs: 12,
        },
        formItemProps: {
          rules: [{ required: true, message: '此项为必填项' }],
        },
      },
    ],
  },
  {
    title: '列表',
    valueType: 'formList',
    dataIndex: 'list',
    initialValue: [{ state: 'all', title: '标题' }],
    colProps: { xs: 24, sm: 12 },
    columns: [
      {
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'state',
            valueType: 'select',
            colProps: {
              xs: 24,
              sm: 12,
            },
            width: 'xs',
            valueEnum,
          },
          {
            title: '标题',
            dataIndex: 'title',
            width: 'md',
            formItemProps: {
              rules: [{ required: true, message: '此项为必填项' }],
            },
            colProps: {
              xs: 24,
              sm: 12,
            },
          },
        ],
      },
      {
        valueType: 'dateTime',
        initialValue: new Date(),
        dataIndex: 'currentTime',
        width: 'md',
      },
    ],
  },
  {
    title: 'FormSet',
    valueType: 'formSet',
    dataIndex: 'formSet',
    colProps: {
      xs: 24,
      sm: 12,
    },
    rowProps: {
      gutter: [16, 0],
    },
    columns: [
      {
        title: '状态',
        dataIndex: 'groupState',
        valueType: 'select',
        width: 'md',
        valueEnum,
      },
      {
        width: 'xs',
        title: '标题',
        dataIndex: 'groupTitle',
        tooltip: '标题过长会自动收缩',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        },
      },
    ],
  },

  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    width: 'md',
    colProps: {
      span: 24,
    },
    transform: (value) => {
      return { startTime: value[0], endTime: value[1] };
    },
  },
];

function SchemaForm1() {
  const [layoutType, setLayoutType] = useState<ProFormLayoutType>('Form');
  const p = { children: 22 };
  const child = undefined;
  return (
    <>
      <Test {...p}>{child}</Test>
      <Space style={{ width: '100%', direction: 'ltr' }}>
        <Alert type="warning" message="QueryFilter 和 lightFilter 暂不支持grid模式" />
        <ProFormSelect
          label="布局方式"
          options={['Form', 'ModalForm', 'DrawerForm', 'LightFilter', 'QueryFilter', 'StepsForm', 'StepForm', 'Embed']}
          fieldProps={{
            value: layoutType,
            onChange: setLayoutType,
          }}
        />
      </Space>
      <BetaSchemaForm<DataItem>
        trigger={<a>点击我</a>}
        layoutType={layoutType}
        steps={[{ title: 'ProComponent' }]}
        rowProps={{ gutter: [16, 16] }}
        grid={layoutType !== 'LightFilter' && layoutType !== 'QueryFilter'}
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={(layoutType === 'StepsForm' ? [columns] : columns) as any}
      />
    </>
  );
}
SchemaForm1.menu = {
  name: '演示',
};

export default SchemaForm1;
