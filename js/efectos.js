$(document).ready(function(){

    //Efecto Menu

    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    //Efecto Header

    if($(window).width() > 800 ){ //Aqui le estamos diciendo que el efecto del header se va aplicar si el tama;o de la pantalla es mayor a 800px
        $('header .textos').css({
            opacity:0,
            margintop:0
        });

        $('header .textos').animate({
            opacity: 1,
            margintop: '-52px'
        }, 2000);
    }

    //Scroll Elementos Menu

    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top; //no se para que sirve el metodo .offset ni el metodo .top

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 75
        }, 500);
    });

        $('#btn-menu').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: menu - 20
            }, 500);
    
});

        $('#btn-galeria').on('click', function(e){
             e.preventDefault();
              $('html, body').animate({
               scrollTop: galeria - 20
             }, 500);

});

$('#btn-contacto').on('click', function(e){
    e.preventDefault();
     $('html, body').animate({
      scrollTop: ubicacion - 20
    }, 500);

});

});

