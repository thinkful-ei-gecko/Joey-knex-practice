require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

// const searchTerm = 'fish';

// function allText(searchTerm){
//   knexInstance
//     .select('*')
//     .from('shopping_list')
//     .where('name', 'ILIKE', `%${searchTerm}%`)
//     .then(result => {
//       console.log('SEARCH TERM', { searchTerm });
//       console.log(result);
//     });
// }
// allText(searchTerm);

// const daysAgo = 5;
// function addedAfterSetDaysAgo(daysAgo){
//   knexInstance
//     .select('*')
//     .from('shopping_list')
//     .where('date_added', '>', knexInstance.raw('now() - \'?? days\'::INTERVAL', daysAgo))
//     .then(results => { console.log(results); }); 

// }
// addedAfterSetDaysAgo(daysAgo);
// const page = 2;
// function paginateProducts(page) {
//   const productsPerPage = 6;
//   const offset = productsPerPage * (page - 1);
//   knexInstance
//     .select('*')
//     .from('shopping_list')
//     .limit(productsPerPage)
//     .offset(offset)
//     .then(result => {
//       console.log(result);
//     });
// }

// paginateProducts(page);

function costPerCategory() {
  knexInstance
    .select('category')
    .sum('price as total')
    .from('shopping_list')
    .groupBy('category')
    .then(result => {
      console.log('COST PER CATEGORY');
      console.log(result);
    });
}
  
costPerCategory();