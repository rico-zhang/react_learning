import React, { useState } from 'react';
import { IRouteComponentProps } from 'umi';
import { Radio, Switch, Space, Descriptions, Form } from 'antd';
import dayjs from 'dayjs';
import type { ProFieldFCMode } from '@ant-design/pro-utils';

import Field from '@ant-design/pro-field';

function index(props: IRouteComponentProps) {
  const [state, setState] = useState<ProFieldFCMode>('read');
  const [plain, setPlain] = useState<boolean>(false);

  window.test = (props: Record<string, any>) => {
    const proFieldProps = `valueType request plain renderFormItem render text formItemProps valueEnum`;

    const proFormProps = `fieldProps isDefaultDom groupProps contentRender submitterProps submitter`;

    function pickProProps(props: Record<string, any>) {
      const propList = `${proFieldProps} ${proFormProps}`.split(/[\s\n]+/);
      console.log(propList);

      const attrs: any = {};
      Object.keys(props || {}).forEach((key) => {
        if (propList.includes(key)) {
          return;
        }
        attrs[key] = props[key];
      });
      return attrs;
    }
    return pickProProps(props);
  };

  return (
    <div>
      <Space>
        <Radio.Group onChange={(e) => setState(e.target.value as ProFieldFCMode)} value={state}>
          <Radio value="read">只读</Radio>
          <Radio value="edit">编辑</Radio>
          <Radio value="update">更新</Radio>
        </Radio.Group>
        简约模式
        <Switch checked={plain} onChange={(checked) => setPlain(checked)} />
      </Space>
      <br /> <br />
      <Descriptions column={2}>
        <Descriptions.Item label="空字符串">
          <Field mode={state} plain={plain} emptyText={false} />
        </Descriptions.Item>
        <Descriptions.Item label="空字符串">
          <Field
            mode={state}
            plain={plain}
            emptyText="1234"
            valueType="text"
            text="1"
            value={2}
            fieldProps={{ value: '3' }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="头像">
          <Field
            mode={state}
            plain={plain}
            valueType="avatar"
            text="https://avatars2.githubusercontent.com/u/8186664?s=60&v=4"
          />
        </Descriptions.Item>
        <Descriptions.Item label="图片">
          <Field
            text="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            valueType="image"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="金额">
          <Field text="100" valueType="money" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="颜色">
          <Field text="blue" valueType="color" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="数字">
          <Field text="19897979797979" valueType="digit" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="数字范围">
          <Field text={[123, 456]} valueType="digitRange" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="秒格式化">
          <Field text={2000000} valueType="second" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Field text="-10" valueType="percent" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="评分">
          <Field text={3.5} valueType="rate" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="选择框">
          <Field
            text="open"
            mode={state}
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选">
          <Field
            text={['open', 'closed']}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选 labelInValue">
          <Field
            text={[
              {
                value: 'open1',
                label: '打开',
              },
              {
                value: 'closed2',
                label: '关闭',
              },
            ]}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选">
          <Field
            text="open"
            mode={state}
            valueType="radio"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选按钮">
          <Field
            text="open"
            mode={state}
            valueType="radioButton"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程选择框">
          <Field
            text="open"
            mode={state}
            valueType="select"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
              {
                label: '特殊选项',
                value: 'optGroup',
                optionType: 'optGroup',
                options: [
                  { label: '不解决', value: 'no' },
                  { label: '已废弃', value: 'clear' },
                ],
              },
            ]}
          />
        </Descriptions.Item>
        <Descriptions.Item label="级联选择框">
          <Field
            text={['zhejiang', 'hangzhou', 'xihu']}
            mode={state}
            valueType="cascader"
            fieldProps={{
              fieldNames: {
                label: 'name',
              },
            }}
            request={async () => [
              {
                value: 'zhejiang',
                name: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    name: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        name: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                name: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    name: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        name: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <Field text="40" valueType="progress" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Space>
            <Field
              text={10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode={state}
            />
            <Field
              text={0}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode={state}
            />
            <Field
              text={-10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode={state}
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期时间">
          <Field text={dayjs('2019-11-16 12:50:26').valueOf()} valueType="dateTime" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="相对于当前时间">
          <Space>
            <Field text={dayjs('2019-11-16 12:50:26').valueOf()} valueType="fromNow" mode={state} plain={plain} />
            <Field text={dayjs('2020-11-16 12:50:26').valueOf()} valueType="fromNow" mode={state} plain={plain} />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期">
          <Field text={dayjs('2019-11-16 12:50:26').valueOf()} valueType="date" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="日期区间">
          <Field
            text={[dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(), dayjs('2019-11-16 12:50:26').valueOf()]}
            plain={plain}
            valueType="dateRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间区间">
          <Field
            text={[dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(), dayjs('2019-11-16 12:50:26').valueOf()]}
            plain={plain}
            valueType="dateTimeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间">
          <Field text={dayjs('2019-11-16 12:50:26').valueOf()} plain={plain} valueType="time" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="时间区间">
          <Field
            text={[dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(), dayjs('2019-11-16 12:50:26').valueOf()]}
            plain={plain}
            valueType="timeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="密码">
          <Field text="password" plain={plain} valueType="password" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="代码块">
          <Field
            text={`
yarn run v1.22.0
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
            valueType="code"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="JSON 代码块">
          <Field
            text={`{
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "suppressImplicitAnyIndexErrors": true,
    "declaration": true,
    "skipLibCheck": true
  },
  "include": ["**/src", "**/docs", "scripts", "**/demo", ".eslintrc.js"]
}`}
            valueType="jsonCode"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
index.menu = {
  name: 'ProField',
};
export default index;
