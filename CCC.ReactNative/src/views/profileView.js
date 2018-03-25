import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { APPLICATION } from '../../_config';
import { DefaultStyles } from '../styles';

export class ProfileView extends Component {
  static TAB_DEFINITION = {
    label: 'Profile',
    screen: `${APPLICATION.namespace}.Profile`,
    icon: require('../resources/icons/profile.png'),
    selectedIcon: require('../resources/icons/profile_selected.png'),
    title: 'My Profile'
  }

  constructor(props) {
    super(props);
  }

  render = () =>
    <View style={DefaultStyles.container}>
      <Text>This is my profile view!</Text>
    </View>
}