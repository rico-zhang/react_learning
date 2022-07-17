import ProForm, { ProFormText } from '@ant-design/pro-form';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form, Input } from 'antd';
import { useIntl } from 'umi';
import DefineComp from './components/DefineComp';
import styles from './index.less';
console.log(styles);

const Order = () => {
  const intl = useIntl();

  return (
    <div>
      <PageHeaderWrapper
        content={intl.formatMessage({
          id: 'pages.admin.subPage.title',
          defaultMessage: 'This page can only be viewed by admin',
        })}
      >
        Order
        <ProForm
          onFinish={async (values) => {
            console.log(values);
          }}
        >
          <ProFormText name="name" label="姓名" />
          <Form.Item name="age" label="姓名">
            <Input />
          </Form.Item>
        </ProForm>
        <DefineComp />
      </PageHeaderWrapper>
    </div>
  );
};

export default Order;
