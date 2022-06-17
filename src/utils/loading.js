import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loading = ({color}) => (
  <ActivityIndicator size="large" color={color} /> 
);

export default Loading;