import { IRouteComponentProps } from 'umi';

function Index(props: IRouteComponentProps) {
  return <div>order</div>;
}

Index.title = 'Order';
Index.menu = {
  name: 'Order',
};
export default Index;
