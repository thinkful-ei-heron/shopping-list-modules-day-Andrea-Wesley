// https://github.com/thinkful-ei-heron/shopping-list-modules-day-Andrea-Wesley.git

import shoppingList from './shopping-list.js';
import item from './item.js';
import store from './store.js';

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);