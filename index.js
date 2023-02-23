const { generateToken, generateEnlacePago, checkAplicativo, checkEnlacePago, disableEnlacePago } = require('./request/request')
const EnlacePagoObject = require('./request/EnlacePago')

const APIID = " "
const SECRET = " "

const testToken = async () => {
    const token = await generateToken(APIID, SECRET)
    EnlacePagoObject.identificadorEnlaceComercio = "Pasteleria More's"
    //Precio del producto, tipo de dato debe ser double
    EnlacePagoObject.monto = 15.0
    //Nombre del producto a vender
    EnlacePagoObject.nombreProducto = "Pastel de Cumpleaños"
    EnlacePagoObject.infoProducto.descripcionProducto = "Pastel perzonalizado 'Feliz Cumpleaños', 12 porciones"
    EnlacePagoObject.infoProducto.urlImagenProducto = "https://instagram.fsal2-1.fna.fbcdn.net/v/t51.2885-15/309714194_624054382545127_7131353703509235254_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fsal2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4ux9kBYV05gAX8R6Crg&tn=s2TIFsyQrTD7sOl2&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MTQyNDM1ODE5MjIwMTE3OQ%3D%3D.2-ccb7-5&oh=00_AfA-Y-6RZixRF7yheKAmnZMhN4pOYYrPEOqzfuZ91a1gHw&oe=63603A9A&_nc_sid=30a2ef"
    //URL en donde el cliente sera redirigido si el pago es exitoso
    EnlacePagoObject.asignUrlRedirect('https://www.instagram.com/mores.sss/')
    //Email del negocio a notificar si la compra fue exitosa
    EnlacePagoObject.configuracion.emailsNotificacion = " "
    //Numero de telefono sin guiones, solo se aceptan numeros de El Salvador
    EnlacePagoObject.configuracion.telefonosNotificacion = " "

    //const pagaLink = await generateEnlacePago(EnlacePagoObject.getObject(), token)
    //console.log(pagaLink)
    // DISABLE ENLACE PAGO
    //console.log(await disableEnlacePago(506889,token))

    // Check Aplicativo
    //console.log(await checkAplicativo(token))
    console.log(await checkEnlacePago(506889, token))
}

testToken()
