// import './style.css';

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

  run: function(){
    const outerContainer = this.buildElement('div', { id: 'items-outer-container'});
    const container = this.buildElement('div', { id: 'items-container'});
    const itemInput = this.buildElement('div', { id: 'item-input'});
    const textInput = this.buildElement('input', { type: 'text', placeholder: 'Add a new task'});

    outerContainer.append(container);
    container.append(itemInput);
    itemInput.append(textInput)

    const todo = document.getElementById('todo-list');

    todo.append(outerContainer);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  inputBuilder.run();
});
