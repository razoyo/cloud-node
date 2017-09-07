const transform       = require('../transform');

const product = module.exports;

// productFromUPC
//   Input:  upc
//   Output: promise that resolves to:
//            {
//              fOk: false,
//              message: error
//            }
//
//  -or-
//            {
//              fOk: true,
//              data: product
//            }
function productFromUPC (magento, upc) {
  return magento.request('GET',            //method
                  '/V1/products',   //url
                  {                 //urlParams
                    'searchCriteria[filter_groups][0][filters][0][field]':'upc',
                    'searchCriteria[filter_groups][0][filters][0][value]':upc,
                  }, 
                  {                 //data
                  })
  .then((data) => {
//    console.log('data1 = ' + JSON.stringify(data, null, 2));
    return new Promise((resolve, reject) => {
      if (data.items.length !== 1) {
        reject('Did not fetch a unique product. Got ' + data.items.length + ' items.');
      }
      resolve(data);
    });
  })
  .then(data => {
    // check if you need to get the parent
//    console.log('data2 = ' + JSON.stringify(data, null, 2));
    if ([2,3,4].indexOf(data.items[0].visibility) != -1) {
      return new Promise((resolve, reject) => {
        resolve(data);
      });
    }
    else {
      // get the 'parent' configurable
      let parent_url_key = '';
      for (let i = 0; i < data.items[0].custom_attributes.length; i++) {
        if (data.items[0].custom_attributes[i].attribute_code === 'parent_url_key') {
          parent_url_key = data.items[0].custom_attributes[i].value;
          break;
        }
      }
      if (parent_url_key === '') {
        throw new Error('simple product doesn\'t have custom attribute `parent_url_key`');
      }
      return magento.request('GET',            //method
               '/V1/products',   //url
               {                 //urlParams
                 'searchCriteria[filter_groups][0][filters][0][field]':'sku',
                 'searchCriteria[filter_groups][0][filters][0][value]':parent_url_key,
               }, 
               {                 //data
      });
    }
  })
  .then((data) => {
    // You have the final project as data.items[0]
//    console.log('data3 = ' + JSON.stringify(data, null, 2));
    return new Promise((resolve, reject) => {
      if (data.items.length === 0) {
        reject('Did not find configurable product for simple project');
      }
      if (data.items.length !== 1) {
        reject('Did not find unique parent product');
      }
      let obj = {
        fOK: true,
        data: data.items[0]
      };
      resolve(obj);
    });
  })
  .catch(function(err) {
    let obj = {
      fOK: false,
      message: err
    };
    return obj;
  });
};

// Init routes
product.init = (env, router, magento) => {
  router.get('/product/:upc', product.fromUPC.bind(this, magento));
};

// From product, get UPC
product.fromUPC = (magento, req) => {
  console.log(`product.fromUPC(${req.params.upc})`);
  return productFromUPC(magento, req.params.upc)
  .then(data => {
    return new Promise((resolve, reject) => {
      if (data.fOK) {
        let dataX = transform.product(data.data);
        resolve(dataX);
      }
      else {
        reject(data.message);
      }
    });
  })
  .catch(err => {
    return(err);
  });
};

