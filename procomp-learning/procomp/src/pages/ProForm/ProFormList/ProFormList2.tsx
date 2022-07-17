import React from 'react';
import ProForm, { ProFormList, ProFormSelect } from '@ant-design/pro-form';
import { Card } from 'antd';
function ProFormList2() {
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormList
        name="users"
        initialValue={[
          {
            useMode: 'chapter',
          },
        ]}
        creatorButtonProps={{
          position: 'top',
          creatorButtonText: '在建一行',
        }}
        creatorRecord={{
          useMode: 'none',
        }}
        itemRender={(dom, listMeta) => {
          return (
            <Card extra={dom.action} title={listMeta?.record?.name || '655'}>
              {dom.listDom}
            </Card>
          );
        }}
        label="测试label"
        alwaysShowItemLabel={false}
      >
        {/* <ProFormSelect
          key="useMode"
          options={[
            {
              value: 'chapter',
              label: '盖章后生效',
            },
            {
              value: 'none',
              label: '不生效',
            },
          ]}
          width="md"
          name="useMode"
          label="合同约定生效方式"
        /> */}
        {(meta, index, action, count) => {
          return (
            <>
              <ProFormSelect
                key="useMode"
                options={[
                  {
                    value: 'chapter',
                    label: '盖章后生效',
                  },
                  {
                    value: 'none',
                    label: '不生效',
                  },
                ]}
                width="md"
                name="useMode"
                label="合同约定生效方式"
              />
            </>
          );
        }}
      </ProFormList>
    </ProForm>
  );
}

ProFormList2.menu = {
  name: 'ProFormList测试',
};

export default ProFormList2;
