import React from 'react';
import { Form, message } from 'antd';
import ProForm, { ProFormText, ProFormSelect, ProFormDependency } from '@ant-design/pro-form';

const waiteTime = (timer: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timer);
  });
};

function ProForm3() {
  return (
    <ProForm
      onFinish={async (values) => {
        await waiteTime(1000);
        console.log(values);
        message.success('提交成功');
      }}
      initialValues={{
        name: '蚂蚁设计有限公司',
        name2: '蚂蚁设计集团',
        useMode: 'chapter',
      }}
    >
      <ProFormText width="md" name="name" label="签约客户名称" tooltip="最长24位" placeholder="请输入名称" />
      <ProFormText
        width="md"
        name={['name2', 'text']}
        label="签约客户名称"
        tooltip="最长24位"
        placeholder="请输入名称"
      />
      {/*  ProFormDependency 会自动注入并且 进行 shouldUpdate 的比对  */}
      <ProFormDependency name={['name', ['name2', 'text']]}>
        {({ name, name2 }) => {
          return (
            <ProFormSelect
              options={[{ value: 'chapter', label: '盖章后生效' }]}
              width="md"
              name="useMode"
              label={`与《${name || ''}》 与《${name2?.text || ''}》 合同约定生效方式`}
            />
          );
        }}
      </ProFormDependency>
      {/* noStyle shouldUpdate 是必选的，写了 name 就会失效 */}
      <Form.Item noStyle shouldUpdate>
        {(form) => {
          return (
            <ProFormSelect
              options={[{ value: 'chapter', label: '盖章后生效' }]}
              width="md"
              name="useMode"
              label={`与《${form.getFieldValue('name') || ''}》 与《${
                form.getFieldValue('name2')?.text || ''
              }》 合同约定生效方式`}
            />
          );
        }}
      </Form.Item>
    </ProForm>
  );
}

ProForm3.menu = {
  name: '表单联动',
};
export default ProForm3;
