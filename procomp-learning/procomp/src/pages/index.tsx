import styles from './index.less';

function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

IndexPage.tittle = '首页';
IndexPage.menu = {
  name: '首页',
};
export default IndexPage;
