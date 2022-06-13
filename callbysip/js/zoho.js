console.log('zoho')
function addCallToList() {
	setInterval(() => {
		let callNodes = document.querySelectorAll("lyte-exptable-td.sort.lv_data_phone.cellWrap > div > span")
		callNodes.forEach(node => {
			if (!node.firstChild.nodeType == 1){ 
				return
			}
			let number = node.firstChild.attributes['number'].nodeValue;
			node.innerHTML = `<button class="pH2" title="Call" style="    
			background: #d8f4de;
			border-radius: 10px;
			height: auto!important;
			line-height: 5px!important;
			margin-top: 0;
			border-width: 0px;
			width: auto!important;"></button>`;
			node.addEventListener('click', (event) => {
				// event.stopPropagation();
				// event.preventDefault();
				// event.stopImmediatePropagation();
				console.log("click", number);
			})
		});
	}, 3000)
}
addCallToList()
