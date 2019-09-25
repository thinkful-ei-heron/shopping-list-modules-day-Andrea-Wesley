import shoppingList from './shopping-list.js';
import item from './item.js';
import store from './store.js';

const main = function () {
  const itemName = ['','apples',];
  itemNames.forEach( name => {
    try {
      item.validateName(name);
      store.items.push(item.create(name));
    }
    catch(error){
      console.log(`Cannot add items: ${error.message}`);
    }
  });
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);