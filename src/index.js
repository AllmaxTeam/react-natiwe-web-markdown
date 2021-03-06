/* @flow */

import React from 'react';

import { ScrollView, View, StatusBar, Linking } from 'react-native';
import { MarkdownView } from 'react-native-markdown-view'

import Banner from './Banner';

class MainScreen extends React.Component<{}> {
  onLinkPress = (url: string) => {
    Linking.openURL(url).catch((error) => {
      console.warn('An error occurred: ', error);
    });
  };

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Banner />
        <MarkdownView
          onLinkPress={this.onLinkPress}
        >
          # MarkdownView{'\n'}
          {'\n'}
          **React Native** is even better with Markdown!{'\n'}
          {'\n'}
          ![RN Logo](https://reactjs.org/logo-og.png =120x63){'\n'}
          {'\n'}
          `react-native-markdown-view` is:{'\n'}
          {'\n'}
          * Easy to use{'\n'}
          * Looks good by default{'\n'}
          * Is __extensible__{'\n\n'}
          Markdown | Less | Pretty{'\n'}
          --- | --- | ---{'\n'}
          *Still* | `renders` | **nicely**{'\n'}
          1 | 2 | 3{'\n'}
          [react-native-markdown-view](https://github.com/Benjamin-Dobell/react-native-markdown-view/)
        </MarkdownView>
      </ScrollView>
    );
  }
}

export default MainScreen;
