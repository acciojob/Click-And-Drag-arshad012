// Your code here.
const allItems = document.querySelectorAll('.item');
allItems.forEach((item) => {
	item.setAttribute('draggable', true);
	item.addEventListener('dragstart', () => {
		drag(event);
	})
	item.addEventListener('dragover', () => {
		allowDrop(event);
	})
	item.addEventListener('drop', () => {
		drop(event);
	})
})

let draggedDiv = null;
function drag(event) {
	draggedDiv = event.target;
}

function allowDrop(event) {
	event.preventDefault();
}


function drop(event) {
	let targetDiv = event.currentTarget;

	let tempDiv = targetDiv;
	targetDiv = draggedDiv;
	draggedDiv = tempDiv;
}


