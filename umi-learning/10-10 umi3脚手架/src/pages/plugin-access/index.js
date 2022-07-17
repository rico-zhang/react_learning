import React from 'react';
import { useAccess, Access } from 'umi';

function NoAccess() {
  return <div>no access</div>;
}
export default function index() {
  const access = useAccess();
  console.log(access);

  return (
    <div>
      <p> {access.canReadPageA && 'pageA'}</p>
      <p>{access.canReadPageB && 'pageb'}</p>
      <p> {access.canReadPageC({ a: 1 }) && 'pagec1'}</p>
      <p>{access.canReadPageC({ a: 2 }) && 'pagec2'}</p>
      <p>
        <Access accessible={access.canReadPageA} fallback={NoAccess}>
          pageA
        </Access>
      </p>
      <p>
        <Access accessible={access.canReadPageB} fallback={NoAccess}>
          pageB
        </Access>
      </p>
      <p>
        <Access accessible={access.canReadPageC({ a: 1 })} fallback={NoAccess}>
          pagec1
        </Access>
      </p>
      <p>
        <Access accessible={access.canReadPageC({ a: 2 })} fallback={NoAccess}>
          pagec2
        </Access>
      </p>
    </div>
  );
}
