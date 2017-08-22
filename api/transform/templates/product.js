'use strict';
const _             = require('lodash');
const jsonave       = require('jsonave').instance;

var customAttribute = function(a, attribute) {
  for (let i = 0; i < a.length; i++) {
    /*
    if (a[i].attribute_code === attribute) {
      return a[i].value;
    }
   */
  }
  return null;
}

exports.toProduct = {
	content: {
    name: { dataKey: 'name' },
    price: { dataKey: 'price' },
    /*
    picture_url: {
      dataKey: customAttribute(jsonave('custom_attributes'), 'image')
    }
   */
	}
};

