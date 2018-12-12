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
          Markdown | Less | Pretty{'\n'}
          --- | --- | ---{'\n'}
          *Still* | `renders` | **nicely**{'\n'}
          1 | 2 | 3{'\n'}
        </MarkdownView>
      </ScrollView>
    );
  }
}

export default MainScreen;
