import React from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';

import { NotFoundView } from '_assets/img';
import { Text } from '_components';
import { colors } from '_constants';

const NotFound = ({ strings, onRefresh, refreshing }) => (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <NotFoundView />
      <Text
        style={{
          color: colors.PRIMARY_TEXT,
          marginLeft: 40,
          marginRight: 40,
          marginTop: 20,
          fontSize: 20,
          fontWeight: 'bold'
        }}
      >
        {strings().notifications.somethingWrong}
      </Text>
      <Text
        style={{
          color: colors.PRIMARY_TEXT,
          marginLeft: 40,
          marginRight: 40,
          marginTop: 10,
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        {strings().notifications.tryAgain}
      </Text>
    </ScrollView>
  </SafeAreaView>
);

export default NotFound;
