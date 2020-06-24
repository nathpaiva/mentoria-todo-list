// import './style.css';

var inputBuilder = {
  setAttributes: function(element, attributes){
    Object.entries(attributes).forEach(([attr, value]) => {
      element.setAttribute(attr, value);
    });
  },

  buildElement: function(elementName, attributes){
    var item = document.createElement(elementName);

    if (typeof attributes === 'object') {
      this.setAttributes(item, attributes);
    }

    return item;
  },

  run: function(){
    let outerContainer = this.buildElement('div', { id: 'items-outer-container'});
    let container = this.buildElement('div', { id: 'items-container'});
    let itemInput = this.buildElement('div', { id: 'item-input'});
    let textInput = this.buildElement('input', { type: 'text', placeholder: 'Add a new task'});

    outerContainer.append(container);
    container.append(itemInput);
    itemInput.append(textInput)

    let todo = document.getElementById('todo-list');

    todo.append(outerContainer);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  inputBuilder.run();
});
