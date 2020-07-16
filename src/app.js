import './style.css';

function InputText(attributes) {
  this.type = attributes.type;
  this.placeholder = attributes.placeholder;
}

const inputBuilder = {
  setAttributes: function(element, attributes){
    Object.entries(attributes).forEach(([attr, value]) => {
      element.setAttribute(attr, value);
    });
  },

  buildElement: function(elementName, attributes){
    const item = document.createElement(elementName);

    if (typeof attributes === 'object') {
      this.setAttributes(item, attributes);
    }

    return item;
  },

  prepare: function(){
    const outerContainer = this.buildElement('div', { id: 'items-outer-container'});
    const container = this.buildElement('div', { id: 'items-container'});
    const itemInput = this.buildElement('div', { id: 'item-input'});
    const todo = document.getElementById('todo-list');

    outerContainer.append(container);
    container.append(itemInput);
    todo.append(outerContainer);

    return itemInput;
  },

  createInput: function(attributes){
    const itemInput = this.prepare();
    const newInput = new InputText(attributes);
    const textInput = this.buildElement('input', { type: newInput.type, placeholder: newInput.placeholder });

    itemInput.append(textInput);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  inputBuilder.createInput({ type: 'text', placeholder: 'Digite aqui' });
  inputBuilder.createInput({ type: 'text', placeholder: 'Digite aqui também' });
  inputBuilder.createInput({ type: 'text', placeholder: 'E aqui' });
});
