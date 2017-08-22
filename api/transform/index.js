'use strict';

const bbj2j         = require('jsonapter');
const _             = require('lodash');

const j2j           = bbj2j.instance();
const jsonave       = require('jsonave').instance;

const product       = require('./templates/product');

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
