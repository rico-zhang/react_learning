import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import { ProFormInstance } from '@ant-design/pro-form';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { ProTable, TableDropdown, EditableProTable } from '@ant-design/pro-table';
import { Button, Dropdown, Menu, Space, Tag, Form, Statistic, Input } from 'antd';
import { FormInstance } from 'rc-field-form';
import React, { useRef, useState } from 'react';
import request from 'umi-request';

EditableProTable.RecordCreator;
type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  create_at: string;
  update_at: string;
  closed_at?: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: (form, config) => {
      // console.log('title FormItemConfig', config);
      if (config.isEditable) {
        //编辑表格
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      } else {
        return {};
      }
    },
    editable: (text, record, index) => {
      if (index === 0) return true;
      return false;
    },
    colSize: 2,
    colSpan: 1,
    rowSpan: 1,
    filters: [
      {
        text: '1',
        value: '1',
        children: [
          {
            text: '2',
            value: '2',
          },
        ],
      },
    ],
    filterMode: 'tree',
    filtered: true,
    defaultFilteredValue: ['22'],
    filterSearch: true,
    initialValue: '111',
    // readonly: true,
  },
  {
    disable: true,
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: { text: '未解决', status: 'Error' },
      closed: { text: '已解决', status: 'Success', disabled: true },
      processing: { text: '解决中', status: 'processing' },
    },
  },
  {
    disable: true,
    title: '标签',
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
      // return <Input placeholder="rr" />;
    },
    render: (_, record) => {
      return (
        <Space>
          {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      );
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created-at',
    valueType: 'dateTime',
    sorter: true,
    hideInSearch: true,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const ProTable1 = () => {
  const actionRef = useRef<ActionType>();
  const searchFormRef = useRef<ProFormInstance>();

  const [editForm] = Form.useForm();
  const editFormRef = useRef<ProFormInstance>();

  const [selection, setSelection] = useState<{
    keys: any[];
    rows: any[];
  }>({
    keys: [],
    rows: [],
  });

  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      params={{ test: 1 }}
      request={async (params = {}, sort, filter) => {
        console.log(params, sort, filter);
        return request<{
          data: GithubIssueItem[];
        }>('https://proapi.azurewebsites.net/github/issues', {
          params,
        });
      }}
      editable={{
        type: 'multiple',
        form: editForm,
        formProps: {
          formRef: editFormRef,
        },
        onChange: (editableKeys, editableRows) => {
          console.log('editable-onChange', editableKeys, editableRows);
        },
        onValuesChange: (record, dataSource) => {
          console.log('editable-onValuesChange', record, dataSource);
        },
        // actionRender: (row, config, defaultDoms) => {
        //   console.log('editable-actionRender', row, config, defaultDoms);
        //   return [defaultDoms.cancel, defaultDoms.save, defaultDoms.delete];
        // },
        onSave: (
          /** 行 id，一般是唯一id */
          key,
          /** 当前修改的行的值，只有 form 在内的会被设置 */
          record,
          /** 原始值，可以用于判断是否修改 */
          originRow,
          newLienConfig,
        ) => {
          console.log('editable-onSvae', key, record, originRow, newLienConfig);
          // return Promise.reject();//阻止保存
          return Promise.resolve();
        },
      }}
      // columnsStateMap={{
      //   title: {
      //      show: false,
      //   },
      // }}
      columnsState={{
        persistenceKey: 'pro-table-signe-demos',
        persistenceType: 'localStorage',
        onChange: (value) => {
          console.log('value', value);
        },
        defaultValue: {
          title: {
            show: false,
          },
        },
      }}
      rowKey="id"
      search={{ labelWidth: 'auto', filterType: 'query' }}
      form={{
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
        ignoreRules: false,
        span: 6,
      }}
      pagination={{ pageSize: 5, onChange: (page) => console.log(page) }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => {
            // console.log(actionRef.current);
            // actionRef.current?.fullScreen?.();
            // console.log(searchFormRef.current?.getFieldFormatValue?.());
            // console.log(editForm.getFieldsValue());
            // console.log(editFormRef.current?.getFieldFormatValue?.());
            // console.log(selection);
          }}
        >
          新建
        </Button>,
        <Dropdown key="menu" overlay={menu}>
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
      postData={(data) => {
        console.log('postdata', data);
        return data;
      }}
      defaultData={[
        {
          url: '2020-05-26T09:42:56Z',
          update_at: '2020-05-26T09:42:56Z',
          create_at: '2020-05-26T09:42:56Z',
          closed_at: '2020-05-26T09:42:56Z',
          comments: 1,
          id: 624748504,
          labels: [],
          number: 6689,
          state: 'open',
          title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
        },
      ]}
      onDataSourceChange={(data) => {
        console.log('onDataSourceChange', data);
      }}
      formRef={searchFormRef}
      toolbar={{
        title: 'title',
        subTitle: 'subTitle',
        tooltip: 'tootip',
        search: { loading: false },
        //actions: [],
        // settings: [{ icon: <EllipsisOutlined />, tooltip: '66' }],
        multipleLine: true,
        filter: <div>filter</div>,
        tabs: {
          // activeKey: '0',
          items: [
            { key: '0', tabKey: '0', tab: <div>tab0</div>, children: <div>tab0 content</div> },
            { key: '1', tabKey: '1', tab: <div>tab1</div>, children: <div>tab1 content</div> },
          ],
          onChange: (activeKey) => {
            console.log(activeKey);
          },
        },
        menu: {
          type: 'inline',
          items: [
            { key: '0', label: 'menu0' },
            { key: '1', label: 'menu1' },
          ],
        },
      }}
      onLoadingChange={(loading) => {
        console.log('onLoadingChange', loading);
      }}
      options={{
        density: true,
        fullScreen: (e, action) => {
          console.log(e, action);
          action?.fullScreen?.();
        },
        reload: true,
        setting: {
          draggable: true,
          checkable: true,
          checkedReset: true,
          extra: 'extra',
          // children: 'setting',
        },
        search: {
          name: 'k',
          onSearch: (keyword) => {
            console.log('search-keyword', keyword);
            return true;
          },
          // loading: true,
        },
      }}
      defaultSize="small"
      beforeSearchSubmit={(params) => {
        console.log('beforeSearchSubmit', params);
        return params;
      }}
      tableExtraRender={(props, dataSource) => {
        console.log('tableExtraRender', props, dataSource);
        return <Statistic title="统计" value={10} />;
      }}
      // ghost
      onLoad={(dataSource) => {
        console.log('onLoad', dataSource);
      }}
      // manualRequest={true}
      // revalidateOnFocus={false}
      rowSelection={{
        preserveSelectedRowKeys: true,
        fixed: true,
        type: 'checkbox',
        alwaysShowAlert: true,

        selectedRowKeys: selection.keys,
        onChange: (selectedRowKeys, selectedRows) => {
          setSelection({
            keys: selectedRowKeys,
            rows: selectedRows,
          });
        },
      }}
      // tableAlertRender={(props) => {
      //   console.log('tableAlertRender', props);
      //   return <div>11</div>;
      // }}
      // tableAlertOptionRender={(props) => {
      //   console.log('tableAlertOptionRender', props);
      //   return <div>11</div>;
      // }}
    ></ProTable>
  );
};

ProTable1.menu = {
  name: 'API测试',
};
export default ProTable1;
