
let btn= document.getElementById('btn');
let tippy= document.getElementById('tipfin');

btn.addEventListener('click',()=>{
    console.log(document.getElementById('bill').value);
    console.log(document.getElementById('guest').value);
    console.log(document.getElementById('cars').value);

    const tip= (((document.getElementById('bill').value)*(document.getElementById('cars').value))/(document.getElementById('guest').value)).toFixed(2);
    console.log(tip);

    if(tip==='NaN'){
        tippy.innerHTML= "The tip is: 0"
    tippy.style.display= 'block';
    }
    else{
    tippy.innerHTML= "The tip is: "+ tip;
    tippy.style.display= 'block';
    
    }
    document.getElementById('bill').value="";
    document.getElementById('guest').value="";
})
