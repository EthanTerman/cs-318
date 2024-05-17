document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('.cloner').forEach(function(cloner){
		cloner.querySelector('.add-button').addEventListener('click', function(e){
			cloneRow(cloner);
		});
		cloneRow(cloner);
	});
});

function cloneRow(cloner){
	let container = cloner.querySelector('.container');
	let template = cloner.querySelector('template');
	let clon = template.content.cloneNode(true);
	container.appendChild(clon);
}

function removeRow(e){
	let button = e.target;
	let row = button.closest('.row');
	row.remove();
}