//import './style.css';

function TodoList(){}

TodoList.prototype.init = function(){
  const outerContainer = this.createElement('div', { id: 'items-outer-container'});
  const container = this.createElement('div', { id: 'items-container'});
  const itemInput = this.createElement('div', { id: 'item-input'});
  const todo = document.getElementById('todo-list');

  outerContainer.append(container);
  container.append(itemInput);
  todo.append(outerContainer);

  this.container = itemInput;
};

TodoList.prototype.setAttributes = function(element, attributes){
  Object.entries(attributes).forEach(([attr, value]) => {
    element.setAttribute(attr, value);
  });
};

TodoList.prototype.createElement = function(name, attributes){
  const item = document.createElement(name);

  if (typeof attributes === 'object') {
    this.setAttributes(item, attributes);
  }

  return item;
};

TodoList.prototype.createInputText = function(attributes){
  const inputText = this.createElement('input', attributes);

  this.container.append(inputText);
}

window.addEventListener('DOMContentLoaded', () => {
  const todoList = new TodoList();
  todoList.init();

  todoList.createInputText({ type: 'text', placeholder: 'Digite aqui' });
  todoList.createInputText({ type: 'text', placeholder: 'Digite aqui também' });
  todoList.createInputText({ type: 'text', placeholder: 'E aqui' });
});
