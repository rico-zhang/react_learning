import React, { useRef } from 'react';
import { message, Upload, Form, UploadProps, Button } from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormDatePicker,
  ProFormUploadButton,
} from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { FooterToolbar } from '@ant-design/pro-layout';

function ProForm5() {
  const formRef = useRef<ProFormInstance>();
  return (
    <ProForm
      formRef={formRef}
      onFinish={async (values) => {
        console.log(values);
        message.success('提交成功');
        console.log('格式化后', formRef.current?.getFieldsFormatValue?.());
      }}
      syncToUrl={(values, type) => {
        console.log(values, type);
        if (type === 'get') {
          //为了配合transform
          //startTime 和 endTime拼成createTimeRanger
          return {
            ...values,
            createTimeRanger: values.startTime || values.endTime ? [values.startTime, values.endTime] : undefined,
          };
        }
        //expirationTime 不同步到url
        return {
          ...values,
          expirationTime: undefined,
          file1: undefined,
          file: undefined,
        };
      }}
      // syncToInitialValues={false}
      initialValues={{
        name: '蚂蚁设计有限公司',
        useMode: 'chapter',
      }}
      autoFocusFirstInput
      submitter={{
        render: (_, dom) => {
          return <FooterToolbar>{dom}</FooterToolbar>;
        },
      }}
    >
      <ProFormSelect
        options={[
          {
            value: 'chapter',
            label: '盖章后生效',
          },
        ]}
        width="sm"
        name="useMode"
        label="合同约定生效方式"
      />
      <ProFormDateRangePicker
        transform={(values) => {
          console.log('transform', values);
          return {
            startTime: values ? values[0] : undefined,
            endTime: values ? values[1] : undefined,
          };
        }}
        width="md"
        name="createTimeRanger"
      />
      <ProFormDatePicker width="md" name="expirationTime" label="合同失效时间" />
      <ProFormUploadButton
        extra="支持扩展名：.jpg .zip .doc .wps"
        label="倒签报备附件"
        name="file"
        title="上传文件"
        onChange={(e) => {
          console.log(e);
          formRef.current?.setFieldsValue({
            file1: e.fileList,
          });
        }}
      />
      <Form.Item
        name={'file1'}
        label="文件"
        getValueFromEvent={(value: { fileList: UploadProps['fileList'] }) => value.fileList}
        valuePropName="fileList"
      >
        <Upload>
          <Button>Click to upload</Button>
        </Upload>
      </Form.Item>
    </ProForm>
  );
}

ProForm5.menu = {
  name: '同步提交结果到url',
};

export default ProForm5;
