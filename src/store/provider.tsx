'use client';

import { Provider } from "react-redux";
import { store } from './index';

export function Providers({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}



