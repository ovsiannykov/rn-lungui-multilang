import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {I18nProvider} from '@lingui/react';
import {Trans} from '@lingui/macro';
import {i18n} from '@lingui/core';
import {en} from 'make-plural/plurals';

i18n.loadLocaleData('en', {plurals: en});
i18n.load('en', messages);
i18n.activate('en');

const App = () => {
  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
      <View style={styles.container}>
        <Text>
          <Trans>Message Inbox</Trans>
        </Text>
      </View>
    </I18nProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
