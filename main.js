alert('Bienvenido a Envíos Hellyes');

alert('Para una mejor atención, por favor, ingresa tu nombre');
let usuario = prompt('Ingresa tu nombre');

let email = '';
let confirmemail = '';
let coincide = true;

do {
    email = prompt('Gracias ' + usuario + ', ahora, ingresá tu correo electrónico');
    confirmemail = prompt('Para iniciar sesión, volvé a escribir tu correo');

    if (email === confirmemail) {
        alert('Bienvenido a Envíos Hellyes');
        coincide = false;
    } else {
        alert('Los correos no coinciden');
    }
} while (coincide);

const Despacho = () => {
    let servicio = '';
    let cantidad = 0;
    let precio = 0;
    let subtotal = 0;
    let seguirCompra = true;

    do {
        servicio = prompt('Si tu envío es para CABA o GBA, ingresa el número 1. Si tu envío es para el resto del pais, ingresa el número 2. Si tu envío es para el exterior, ingresa el número 3.')
        cantidad = parseInt(prompt('Indica la cantidad'))

        let cantidadvalidada = validarCantidad(cantidad)

        switch (servicio) {
            case '1':
                precio = 2000
                break;
            case '2':
                precio = 3500
                break;
            case '3': 
                precio = 10000
                break;
        
            default:
                alert('Tu elección no es valida')
                precio = 0
                cantidad = 0
                break;
        }

        subtotal += precio * cantidadvalidada

        seguirCompra = confirm('Desea agregar otro despacho?')
    } while (seguirCompra);

    return subtotal
}

const validarCantidad = (cantidad) => {

while (Number.isNaN(cantidad) || cantidad <= 0) {
    alert('Debe agregar una cantidad valida!')
    cantidad = parseInt(prompt('Indique la cantidad de bultos'))
}

return cantidad
}

let resultado = Despacho()
alert('Su monto final es '+resultado+'')