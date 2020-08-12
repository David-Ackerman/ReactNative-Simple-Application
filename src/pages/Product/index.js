import React from 'react';

import { WebView } from 'react-native-webview';

var titulo;

const Product = ({ route, navigation }) =>(
 <WebView source={{uri: route.params.product.url}} />
);

export default Product;