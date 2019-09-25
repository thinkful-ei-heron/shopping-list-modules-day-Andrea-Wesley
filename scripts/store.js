import item from './item.js';

let items =  [];
let hideCheckedItems= false;

const findById = function(id){
  this.items.find( function (id){
    if (this.items.id === id){
      return id;
    }
  });
};

const addItem = function(name){
  try{
    item.validateName(name);
    let newItem = item.create(name);
    this.items.push(newItem);
  }
  catch(error){
    console.log(`Cannot add item: ${name}.`);
  }
};

const findAndToggleChecked = function(id){
  let hideChecked = this.findById(id).hideCheckedItems;
  hideChecked = !hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  findAndToggleChecked
};

