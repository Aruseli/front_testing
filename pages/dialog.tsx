import React, { useCallback, useEffect } from 'react';
import { TokenProvider } from '@deep-foundation/deeplinks/imports/react-token';
import {
  LocalStoreProvider,
  useLocalStore,
} from '@deep-foundation/store/local';
import {
  DeepProvider,
  useDeep,
  useDeepSubscription,
} from '@deep-foundation/deeplinks/imports/client';

import { Button, ChakraProvider, Stack, Text } from '@chakra-ui/react';
import { saveGeneralInfo } from '../imports/device/save-general-info';
import { initializePackage } from '../imports/device/initialize-package';
import { PACKAGE_NAME } from '../imports/dialog/package-name';
import { getBatteryInfo as saveBatteryInfo } from '../imports/device/save-battery-info';
import { getLanguageId as saveLanguageId } from '../imports/device/save-language-id';
import { getLanguageTag as saveLanguageTag } from '../imports/device/save-language-tag';
import { Provider } from '../imports/provider';
import {Dialog} from '@capacitor/dialog'

function Content() {
  const deep = useDeep();
  const [deviceLinkId, setDeviceLinkId] = useLocalStore(
    'deviceLinkId',
    undefined
  );

  // TODO Make query to subscribe to Alerts which are not executed yet
  const {data: notExecutedAlertLinks} = useDeepSubscription({
    type_id: {
      _id: ["@deep-foundation/dialog", "Alert"]
    },
    _not: {
      
    }
  })

  useEffect(() => {
    async function alertNotExecutedAlerts({alertLinkId}: {alertLinkId: number}) {
      const alertTitleTypeLinkId = await deep.id(PACKAGE_NAME, "AlertTitle");
      const alertMessageTypeLinkId = await deep.id(PACKAGE_NAME, "AlertMessage");
      const alertButtonTitleTypeLinkId = await deep.id(PACKAGE_NAME, "AlertButtonTitle");

      const {data: [{value: {value: title}}]} = await deep.select({
        from: {
          type_id: alertTitleTypeLinkId,
          from_id: alertLinkId,
        }
      });

      const {data: [{value: {value: message}}]} = await deep.select({
        from: {
          type_id: alertMessageTypeLinkId,
          from_id: alertLinkId,
        }
      });

      const {data: [{value: {value: buttonTitle}}]} = await deep.select({
        from: {
          type_id: alertButtonTitleTypeLinkId,
          from_id: alertLinkId,
        }
      });

      await Dialog.alert({
        title,
        message,
        buttonTitle,
      })
    }

    for (const notExecutedAlertLink of notExecutedAlertLinks) {
      alertNotExecutedAlerts({alertLinkId: notExecutedAlertLink.id});
    }   
  }, [notExecutedAlertLinks])

  return (
    <Stack>
      <Text>{deviceLinkId}</Text>
      <Button
        onClick={async () => {

        }}
      >
        Alert
      </Button>
    </Stack>
  );
}

export default function DialogPage() {
  return (
    <ChakraProvider>
      <Provider>
        <DeepProvider>
          <Content />
        </DeepProvider>
      </Provider>
    </ChakraProvider>
  );
}
