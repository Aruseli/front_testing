import { StrictMode } from 'react';
import { Page } from '../components/page';
import { Providers } from '../imports/providers';
import { VFXProvider } from 'react-vfx';


export default function IndexPage() {
  return (<StrictMode>
      <VFXProvider>  
        <Providers>
          <Page />
        </Providers>
      </VFXProvider>
    </StrictMode>
  );
}