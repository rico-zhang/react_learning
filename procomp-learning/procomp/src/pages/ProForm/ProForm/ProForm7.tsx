import React, { useState, useRef } from 'react';
import { Input, message, Form, Button } from 'antd';
import ProForm, { ProFormText, ProFormDatePicker } from '@ant-design/pro-form';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import type { ProFormInstance } from '@ant-design/pro-form';

const waitTime = (time: number) => {
  return new Promise((resove) => {
    setTimeout(() => {
      resove(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title?: string;
  desc?: string;
  state?: string;
  created_at?: string;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 276354,
    title: '活动名称一',
    desc: '这个活动真好玩',
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '活动名称二',
    desc: '这个活动真好玩',
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
  },
];

const colums: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
    width: '30%',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      },
    },
  },
  {
    title: '描述',
    dataIndex: 'desc',
    renderFormItem: (_, { record }) => {
      return <Input addonBefore={(record as any)?.addonBefore} />;
    },
  },
  {
    title: '操作',
    valueType: 'option',
  },
];

function ProForm7() {
  const [editableKeys, setEditableKeys] = useState<React.Key[]>(() => defaultData.map((item) => item.id));
  const formRef = useRef<ProFormInstance>();
  const [form] = Form.useForm();
  return (
    <ProForm<{
      name?: string;
      company?: string;
    }>
      formRef={formRef}
      form={form}
      onFinish={async (values) => {
        await waitTime(1000);
        console.log(values);
        message.success('提交成功');
      }}
      initialValues={{
        name: '蚂蚁设计有限公司',
        useMode: 'chapter',
      }}
      onReset={(e) => {
        console.log('onReset', e);
      }}
      submitter={{
        onReset: (e) => {
          console.log('onReset2', e);
        },
        onSubmit: async (values) => {
          await waitTime(1000);
          console.log(values);
          message.success('提交成功2');
        },
        searchConfig: {
          resetText: 'reset',
          submitText: 'sure',
        },
        submitButtonProps: {
          type: 'link',
        },
        resetButtonProps: {
          type: 'dashed',
        },
        render(_, dom) {
          return [<Button key={'12'}>测试</Button>, ...dom];
        },
      }}
      // dateFormatter="string"
      params={{ id: 1 }}
      request={async (params) => {
        await waitTime(1000);
        return {
          company: '我方公司',
        };
      }}
      isKeyPressSubmit={false}
    >
      <ProForm.Group>
        <ProFormText width="md" name="name" label="签约客户名称" tooltip="最长24位" placeholder="请输入名称" />
        <ProFormText width="md" name="company" label="我方公司名称" tooltip="最长24位" placeholder="请输入名称" />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号" />
      <ProFormDatePicker width="md" name="expirationTime" label="合同失效时间" />
      <ProFormDatePicker.Month width="md" name="expirationTime2" label="合同失效时间" dataFormat="time" />
      <ProForm.Item label="数组数据" name="dataSource" initialValue={defaultData} trigger="onValuesChange">
        <EditableProTable<DataSourceType>
          rowKey="id"
          toolBarRender={false}
          columns={colums}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            position: 'top',
            record: () => ({ id: Date.now(), addonBefore: 'ccccc', desc: 'testdesc' }),
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableKeys,
            actionRender: (row, _, dom) => {
              return [dom.delete];
            },
          }}
        />
      </ProForm.Item>
    </ProForm>
  );
}

ProForm7.menu = {
  name: 'API测试',
};

export default ProForm7;
