// Your code here.
const allItems = document.querySelectorAll('.item');
allItems.forEach((item) => {
	item.setAttribute('draggable', true);
})