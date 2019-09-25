import item from './item.js';

let items =  [];
let hideCheckedItems= false;


const findById = function(id){
  const foundItem = items.find( items.id , item.id === id);
  alert('this ran');
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

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked
};

