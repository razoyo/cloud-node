'use strict';
const _             = require('lodash');
const jsonave       = require('jsonave').instance;
const env						= require('../../../env');

exports.toProduct = {
	content: {
    name: { dataKey: 'name' },
    price: { dataKey: 'price' },
    product_url: {
      dataKey: 'id',
      output: function(input) {
        return env.MAGENTO_URL + '/catalog/product/view/id/' + input
      }
    },
		picture_url: {
			dataKey: jsonave('custom_attributes[?(@.attribute_code==="swatch_image")].value'),
			single: true,
      output: function(input) {
        return env.MAGENTO_MEDIA_URL + '/catalog/product' + input;
      }
		},
	}
};

exports.toProductURL = {
	content: {
		product_url: {
			dataKey: jsonave('custom_attributes[?(@.attribute_code==="url_key")].value'),
			single: true,
      output: function(input) {
        return env.MAGENTO_URL + '/' + input + '.html';
      }
		}
	}
};

