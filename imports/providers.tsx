import { useTokenController } from '@deep-foundation/deeplinks/imports/react-token';
import { QueryStoreProvider } from '@deep-foundation/store/query';

import { ChakraProvider } from '@chakra-ui/react';
import themeChakra from './theme';

export function ProviderConnected({
  children,
}: {
  children: JSX.Element;
}) {
  const [token, setToken] = useTokenController();

  return <>{children}</>;
}

export function Providers({
  // gqlPath,
  // gqlSsl,
  children,
}: {
  // gqlPath?: string;
  // gqlSsl?: boolean;
  children: JSX.Element;
}) {
  const ThemeProviderCustom = ChakraProvider;
  const themeCustom = themeChakra;

  return (<>
    <ThemeProviderCustom theme={themeCustom}>
      <QueryStoreProvider>
		{children}
      </QueryStoreProvider>
    </ThemeProviderCustom>
  </>)
};