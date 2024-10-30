function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let match;

    while (match = regex.exec(queryString)) {
        params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }

    return params;
}

document.addEventListener('DOMContentLoaded', function() {
    const params = getQueryParams();

    document.getElementById('total-compra').innerText = params.totalCompra;
    document.getElementById('total-envio').innerText = params.totalEnvio;
    document.getElementById('total-pedido').innerText = params.totalPedido;

    // Recuperar el método de pago desde localStorage
    const metodoPago = localStorage.getItem('metodoPago');
    if (metodoPago) {
        document.querySelector('.detail p:nth-child(2)').innerText = metodoPago;
    }
});
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let match;

    while (match = regex.exec(queryString)) {
        params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }

    return params;
}

document.addEventListener('DOMContentLoaded', function() {
    const params = getQueryParams();

    // Mostrar los totales de compra, envío y pedido
    document.getElementById('total-compra').innerText = params.totalCompra;
    document.getElementById('total-envio').innerText = params.totalEnvio;
    document.getElementById('total-pedido').innerText = params.totalPedido;

    // Mostrar el método de pago desde los parámetros de la URL
    if (params.metodoPago) {
        document.querySelector('.detail p:nth-child(2)').innerText = params.metodoPago;
    }

    // Mostrar la fecha actual en la factura
    const fechaActual = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('fecha-actual').innerText = fechaActual.toLocaleDateString('es-ES', opcionesFecha);

    // Calcular la fecha estimada de entrega (5 días después)
    const fechaEntregaEstimada = new Date();
    fechaEntregaEstimada.setDate(fechaEntregaEstimada.getDate() + 5);
    document.getElementById('fecha-estimada-entrega').innerText = fechaEntregaEstimada.toLocaleDateString('es-ES', opcionesFecha);
});


