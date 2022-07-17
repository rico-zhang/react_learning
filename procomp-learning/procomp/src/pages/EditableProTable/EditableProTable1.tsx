import React, { useState, useRef } from 'react';
import type { ProColumns, EditableFormInstance } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { ProCard } from '@ant-design/pro-card';
import { ProFormField, ProFormRadio } from '@ant-design/pro-form';
import { Button } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resove) => {
    setTimeout(() => {
      resove(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title?: string;
  readonly?: string;
  decs?: string;
  state?: string;
  created_at?: string;
  update_at?: string;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    readonly: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
    update_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '活动名称二',
    readonly: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
    update_at: '2020-05-26T08:19:22Z',
  },
];

function EditableProTable1() {
  const [editableKeys, setEditableKeys] = useState<React.Key[]>([]);

  const [dataSource, setDataSource] = useState<DataSourceType[]>(defaultData);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

  const editFormRef = useRef<EditableFormInstance<DataSourceType>>();

  const colums: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      tooltip: '只读,使用form.getFieldValue获取不到值',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules: rowIndex > 1 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      editable: (text, record, index) => {
        return index !== 0;
      },
      width: '15%',
    },
    {
      title: '活动名称二',
      dataIndex: 'readonly',
      tooltip: '只读,使用form.getFieldValue可以获取到值',
      readonly: true,
      width: '15%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      },
    },
    {
      title: '描述',
      dataIndex: 'decs',
      fieldProps: (form, { rowKey, rowIndex }) => {
        if (form.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => {
        return [
          <a
            key="editable"
            onClick={() => {
              action?.startEditable?.(record.id);
            }}
          >
            编辑
          </a>,
          <a
            key="delete"
            onClick={() => {
              setDataSource(dataSource.filter((item) => item.id !== record.id));
            }}
          ></a>,
        ];
      },
    },
  ];

  return (
    <>
      <Button
        onClick={() => {
          // console.log(dataSource);
          console.log(editFormRef.current?.getFieldsValue());
          console.log(editFormRef.current?.getRowsData?.());
        }}
      >
        点击
      </Button>
      <EditableProTable<DataSourceType>
        editableFormRef={editFormRef}
        rowKey="id"
        headerTitle="可编辑表格"
        maxLength={5}
        scroll={{ x: 960 }}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: position as 'top',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
                newRecordType: 'dataSource',
              }
            : false
        }
        loading={false}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: '添加到顶部',
                value: 'top',
              },
              {
                label: '添加到底部',
                value: 'bottom',
              },
              {
                label: '隐藏',
                value: 'hidden',
              },
            ]}
          />,
          <Button
            type="text"
            key="rows"
            onClick={() => {
              const rows = editFormRef.current?.getRowsData?.();
              console.log(rows);
            }}
          >
            获取 table 的数据
          </Button>,
        ]}
        columns={colums}
        request={async () => {
          console.log('request');
          return {
            data: defaultData,
            total: 3,
            success: true,
          };
        }}
        value={dataSource}
        onChange={(datas) => {
          console.log('onchange');
          setDataSource(datas);
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
}

EditableProTable1.menu = {
  name: '演示',
};
export default EditableProTable1;
