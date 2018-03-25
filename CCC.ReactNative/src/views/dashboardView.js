import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { APPLICATION } from '../../_config';
import { DefaultStyles } from '../styles';

export class DashboardView extends Component {
  static TAB_DEFINITION = {
    label: 'Dashboard',
    screen: `${APPLICATION.namespace}.Dashboard`,
    icon: require('../resources/icons/dashboard.png'),
    selectedIcon: require('../resources/icons/dashboard_selected.png'),
    title: 'Creditcard Curator Dashboard'
  }

  constructor(props) {
    super(props);
  }

  render = () =>
    <View style={DefaultStyles.container}>
      <Text>This is the dashboard view!</Text>
    </View>
}