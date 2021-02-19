$(document).ready(() =>{
    if($(window).width()>1024){
        const producto1 = document.getElementById('producto1');
        const producto2 = document.getElementById('producto2');
        const producto3 = document.getElementById('producto3');
        const producto4 = document.getElementById('producto4');
        const producto5 = document.getElementById('producto5');
        const producto6 = document.getElementById('producto6');

        let aside1= document.getElementById('aside1');
        let aside2= document.getElementById('aside2');
        let aside3= document.getElementById('aside3');
        let aside4= document.getElementById('aside4');

        let fixedImg =document.getElementById('fixed-img');
    
        const addImgAndDesc = (rutaImg, descProd) => {
            $("#img-fixed").attr("src",rutaImg);
            $("#desc-fixed").html(descProd);
        }
        const changeColorMain = (container) => {
            container.addClass("image-from-main");
            if (container.hasClass("image-from-aside"));
                container.removeClass("image-from-aside");
        }
        const changeColorAside = (container) => {
            container.addClass("image-from-aside"); 
            if (container.hasClass("image-from-main"));
                container.removeClass("image-from-main");  
        }
    
        producto1.addEventListener('mouseenter', ()=>{
            $("#fixed-img").removeClass("hidden");
            changeColorMain($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgProducto1").src, document.getElementById("descProducto1").innerHTML)
        });
        producto1.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        producto2.addEventListener('mouseenter', ()=>{ 
            $("#fixed-img").removeClass("hidden");
            changeColorMain($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgProducto2").src, document.getElementById("descProducto2").innerHTML)
        });
        producto2.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        producto3.addEventListener('mouseenter', ()=>{
            $("#fixed-img").removeClass("hidden");
            changeColorMain($("#fixed-img")); 
            addImgAndDesc(document.getElementById("imgProducto3").src, document.getElementById("descProducto3").innerHTML)

        });
        producto3.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        producto4.addEventListener('mouseenter', ()=>{ 
            $("#fixed-img").removeClass("hidden");
            changeColorMain($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgProducto4").src, document.getElementById("descProducto5").innerHTML)
        });
        producto4.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        producto5.addEventListener('mouseenter', ()=>{ 
            $("#fixed-img").removeClass("hidden");
            changeColorMain($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgProducto5").src, document.getElementById("descProducto5").innerHTML)
        });
        producto5.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        producto6.addEventListener('mouseenter', ()=>{ 
            $("#fixed-img").removeClass("hidden");
            changeColorMain($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgProducto6").src, document.getElementById("descProducto6").innerHTML)
        });
        producto6.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        aside1.addEventListener('mouseenter', ()=>{ 
            $("#fixed-img").removeClass("hidden");
            changeColorAside($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgAside1").src, document.getElementById("descAside1").innerHTML)

        });
        aside1.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        aside2.addEventListener('mouseenter', ()=>{ 
            $("#fixed-img").removeClass("hidden");
            changeColorAside($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgAside2").src, document.getElementById("descAside2").innerHTML)
        });
        aside2.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        aside3.addEventListener('mouseenter', ()=>{ 
            $("#fixed-img").removeClass("hidden");
            changeColorAside($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgAside3").src, document.getElementById("descAside3").innerHTML)
        });
        aside3.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });

        aside4.addEventListener('mouseenter', ()=>{ 
            $("#fixed-img").removeClass("hidden");
            changeColorAside($("#fixed-img"));
            addImgAndDesc(document.getElementById("imgAside4").src, document.getElementById("descAside4").innerHTML)
        });
        aside4.addEventListener('mouseleave', ()=>{
            $("#fixed-img").addClass("hidden")
        });
    }
});