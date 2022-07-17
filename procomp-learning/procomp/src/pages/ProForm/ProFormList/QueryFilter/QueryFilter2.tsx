import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { ProForm, ProFormDatePicker, ProFormText, QueryFilter } from '@ant-design/pro-form';
import { Card, Input, Tabs } from 'antd';
import React, { PropsWithChildren, useState } from 'react';
import styles from './QueryFilter2.less';

const { TabPane } = Tabs;

type AdvancedSearchProps = {
  onFilterChange?: (allValues: any) => void;
  onSearch?: (text: string) => void;
  onTypeChange?: (type: string) => void;
  defaultType?: string;
};

const QueryFilter2 = (props: PropsWithChildren<AdvancedSearchProps>) => {
  const { onSearch, onTypeChange, defaultType = 'articles', onFilterChange } = props;
  const [searchText, setSearchText] = useState<string>();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const quickSearch = ['小程序开发', '入驻', 'ISV 权限'];
  return (
    <Card bodyStyle={{ paddingBottom: 0 }} bordered={false} className={showFilter ? '' : styles.hiddenFilter}>
      <div>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onSearch={onSearch}
          style={{ maxWidth: 522, width: '100%' }}
        />
        <div className={styles.quickSearch}>
          {quickSearch.map((text) => (
            <span
              key={text}
              onClick={() => {
                setSearchText(text);
                if (onSearch) {
                  onSearch(text);
                }
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <Tabs
        defaultActiveKey={defaultType}
        onChange={onTypeChange}
        tabBarExtraContent={
          <a
            className={styles.filterTrigger}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            高级筛选 {showFilter ? <UpOutlined /> : <DownOutlined />}
          </a>
        }
      >
        <TabPane tab="文章" key="articles" />
        <TabPane tab="项目" key="projects" />
        <TabPane tab="应用" key="applications" />
      </Tabs>

      <QueryFilter
        submitter={false}
        span={24}
        labelWidth="auto"
        split
        onChange={(e) => {
          onFilterChange?.(e);
        }}
        className={styles.filter}
      >
        <ProForm.Group title="姓名">
          <ProFormText name="name" />
        </ProForm.Group>
        <ProForm.Group title="详情">
          <ProFormText name="age" label="年龄" />
          <ProFormDatePicker name="birth" label="生日" />
        </ProForm.Group>
      </QueryFilter>
    </Card>
  );
};

QueryFilter2.menu = {
  name: '查询搜索',
};

export default QueryFilter2;
