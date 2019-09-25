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
  const foundItem = this.findById(id);
  //console.log(this.findIndex(id));
  let indexOfFoundItem = items.findIndex(id => this.findById(id) === id);
  console.log(indexOfFoundItem);
  //foundItem.splice(foundItem.indexOf(id),1);
  
  // store.items.splice(store.items.indexOf(store.update),1); 
//   a = [ {prop1:"abc",prop2:"qwe"}, {prop1:"bnmb",prop2:"yutu"}, {prop1:"zxvz",prop2:"qwrq"}];
// index = a.findIndex(x => x.prop2 ==="yutu");
// console.log(index);
  
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

