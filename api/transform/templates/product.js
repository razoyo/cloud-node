'use strict';
const _             = require('lodash');
const jsonave       = require('jsonave').instance;
const env						= require('../../../env');

exports.toProduct = {
	content: {
    name: { dataKey: 'name' },
    price: { dataKey: 'price' },
		picture_url: {
			dataKey: jsonave('custom_attributes[?(@.attribute_code==="image")].value'),
			single: true,
      output: function(input) {
        return env.MAGENTO_URL + input;
      }
		},
		product_url: {
			dataKey: jsonave('custom_attributes[?(@.attribute_code==="url_key")].value'),
			single: true,
      output: function(input) {
        return env.MAGENTO_URL + input;
      }
		}
	}
};

