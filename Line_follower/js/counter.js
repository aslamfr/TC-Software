// Counter Ke-1
let count=+document.getElementById('count').innerHTML;
const minus=document.getElementById('minus');
const plus=document.getElementById('plus');
const reset=document.getElementById('reset');
plus.addEventListener('click', ()=>{
    count++
    document.getElementById('count').innerHTML=count;
}
);

minus.addEventListener('click', ()=>{
    count--
    document.getElementById('count').innerHTML=count;
}
);

reset.addEventListener('click', ()=>{
    count = 0
    document.getElementById('count').innerHTML=count;
}
);



// Counter ke-2
let count2=+document.getElementById('count2').innerHTML;
const minus2=document.getElementById('minus2');
const plus2=document.getElementById('plus2');
const reset2=document.getElementById('reset2');
plus2.addEventListener('click', ()=>{
    count2++
    document.getElementById('count2').innerHTML=count2;
}
);

minus2.addEventListener('click', ()=>{
    count2--
    document.getElementById('count2').innerHTML=count2;
}
);

reset2.addEventListener('click', ()=>{
    count2 = 0
    document.getElementById('count2').innerHTML=count2;
}
);

// Counter Ke-3
let count3=+document.getElementById('count3').innerHTML;
const minus3=document.getElementById('minus3');
const plus3=document.getElementById('plus3');
const reset3=document.getElementById('reset3');
plus3.addEventListener('click', ()=>{
    count3++
    document.getElementById('count3').innerHTML=count3;
}
);

minus3.addEventListener('click', ()=>{
    count3--
    document.getElementById('count3').innerHTML=count3;
}
);

reset3.addEventListener('click', ()=>{
    count3 = 0
    document.getElementById('count3').innerHTML=count3;
}
);