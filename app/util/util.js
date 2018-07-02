import {
  PixelRatio,
  Dimensions,
} from 'react-native';
import queryString from 'query-string'

var Util = {
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height

  },
  //GET请求
  get: function (url,params) {
    if (params) {
      url += '?' + queryString.stringify(params)
    }
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      })
      .catch((error) => {
        console.error(error);
      });
  },
  //POST请求
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };
    fetch(url,fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      })
      .catch((error) => {
        console.error(error);
      });
  },
  key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'
};
module.exports = Util;