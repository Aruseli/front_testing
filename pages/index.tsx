import { StrictMode } from 'react';
import { Page } from '../components/page';
import { Providers } from '../imports/providers';


export default function IndexPage() {
  return (<StrictMode>
      <Providers>
        <Page />
      </Providers>
    </StrictMode>
  );
}