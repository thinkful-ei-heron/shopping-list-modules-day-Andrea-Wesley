import item from './item.js';

let items =  [];
let hideCheckedItems= false;


const findById = function(id){
  const foundItem = this.items.find(function(item) {
    if(item.id === id){
      return true;
    };
  });
  return foundItem;
};

//be consistent always call this.findById

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
  let indexOfFoundItem = this.items.findIndex(item => function(item) {
    if(item.id === id){
      return true;
    };
  });
  
  this.items.splice(indexOfFoundItem,1);
  
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};

