import React, { useState } from 'react';
import { Button, Descriptions, Result, Avatar, Space, Statistic, Input } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import { MenuDataItem, ProBreadcrumb, ProSettings, RouteContext, RouteContextType } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer, WaterMark } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import { IRouteComponentProps, Link } from 'umi';
import defaultSettings from '@ant-design/pro-layout/lib/defaultSettings';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人"> 张三</Descriptions.Item>
    <Descriptions.Item label="联系方式"> 287634</Descriptions.Item>
    <Descriptions.Item label="创建时间"> 2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间"> 2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注"> 中国河南省安阳市龙安区</Descriptions.Item>
  </Descriptions>
);
const filterByMenuDate = (data: MenuDataItem[], keyWord: string): MenuDataItem[] =>
  data
    .map((item) => {
      if ((item.name && item.name.includes(keyWord)) || filterByMenuDate(item.routes || [], keyWord).length > 0) {
        return {
          ...item,
          children: filterByMenuDate(item.children || [], keyWord),
          routes: filterByMenuDate(item.routes || [], keyWord),
        };
      }

      return undefined;
    })
    .filter((item) => item) as MenuDataItem[];
const Index = (props: IRouteComponentProps) => {
  const [setting, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname, setPathname] = useState<string>('/welcome');
  const [keyWord, setKeyWord] = useState('');

  return (
    <div id="test-pro-layout">
      <ProLayout
        // {...defaultProps}
        route={props.route}
        location={props.location}
        waterMarkProps={{ content: 'Pro Layout' }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255,255,255,0.65',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://procomponents.ant.design/favicon.ico"
                alt="pro-logo"
                style={{ width: 16, height: 16, margin: '0 16px', marginRight: 10 }}
              />
              {!props?.collapsed && 'Preview Pro'}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          // <a
          //   onClick={() => {
          //     console.log(item.path);

          //     setPathname(item.path || '/welcome');
          //   }}
          // >
          //   {dom}
          // </a>
          <Link
            to={item.path}
            onClick={() => {
              // console.log(item.path);
              setPathname(item.path || '/welcome');
            }}
          >
            <div>{dom}</div>
          </Link>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />}></Avatar>
          </div>
        )}
        menuDataRender={(menus) => {
          // console.log('menudatarender');

          return menus;
        }}
        menuRender={(props, defaultDom) => {
          // console.log('menurender');

          return defaultDom;
        }}
        // menu={{
        //   type: 'sub',
        //   defaultOpenAll: false,
        //   ignoreFlatMenu: false,
        //   // autoClose: false,
        // }}
        menuExtraRender={({ collapsed }) =>
          !collapsed && (
            <Input.Search
              onSearch={(e) => {
                setKeyWord(e);
              }}
            />
          )
        }
        postMenuData={(menus) => filterByMenuDate(menus || [], keyWord)}
        // headerContentRender={() => <ProBreadcrumb />}
        // pure={true}
        // loading={true}
        // contentStyle={{}}
        // layout="side"
        // splitMenus={true}
        // contentWidth="Fluid"
        // footerRender={() => <div>36478368r7</div>}
        // pageTitleRender={() => 'i3847985r3748s975u'}
        {...setting}
      >
        <PageContainer
        // content={content}
        // ghost
        // tabList={[
        //   { tab: '基本信息', key: 'base' },
        //   { tab: '详细信息', key: 'info' },
        // ]}
        // extraContent={
        //   <Space size={24}>
        //     <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />}></Statistic>
        //     <Statistic title="Unmerged" value={93} suffix="/ 100"></Statistic>
        //   </Space>
        // }
        // extra={[
        //   <Button key="3">操作</Button>,
        //   <Button key="2">操作</Button>,
        //   <Button key="1" type="primary">
        //     主操作
        //   </Button>,
        // ]}
        // footer={[
        //   <Button key="2">重置</Button>,
        //   <Button key="1" type="primary">
        //     提交
        //   </Button>,
        // ]}
        // header={{}}
        // affixProps={{}}
        // waterMarkProps={{}}
        >
          <div>
            {/* <Result
              status={'404'}
              style={{ height: '100%', background: '#fff' }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            /> */}
            {props.children}
            {/* <RouteContext.Consumer>
              {(value: RouteContextType) => {
                console.log(value);

                return value.title;
              }}
            </RouteContext.Consumer> */}
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={setting}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};
export default Index;
