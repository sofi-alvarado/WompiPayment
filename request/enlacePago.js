class EnlacePago {
    constructor(){
        // Datos para la creacion del enlace de pago
        this.identificadorEnlaceComercio = ""
        this.monto = 0
        this.nombreProducto = ""
        this.formaPago = {
            permitirTarjetaCreditoDebido: true,
            permitirPagoConPuntoAgricola: true,
            permitirPagoEnCuotasAgricola: false
        }
        this.infoProducto = {
            descripcionProducto: "",
            //No requerido, de tipo string, imagen del producto a vender
            urlImagenProducto: ""
        }
        this.configuracion = {
            //No requerido, indica si el usuario puede elegir el precio a pagar
            esMontoEditable: false,
            //No requerido, indica si el usuario puede elegir la cantidad de productos
            esCantidadEditable: false,
            //No requerido, indica la cantidad por defecto del producto a pagar
            cantidadPorDefecto: 1,
             //No requerido, Email del negocio a notificar si la compra fue exitosa
             // Se puede agregar masa de uno, separados por comas email1@gmail.com,email2@gmail.com
            emailsNotificacion: "",
            telefonosNotificacion: "",
            // Requerido, Wompi debe enviara una notificación por correo al cliente después de efectuar una transacción exitosa. El correo del cliente es capturado en la interfaz de pago.
            notificarTransaccionCliente : true
            
        }
    }

    /**
     * value is String example, Tres,Seis,Nueve,Doce config this with the checkAplicativo method in request
     */
    enablePagoCuotas(value){
        this.formaPago.permitirPagoEnCuotasAgricola = true
        this.cantidadMaximaCuotas = value || "Tres"
    }

    /*
        url = image url 
    */
    asignUrlImage(url){
        this.infoProducto.urlImagenProducto = url
    }
    /**
     * 
     * @param {*} url  redirect when the transacction was completed
     */
    asignUrlRedirect(url){
        this.configuracion.urlRedirect = url
    }
    getObject(){
        return JSON.stringify(this)
    }
    
}

module.exports = new EnlacePago()