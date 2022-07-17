import React from 'react'
const ctx = React.createContext();
ctx.displayName="FormContext"
export default ctx;
export const { Provider, Consumer } = ctx;