/* @flow */

import React from 'react';

import { ScrollView, View, StatusBar } from 'react-native';
import { MarkdownView } from 'react-native-markdown-view'

import Banner from './Banner';

class MainScreen extends React.Component<{}> {
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Banner />
        <MarkdownView>
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
          * Is __extensible__{'\n'}
        </MarkdownView>
      </ScrollView>
    );
  }
}

export default MainScreen;
