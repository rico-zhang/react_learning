import React from 'react';
import ProCard from '@ant-design/pro-card';
import { Statistic } from 'antd';

const { Divider } = ProCard;
function ProCard1() {
  return (
    <>
      <ProCard title="默认尺寸" extra={'extra'} tooltip="这是提示" style={{ maxWidth: 300 }}>
        <div>Card Content</div>
        <div>Card Content</div>
        <div>Card Content</div>
      </ProCard>
      <ProCard title="默认尺寸" extra={'extra'} tooltip="这是提示" style={{ maxWidth: 300 }} size="small">
        <div>Card Content</div>
        <div>Card Content</div>
        <div>Card Content</div>
      </ProCard>

      <hr />

      <ProCard direction="column" ghost gutter={[0, 8]}>
        <ProCard layout="center" bordered>
          colSpan - 24
        </ProCard>
        <ProCard colSpan={12} layout="center" bordered>
          colSpan - 12
        </ProCard>
        <ProCard colSpan={8} layout="center" bordered>
          colSpan - 8
        </ProCard>
        <ProCard colSpan={0} layout="center" bordered>
          colSpan - 0
        </ProCard>
      </ProCard>

      <hr />

      <ProCard title="左右分栏带标题" extra="2019年9月28日" split={'vertical'} bordered headerBordered>
        <ProCard title="左侧详情" colSpan="50%">
          <div style={{ height: 100 }}>左侧内容</div>
        </ProCard>
        <ProCard title="流量占用情况">
          <div>右侧内容</div>
        </ProCard>
      </ProCard>

      <hr />

      <ProCard split={'vertical'}>
        <ProCard title="左侧详情" colSpan="50%">
          <div style={{ height: 100 }}>左侧内容</div>
        </ProCard>
        <ProCard title="流量占用情况" headerBordered>
          <div>右侧内容</div>
        </ProCard>
      </ProCard>

      <hr />

      <ProCard title="复杂切分" extra="2019年9月28日" bordered headerBordered split={'vertical'}>
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split={'vertical'}>
              <ProCard title="昨日全部流量">123</ProCard>
              <ProCard title="本月累计流量">234</ProCard>
              <ProCard title="今年累计流量">345</ProCard>
            </ProCard>
            <ProCard split="vertical">
              <ProCard title="运行中试验">12/56</ProCard>
              <ProCard title="历史试验总数">134 个</ProCard>
            </ProCard>
          </ProCard>
          <ProCard title="流量趋势">
            <div>图表</div>
            <div>图表</div>
            <div>图表</div>
            <div>图表</div>
            <div>图表</div>
          </ProCard>
        </ProCard>
        <ProCard title="流量占用情况">右侧内容</ProCard>
      </ProCard>

      <ProCard gutter={[16, 16]}>
        <ProCard colSpan="30%" title="title" headerBordered bordered>
          300px
        </ProCard>
        <ProCard bordered>Auto</ProCard>
      </ProCard>

      <hr />

      <ProCard.Group title="核心指标" direction={'row'}>
        <ProCard>
          <Statistic title="今日UV" value={79.0} precision={2} />
        </ProCard>
        <Divider type={'vertical'} />
        <ProCard>
          <Statistic title="冻结金额" value={112893.0} precision={2} />
        </ProCard>
        <Divider type={'vertical'} />
        <ProCard>
          <Statistic title="信息完整度" value={93} suffix="/ 100" />
        </ProCard>
        <Divider type={'vertical'} />
        <ProCard>
          <Statistic title="冻结金额" value={112893.0} />
        </ProCard>
      </ProCard.Group>

      <ProCard
        tabs={{
          // tabPosition: 'left',
          type: 'editable-card',
          // hideAdd: true,
        }}
      >
        <ProCard.TabPane key="tab1" tab="产品一">
          内容一
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="产品二" closable={false}>
          内容二
        </ProCard.TabPane>
      </ProCard>
    </>
  );
}

ProCard1.menu = {
  name: 'ProCard',
};
export default ProCard1;
