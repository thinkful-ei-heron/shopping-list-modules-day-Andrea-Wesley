import item from './item.js';

let items =  [];
let hideCheckedItems= false;


const findById = function(id){
  const foundItem = store.items.find( function(id) {
  if(store.items.id === id){
    console.log(id);
    return id;
  };
});
  console.log(foundItem);
  foundItem.checked = !foundItem.checked;
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
  let findHidden = this.findById(id);
  findHidden.checked = !findHidden.checked ;
};

const findAndUpdateName = function(id, newName){
  try{
    item.validateName(name);
    let findUpdated = this.findById(id);
    findUpdated.name = newName;
  }
  catch(error){
    console.log(`Cannot update name: ${error.message}.`);
  }
};

const findAndDelete = function(id){
  const foundItem = this.findById(id);
  const deleteItem = foundItem.filter(this.items);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};

