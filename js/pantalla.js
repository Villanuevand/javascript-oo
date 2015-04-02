/**
 * Created by Andres on 31/03/2015.
 */
function Pantalla(){
    this._nombre = '';
}

Pantalla.prototype.setNombre = function(nombre){
    this._nombre = nombre;
};

Pantalla.prototype.getNombre = function(){
    return this._nombre;
};

Pantalla.prototype.mostrar = function(){
    //Código para mostrar la pantalla
};

Pantalla.prototype.ocultar = function(){
    //Código para ocultar la pantalla
};

Pantalla.prototype.destriur = function(){
    //Código para destriur la pantalla
};
