import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Resume() {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{ uri: 'https://docs.google.com/document/d/e/2PACX-1vRVwxkvgjNkV4UMhF7QXCIWZ0L_nu76JHG9eSFuy2LGnrlQZ2IdzMOYRWSfTFy99A0RisARlh6j5zFs/pub' }} // Replace with your PDF URL
        scalesPageToFit={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});
