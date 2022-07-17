import React, { useRef } from 'react';
import ProForm, { ProFormFieldSet, ProFormText } from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';

function ProFormSet() {
  const formReef = useRef<ProFormInstance>();

  return (
    <ProForm
      onFinish={async (value) => {
        console.log(value);
        console.log(formReef.current?.getFieldsValue());
        console.log(formReef.current?.getFieldFormatValue?.());
      }}
      formRef={formReef}
    >
      <ProFormFieldSet
        name="list"
        label="组件列表"
        type="group"
        transform={(value: any) => {
          return { startTime: value[0], endTime: value[1] };
        }}
      >
        <ProFormText width="md" />
        <ProFormText width="md" />
        <ProFormText width="md" />
      </ProFormFieldSet>
    </ProForm>
  );
}

ProFormSet.menu = {
  name: 'FormSet',
};

export default ProFormSet;
