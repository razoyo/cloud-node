const transform       = require('../transform');

const product = module.exports;

// Init routes
product.init = (env, router, magento) => {
  router.get('/product/:upc', product.fromUPC.bind(this, magento));
};

// From product, get UPC
product.fromUPC = (magento, req) => {
  console.log(`product.fromUPC(${req.params.upc})`);
  return magento.request('GET',            //method
                  '/V1/products',   //url
                  {                 //urlParams
                    'searchCriteria[filter_groups][0][filters][0][field]':'upc',
                    'searchCriteria[filter_groups][0][filters][0][value]':req.params.upc,
                  }, 
                  {                 //data
                  })
  .then((data) => {
//    console.log('data = ' + JSON.stringify(data, null, 2));
    if (data.items.length !== 1) {
      throw new Error('Did not fetch a unique product. Got ' + data.items.length + ' items.');
    }
    if ([2,3,4].indexOf(data.items[0].visibility) === -1) {
      throw new Error('Visibility must be Search, Catalog or both.  Visibility = ' + data.items[0].visibility);
    }
    let item = data.items[0];
    return new Promise((resolve, reject) => {
      let dataX = transform.product(item);
      resolve(dataX);
    });
  })
  .catch((err) => {
    return(err);
  });
};

