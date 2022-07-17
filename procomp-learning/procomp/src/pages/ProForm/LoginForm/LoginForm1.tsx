import React, { useState } from 'react';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { message, Space, Tabs, Alert } from 'antd';
import type { CSSProperties } from 'react';

type LoginType = 'phone' | 'account';
const iconStyle: CSSProperties = {
  marginLeft: '16px',
  color: 'rgba(0,0,0,0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

function LoginForm1() {
  const [loginType, setLoginType] = useState<LoginType>('phone');
  return (
    <div style={{ background: 'white' }}>
      <LoginForm
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="Github"
        subTitle="全球最大的同性社交网络"
        actions={
          <Space>
            其他登录方式
            <AlipayCircleOutlined style={iconStyle} /> <TaobaoCircleOutlined style={iconStyle} />{' '}
            <WeiboCircleOutlined style={iconStyle} />{' '}
          </Space>
        }
        onFinish={async (values) => {
          console.log(values);
        }}
        // message={<Alert message="登录异常，请重试！" />}
      >
        <Tabs
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          destroyInactiveTabPane
        >
          <Tabs.TabPane key="account" tab="账号密码登录">
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'用户名: admin or user'}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'密码: ant.design'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          </Tabs.TabPane>
          <Tabs.TabPane key="phone" tab="手机号登录">
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder={'手机号'}
                rules={[
                  {
                    required: true,
                    message: '请输入手机号！',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '手机号格式错误！',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'获取验证码'}`;
                  }
                  return '获取验证码';
                }}
                name="captcha"
                phoneName="mobile"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async (mobile) => {
                  message.success(`${mobile}获取验证码成功！验证码为：1234`);
                }}
              />
            </>
          </Tabs.TabPane>
        </Tabs>
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
    </div>
  );
}

LoginForm1.menu = {
  name: 'LoginForm',
};

export default LoginForm1;
