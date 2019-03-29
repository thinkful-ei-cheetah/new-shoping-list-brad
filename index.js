/* eslint-disable indent */
/* eslint-disable strict */

const STORE = [
    {name: "apples", checked: false},
    {name: "oranges", checked: false},
    {name: "milk", checked: true},
    {name: "bread", checked: false}
  ];


function generateShoppingItemHtml(item, itemIndex){
    const checkedClass = item.checked ? 'shopping-item__checked' : '';
  
    return `
      <li class="js-item-index-element" data-item-index="${itemIndex}">
        <span class="shopping-item js-shopping-item ${checkedClass}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
     </li>
    `;
  }

  function generateShoppingListElements(items){
    // Create new array of HTML strings
    const elements = items.map((item, index) => {
      return generateShoppingItemHtml(item, index);
    });
  
    // Join the array into a single string and return it
    return elements.join();
  }
  
  console.log(generateShoppingListElements(STORE));
