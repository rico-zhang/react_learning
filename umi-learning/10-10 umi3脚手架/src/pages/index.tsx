import styles from './index.scss';
import { useHistory } from 'umi';

function IndexPage() {
  const history = useHistory();
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button
        onClick={() => {
          history.push('/login');
        }}
      >
        login
      </button>
    </div>
  );
}
// IndexPage.name = '首页';
IndexPage.access = 'canReadPageB';

export default IndexPage;
