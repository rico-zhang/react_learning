import React from 'react';
import {
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-form';

const QueryFilter1 = () => {
  return (
    <QueryFilter<{
      name: string;
      company: string;
    }>
      onFinish={async (values) => {
        console.log(values);
      }}
      defaultCollapsed={false}
      split
      requiredMark={true}
      labelWidth={100}
      showHiddenNum
      optionRender={(searchConfig, props, dom) => [<a key="clear">清空</a>, ...dom]}
      preserve={true}
      // layout="vertical"
    >
      <ProFormText name="name" label="应用名称" rules={[{ required: true }]} />
      <ProFormText name="creater" label="创建人" />
      <ProFormSelect
        name="sex"
        label="性别"
        showSearch
        valueEnum={{
          man: '男',
          woman: '女',
        }}
      />
      <ProFormText name="status" label="应用状态" />
      <ProFormDatePicker name="startdate" label="响应日期" />
      <ProFormDateRangePicker name="create" label="创建时间" colSize={2} />
    </QueryFilter>
  );
};
QueryFilter1.menu = {
  name: '演示',
};

export default QueryFilter1;
