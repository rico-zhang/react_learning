import React, { useRef } from 'react';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ProCard } from '@ant-design/pro-card';
import {
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-form';
import { message, Button } from 'antd';

const waitTime = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
function StepsForm1() {
  const formRef = useRef<ProFormInstance>();

  return (
    <ProCard>
      <StepsForm<{ name: string }>
        formRef={formRef}
        onFinish={async () => {
          await waitTime(1000);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
        stepsProps={{ direction: 'vertical' }}
        // submitter={{
        //   render: (props) => {
        //     if (props.step === 0) {
        //       return (
        //         <Button type="primary" onClick={() => props.onSubmit?.()}>
        //           去第二步{'>'}
        //         </Button>
        //       );
        //     }
        //     if (props.step === 1) {
        //       return [
        //         <Button key="pre" onClick={() => props.onPre?.()}>
        //           返回第一步
        //         </Button>,
        //         <Button type="primary" key="goToTree" onClick={() => props.onSubmit?.()}>
        //           去第三步 {'>'}
        //         </Button>,
        //       ];
        //     }
        //     return [
        //       <Button key="gotoTwo" onClick={() => props.onPre?.()}>
        //         {'<'} 返回第二步
        //       </Button>,
        //       <Button type="primary" key="goToTree" onClick={() => props.onSubmit?.()}>
        //         提交 √
        //       </Button>,
        //     ];
        //   },
        // }}
      >
        <StepsForm.StepForm<{ name: string }>
          name="base"
          title="创建实验"
          stepProps={{ description: '这里填入的都是基本信息' }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="实验名称"
            width="md"
            tooltip="最长为24位,用于标定的唯一id"
            placeholder="请输入名名称"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="日期" />
          <ProFormDateRangePicker name="dateTime" label="时间区间" />
          <ProFormTextArea name="remark" label="备注" width="lg" placeholder="请输入备注" />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="设置参数"
          stepProps={{
            description: '这里填入运维参数',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker name="datetime" label="记录保存时间" width="sm" />
            <ProFormCheckbox.Group
              name="checkbox"
              label="迁移类型"
              options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="time"
          title="发布实验"
          stepProps={{
            description: '这里填入发布判断',
          }}
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="部署单元"
            rules={[
              {
                required: true,
              },
            ]}
            options={['部署单元1', '部署单元2', '部署单元3']}
          />
          <ProFormSelect
            label="部署分组策略"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue="1"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
          <ProFormSelect
            label="Pod 调度策略"
            name="remark2"
            initialValue="2"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </ProCard>
  );
}

StepsForm1.menu = {
  name: '演示',
};

export default StepsForm1;