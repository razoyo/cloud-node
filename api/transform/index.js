'use strict';

const bbj2j         = require('jsonapter');
const _             = require('lodash');

const j2j           = bbj2j.instance();
const jsonave       = require('jsonave').instance;

const product       = require('./templates/product');
/*
This is some test code:
var data1 = {
  "id": 1418,
  "sku": "sku1",
  "custom": [
    {   
      "code": "a",
      "value": 1
    },  
    {   
      "code": "b",
      "value": 2
    },  
    {   
      "code": "c",
      "value": 3
    },  
    {   
      "code": "d",
      "value": 4
    },  
  ]
};

var data2 = {
  "id": 1419,
  "sku": "sku2",
  "custom": [
    {
      "code": "d",
      "value": 5
    },
    {
      "code": "b",
      "value": 6
    },
  ]
};

var template = {
	content: {
    id: { dataKey: 'id' },
    sku: { dataKey: 'sku' },
		a: {
			dataKey: jsonave('custom[?(@.code==="a")].value'),
			single: true,
      output: function(input) {
        return 'A ' + input;
      }
		},
		d: {
			dataKey: jsonave('custom[?(@.code==="d")].value'),
			single: true
		}
	}
};

var data1x = j2j.run(template, data1);
console.log('data1x = ' + JSON.stringify(data1x, null, 2));

var data2x = j2j.run(template, data2);
console.log('data2x = ' + JSON.stringify(data2x, null, 2));
*/

/*
 * Input Magento2 product
 * Output {
 *          name: ...,
 *          price: ...,
 *          configurable_attributes: {
 *            sizes: ['small', 'medium', 'large'],
 *            colors: ['white', 'brown', 'black']
 *          }
 *          picture_url:  ...,
 *          product_url: ...
 *        }
 */
exports.product = function (data) {
  return j2j.run(product.toProduct, data);
};

/*
 * Input Magento2 product
 * Output {
 *          product_url: ...
 *        }
 */
exports.productURL = function (data) {
  return j2j.run(product.toProductURL, data);
};
