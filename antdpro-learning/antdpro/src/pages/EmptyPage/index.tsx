import { PageContainer } from '@ant-design/pro-layout';
import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import TableDynamicSettings from './TableDynamicSettings';
import GridResponsive from './GridResponsive';
import FormNormalLogin from './FormNormalLogin';
import ButtonBasic from './ButtonBasic';
export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <FormNormalLogin />
      <ButtonBasic />
      <GridResponsive />
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      </div>
      <TableDynamicSettings />
    </PageContainer>
  );
};
