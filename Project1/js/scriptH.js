function func(element){
	if(element.previousElementSibling.clientHeight === 50){
		element.previousElementSibling.style.height = "100%";
		element.innerHTML ="Show less";
	}else{
		element.previousElementSibling.style.height = "50px";
		element.innerHTML ="Read more...";
	}
}