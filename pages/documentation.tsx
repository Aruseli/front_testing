import { StrictMode } from 'react';
import { Providers } from '../imports/providers';
import { Documentation } from '../components/documentation/doc';


export default function IndexPage() {
  return (<StrictMode>
      <Providers>
        <Documentation />
      </Providers>
    </StrictMode>
  );
}