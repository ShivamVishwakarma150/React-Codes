function choice(items){
    let idx=Math.trunc(Math.random()*items.length);
    return items[idx];
}

function remove(items,item){
    let arr=[];
    items.forEach(element => {
        if(element!==item){
            arr.push(element);
        }
    });
    return arr;
}
export {choice,remove};