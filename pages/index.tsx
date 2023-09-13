import React from 'react';
import { Page } from '../components/page';
import { Providers } from '../imports/providers';


export default function IndexPage() {
  return (
    <Providers>
      <Page />
    </Providers>
  );
}