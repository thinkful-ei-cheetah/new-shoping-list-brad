'use strict';

const STORE = {
  items: [
    {id: cuid(), name: "apples", checked: false},
    {id: cuid(), name: "oranges", checked: false},
    {id: cuid(), name: "milk", checked: true},
    {id: cuid(), name: "bread", checked: false}
  ],
};

function getHTMLForItem(item) {
  return `
			<li id="${item.id}">
				<div class='item-name'>
					${item.name}
				</div>
			     <div>
			        <button class='check-button' onClick="checkButtonClicked('${item.id}')">
			            <span class="button-label">check</span>
			        </button>
			        <button class="delete-button" onClick="deleteButtonClicked('${item.id}')">
			            <span class="button-label">delete</span>
			        </button>
			      </div>
			</li>
		`;
	
}

function renderShoppingList() {
  var html = [];
  for(var i = 0; i < STORE.items.length; i++) {
    var item = STORE.items[i];
    html.push(getHTMLForItem(item));
  }
  $('.js-shopping-list').html(html.join(''));
}

function checkButtonClicked(id) {
  const item = STORE.items.find(item => item.id === id);
  item.checked = !item.checked;
  var selector = '#' + item.id;
  if(item.checked)
    $(selector).addClass('shopping-item-checked');
  else
    $(selector).removeClass('shopping-item-checked');
}

function deleteButtonClicked(id) {
  const item = STORE.items.find(item => item.id === id);
  $('#' + item.id).remove();
  const i = STORE.items.findIndex(item => item.id === id);
  STORE.items.splice(i, 1);
}

function addNewItem() {
  event.preventDefault();
  console.log('`handleNewItemSubmit` ran');
  const newItemName = $('.js-shopping-list-entry').val();
  $('.js-shopping-list-entry').val('');
  var item = {id: cuid(), name: newItemName, checked: false};
  STORE.items.push(item);
  $('.js-shopping-list').append(getHTMLForItem(item)); 
}

function toggleHideFilter() {
  var hide = $('#hide-completed-toggle').is(":checked");
  if(hide) {
    $('.shopping-item-checked').hide();
  }
  else {
    $('.shopping-item-checked').show();
  }
}

function searchSubmit() {
  event.preventDefault();
  const hide = $('#hide-completed-toggle').is(":checked");
  const searchTerm = $('.js-search-term').val();
  for(var i = 0; i < STORE.items.length; i++) {
    var item = STORE.items[i];
    if(item.name.includes(searchTerm)) {
      $('#' + item.id).show();
    }
    else {
      $('#' + item.id).hide();
    }
  }
}

function clearSearchBox() {
  $('.js-search-term').val('');
}

$(document).ready(function() {
  renderShoppingList();
  $('#js-shopping-list-form').submit(addNewItem);
  $('.js-hide-completed-toggle').on('click', toggleHideFilter);
  $('#js-search-term-form').on('submit', searchSubmit);
  $('#search-form-clear').on('click', clearSearchBox);
});