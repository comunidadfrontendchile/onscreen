## jQuery onScreen plugin ##
Set de selectores personalizados para detectar la posición de los elementos en relación al scroll del navegador.


----------
### Dependencias ###

 - jQuery 1.7+

----------
### Uso ###

    // selecciona todos los <div>s actualmente visibles en la pantalla
    $('div:onscreen');
    
    // selecciona todos los <div>s que están por sobre el scroll (arriba de la pantalla)
    $('div:passedscroll');
    
    // selecciona todos los <div>s actualmente escondidos bajo el scroll (abajo de la pantalla)
    $('div:hiddeninbottom');
