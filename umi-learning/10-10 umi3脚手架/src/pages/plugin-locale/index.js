import { getAllLocales, addLocale, getLocale, useIntl, setLocale } from 'umi';

export default function IndexPage() {
  const intl = useIntl();
  // 动态增加新语言
  addLocale(
    'zh-TW',
    {
      // id 列表
      name: '妳好，{name}',
    },
    {
      momentLocale: 'zh-tw',
      antd: 'zh-tw',
    },
  );
  console.log(getAllLocales()); // [en-US,zh-CN,...]
  // setLocale('zh-CN', true);
  console.log(getLocale());
  console.log(intl);

  return (
    <div>
      <button>
        {intl.formatMessage(
          {
            id: 'name',
            defaultMessage: '你好，旅行者',
          },
          {
            name: '旅行者',
          },
        )}
      </button>
    </div>
  );
}
