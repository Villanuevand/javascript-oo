/**
 * Created by Andres on 31/03/2015.
 */
function MiApp(){
    this.pantallaActual = null;
}

//Porpiedades estáticas
MiApp.PANTALLA_MENU = 'MENU';
MiApp.PANTALLA_DETALLE = 'DETALLE';

MiApp.prototype.inicializar = function () {
    this.actualizarPantalla(MiApp.PANTALLA_MENU);
};

MiApp.prototype.actualizarPantalla = function (nuevaPantalla) {
    if(this.pantallaActual === null || nuevaPantalla !== this.pantallaActual.getNombre()){
        if(this.pantallaActual !== null){
            this.pantallaActual.ocultar();
            this.pantallaActual.destriur();
        }
    }
    switch (nuevaPantalla){
        case MiApp.PANTALLA_MENU :
            this.pantallaActual = new PantallaMenu();
            break;
        case MiApp.PANTALLA_DETALLE :
            this.pantallaActual = new PantallaDetalle();
            break;
    }

    this.pantallaActual.setNombre(nuevaPantalla);
    this.pantallaActual.mostrar();
};