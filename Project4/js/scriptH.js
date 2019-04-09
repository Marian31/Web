function func(element){
	if(element.previousElementSibling.clientHeight === 50){
		element.previousElementSibling.style.whiteSpace ="normal";
		element.innerHTML ="Show less";
	}else{
		element.previousElementSibling.style.whiteSpace ="nowrap";
		element.innerHTML ="Read more...";
	}
}