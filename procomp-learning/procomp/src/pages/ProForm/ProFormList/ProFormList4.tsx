import React from 'react';
import { ProForm, ProFormGroup, ProFormList, ProFormText } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

function ProFormList4() {
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormText name="name" label="姓名" />
      <ProFormList
        name="users"
        label="用户信息"
        initialValue={[{ name: '1111' }]}
        itemRender={({ listDom, action }, { record }) => {
          return (
            <ProCard bordered extra={action} title={record?.name} style={{ marginBottom: 8 }}>
              {listDom}
            </ProCard>
          );
        }}
      >
        <ProFormGroup>
          <ProFormText name="name" label="姓名" />
          <ProFormText name="nickName" label="昵称" />
        </ProFormGroup>
        <ProFormList
          name="labels"
          label="用户信息"
          initialValue={[{ value: '333', label: '333' }]}
          copyIconProps={{ tooltipText: '复制此行到末尾' }}
          deleteIconProps={{ tooltipText: '不需要这样了' }}
        >
          <ProFormGroup key="group">
            <ProFormText name="value" label="值" />
            <ProFormText name="label" label="显示名称" />
          </ProFormGroup>
        </ProFormList>
      </ProFormList>
    </ProForm>
  );
}

ProFormList4.menu = {
  name: '嵌套ProFormList',
};

export default ProFormList4;
