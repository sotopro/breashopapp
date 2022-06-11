
import React from 'react';
import { View } from 'react-native'

import { Categories, ProductDetail, Products } from './screens/index';

import { styles } from "./styles";

export default function Root() {
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
}
