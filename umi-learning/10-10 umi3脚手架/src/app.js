import logo from '@/assets/logo.png';
//plugin access
export async function getInitialState() {
  await delay(2000);
  // throw new Error('test');
  return {
    a: 1,
    b: 2,
    timer: +new Date(),
  };
}

const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
};

export const layout = (initialState) => {
  console.log(initialState);
  return {
    logo: logo,
    logout: () => {},
  };
};
