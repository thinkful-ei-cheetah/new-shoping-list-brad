/* eslint-disable indent */
/* eslint-disable strict */
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
  