import React, { useRef } from 'react';
import ProForm, { ProFormList, ProFormDependency, ProFormText } from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { Button, Card } from 'antd';

function ProFormList3() {
  const formRef = useRef<ProFormInstance>();

  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
        console.log(formRef.current?.getFieldsValue());
        console.log(formRef.current?.getFieldFormatValue?.());
      }}
      formRef={formRef}
    >
      <ProFormList
        label="用户信息"
        name="list"
        initialValue={[{ name: '1111' }]}
        itemContainerRender={(doms) => {
          return <ProForm.Group>{doms}</ProForm.Group>;
        }}
        itemRender={(dom, listMeta) => {
          return (
            <Card extra={dom.action} title={listMeta?.record?.name || '655'}>
              {dom.listDom}
            </Card>
          );
        }}
        alwaysShowItemLabel
      >
        {(meta, index, action, count) => {
          return (
            <>
              <ProFormText initialValue={index} name="rowKey" label={`第${index}配置`} />
              <ProFormText name="name" key="name" label="姓名" />
              <ProFormDependency key="remark" name={['name']}>
                {({ name }) => {
                  if (!name) {
                    return (
                      <span
                        style={{
                          lineHeight: '92px',
                        }}
                      >
                        输入姓名展示
                      </span>
                    );
                  }
                  return <ProFormText name="remark" label="昵称详情" />;
                }}
              </ProFormDependency>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '8px',
                  height: 60,
                }}
              >
                <Button
                  type="primary"
                  key="SET"
                  onClick={() => {
                    action.setCurrentRowData({
                      name: 'New Name' + index,
                      remark: 'New Remark' + index,
                    });
                  }}
                >
                  设置此行
                </Button>

                <Button
                  type="dashed"
                  key="clear"
                  onClick={() => {
                    action.setCurrentRowData({
                      name: undefined,
                      remark: undefined,
                    });
                  }}
                >
                  清空此行
                </Button>
              </div>
            </>
          );
        }}
      </ProFormList>
    </ProForm>
  );
}
ProFormList3.menu = {
  name: '联动ProFormList',
};
export default ProFormList3;
