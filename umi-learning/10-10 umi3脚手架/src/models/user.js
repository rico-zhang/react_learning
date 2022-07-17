import { useState, useCallback } from 'react';
export default function userAuthModel() {
  const [user, setUser] = useState(null);
  const signin = useCallback((account, password) => {
    if (password === '123456') setUser(account);
  }, []);
  const signout = useCallback(() => {
    setUser(null);
  }, []);
  return {
    user,
    signin,
    signout,
  };
}
