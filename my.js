function set(){
    let element = document.getElementsByName('cssProperty');
    for(let index = 0; index < element.length; index++){
        let cssProperty = element[index].getAttribute('id');
        let cssValue = element[index].value;
        let div = document.getElementById('modify');
        div.style[cssProperty] = cssValue;
    }
}
document.getElementById('set').addEventListener('click', set);
