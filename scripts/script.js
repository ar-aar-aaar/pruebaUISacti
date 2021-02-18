$(document).ready(() =>{
    const producto1 = document.getElementById('producto1');
    let fixedImg =document.getElementById('fixed-img');

    producto1.addEventListener('mouseenter', ()=>{ 
        const img=producto1.getElementsByClassName('product-img')[0].getAttribute('src');
        const desc=producto1.getElementsByClassName('product-description')[0];
        fixedImg.getElementsByClassName('product-img-aside')[0];
        fixedImg.getElementsByClassName('img-description-aside')[0];
        
        
    });
    producto1.addEventListener('mouseleave', ()=>{
        console.error('Se deja de mostrar');
    });
});