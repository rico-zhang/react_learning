import { IRouteComponentProps } from 'umi';

function Index(props: IRouteComponentProps) {
  return <div>detail</div>;
}

Index.title = 'detail';
Index.menu = {
  name: 'detail',
};
export default Index;
