import { ProForm, ProFormDependency, ProFormGroup, ProFormList, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';
import type { NamePath } from 'antd/es/form/interface';
import React from 'react';

const ProFromList5 = () => {
  const initialValues = {
    a: 1,
    b: 2,
    c: {
      a: 3,
      b: 4,
      c: {
        a: 5,
      },
      d: [{ a: 6, b: 7 }],
      e: [{ a: 8, b: 9 }],
    },
  };
  const depName1: NamePath[] = ['a', 'b', ['c', 'a'], ['c', 'b'], ['c', 'c', 'a'], ['c', 'd'], ['c', 'e']];
  const depName2: NamePath[] = ['a', 'b', ['c', 'a']];
  const depName3: NamePath[] = ['a', 'b', ['c', 'a']];
  return (
    <>
      <p>
        <pre>
          <code>{`   下面例子演示了不同情形下的依赖取值顺序：

<ProFormDependency>不在<ProFormList>中：根据name声明的依赖项，从全局取值（情形 1）
<ProFormDependency>在<ProFormList>中
<ProFormDependency>的ignoreFormListField为true：根据name声明的依赖项，从全局取值（情形 2）
<ProFormDependency>的ignoreFormListField为false：根据name声明的依赖项，从局部取值（情形 3）`}</code>
        </pre>
      </p>
      <ProForm initialValues={initialValues}>
        <ProFormGroup>
          <ProFormText name="a" label="a" />
          <ProFormText name="b" label="b" />
          <ProFormText name={['c', 'a']} label="c.a" />
          <ProFormText name={['c', 'b']} label="c.b" />
          <ProFormText name={['c', 'c', 'a']} label="c.c.a" />
          <ProFormGroup title="c.d">
            <ProFormList name={['c', 'd']}>
              <ProFormGroup key="group">
                <ProFormText name="a" label="a" />
                <ProFormText name="b" label="b" />
                <ProFormDependency name={depName3}>
                  {(depValues) => (
                    <Form.Item
                      label={`搜集依赖值（情形3） <ProFormDependency name={${JSON.stringify(depName3)}}>`}
                      extra="a, b, c.a取自局部"
                    >
                      <pre>
                        <code>{JSON.stringify(depValues, null, 2)}</code>
                      </pre>
                    </Form.Item>
                  )}
                </ProFormDependency>
              </ProFormGroup>
            </ProFormList>
          </ProFormGroup>
          <ProFormGroup title="c.e">
            <ProFormList name={['c', 'e']}>
              <ProFormGroup key="group">
                <ProFormText name="a" label="a" />
                <ProFormText name="b" label="b" />
                <ProFormDependency name={depName2} ignoreFormListField>
                  {(depValues) => (
                    <Form.Item
                      label={`搜集依赖值（情形2) <ProFormDependency name={${JSON.stringify(
                        depName2,
                      )}} ignoreFormListField>`}
                      extra="a, b, c.a取自全局"
                    >
                      <pre>
                        <code>{JSON.stringify(depValues)}</code>
                      </pre>
                    </Form.Item>
                  )}
                </ProFormDependency>
              </ProFormGroup>
            </ProFormList>
          </ProFormGroup>
        </ProFormGroup>
        <ProFormGroup title={`收集依赖值（情形1) <ProFormDependency name={${JSON.stringify(depName1)}}>`}>
          <ProFormDependency name={depName1}>
            {(depValues) => (
              <pre>
                <code>{JSON.stringify(depValues)}</code>
              </pre>
            )}
          </ProFormDependency>
        </ProFormGroup>
      </ProForm>
    </>
  );
};
ProFromList5.menu = {
  name: '依赖收集',
};
export default ProFromList5;
