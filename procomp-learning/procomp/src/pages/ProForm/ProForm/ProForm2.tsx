import React, { useRef } from 'react';
import { message, TreeSelect } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ProFormCascader, ProFormDependency } from '@ant-design/pro-form';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormMoney,
  ProFormDigit,
  ProFormTreeSelect,
} from '@ant-design/pro-form';
import { Form } from 'antd';

//1 1 2 3 5 8 13 21 34 55
//0 1 2 3 4 5 6  7  8  9
function step1(n: number): number {
  if (n == 0 || n == 1) return 1;
  return step1(n - 1) + step1(n - 2);
}

function step2(n: number): number {
  let arr: number[] = [];
  let value: number = 0;
  function _step(n: number) {
    if (n == 0 || n == 1) return 1;
    value = (arr[n - 1] || _step(n - 1)) + (arr[n - 2] || _step(n - 2));
    arr[n] = value;
    return value;
  }
  return _step(n);
}
function step3(n: number): number {
  let arr: number[] = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
window.test = step3;

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const ProForm2 = () => {
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();

  const [form] = Form.useForm<{
    name: string;
    company?: string;
    useMode?: string;
  }>();

  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        const val1 = await formRef.current?.validateFields();
        console.log('validateFields:', val1);
        const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
        console.log('validateFieldsReturnFormatValue:', val2);
        const val3 = await form.getFieldsValue();
        console.log('getFieldsValue:', val3);
        message.success('????????????');
      }}
      formRef={formRef}
      form={form}
      params={{ id: '100' }}
      formKey="base-form-use-demo"
      dateFormatter={(value, valueType) => {
        console.log('---->', value, valueType);
        return value.format('YYYY/MM/DD HH:mm:ss');
      }}
      request={async () => {
        await waitTime(100);
        return {
          name: '????????????????????????',
          useMode: 'chapter',
        };
      }}
      autoFocusFirstInput
      // layout="horizontal"
      // grid ={true}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          required
          addonBefore={<a>?????????????????????????????????</a>}
          addonAfter={<a>??????????????????</a>}
          label="??????????????????"
          tooltip="????????? 24 ???"
          placeholder="???????????????"
          rules={[{ required: true, message: '???????????????' }]}
        />
        <ProFormText width="md" name="company" label="??????????????????" placeholder="???????????????" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit name="count" label="??????" width="lg" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText name={['contract', 'name']} width="md" label="????????????" placeholder="???????????????" />
        <ProFormDateRangePicker width="md" name={['contract', 'createTime']} label="??????????????????" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: '???????????????',
            },
          ]}
          readonly
          width="xs"
          cacheForSwr
          name="useMode"
          label="????????????????????????"
        />
        <ProFormSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: '???????????????',
            },
          ]}
          name="unusedMode"
          label="????????????????????????"
        />
        <ProFormMoney
          width="md"
          name="money"
          label="??????????????????"
          fieldProps={{
            numberPopoverRender: true,
          }}
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="???????????????" />
      <ProFormText name="project" width="md" disabled label="????????????" initialValue="xxxx??????" />
      <ProFormText width="xs" name="mangerName" disabled label="????????????" initialValue="??????" />
      <ProFormCascader
        width="md"
        request={async () => [
          {
            value: 'zhejiang',
            label: '??????',
            children: [
              {
                value: 'hangzhou',
                label: '??????',
                children: [
                  {
                    value: 'xihu',
                    label: '??????',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ]}
        name="areaList"
        label="??????"
        initialValue={['zhejiang', 'hangzhou', 'xihu']}
      />
      <ProFormTreeSelect
        initialValue={['0-0-0']}
        label="?????????????????????"
        width={600}
        request={async () => treeData}
        fieldProps={{
          fieldNames: {
            label: 'title',
          },
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: 'Please select',
        }}
      />
    </ProForm>
  );
};

ProForm2.menu = {
  name: '????????????',
};

export default ProForm2;
