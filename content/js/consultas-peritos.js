// Consultas Peritos
$(document).ready(function() {

    // Para desarrollo
    //const DISTRITOS_PLATAFORMA_WEB_API_URL = "http://localhost:8000/distritos"
    //const PERITOS_PLATAFORMA_WEB_API_URL = "http://localhost:8000/peritos"


    // Para producción
    const DISTRITOS_PLATAFORMA_WEB_API_URL = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/distritos"
    const PERITOS_PLATAFORMA_WEB_API_URL = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/peritos"

    // Llamar a la API de Distritos para alimentar distritoSelect
    $.ajax({
        'url': DISTRITOS_PLATAFORMA_WEB_API_URL,
        'type': "GET",
        'dataType': "json",
        'success': function(dataDistritos) {
            alRecibirDistritos(dataDistritos);
        }
    });

    function alRecibirDistritos(dataDistritos) {
        $.each(dataDistritos, function(i, distrito) {
            $('#distritoSelect').append($('<option>', {
                value: distrito.id,
                text: distrito.nombre
            }));
        });
    };


    // Al dar clic en el botón Consultar
    $('#consultarButton').click(function() {

        // Validar
        var valido = true;
        if ($('#nombreInput').val().trim() == '') {
            $('#revisarParametrosAlert').text("Falta el nombre.");
            valido = false;
        };

        // Si es válido el formulario
        if (valido) {
            // Ocultar botón Consultar, mostrar botón Cargando... y ocultar mensaje Sin resultados
            $('#consultarButton').hide();
            $('#cargandoButton').show();
            $('#revisarParametros').hide();
            $('#sinResultados').hide();
            // Llamar a la API y ejecutar acciones hasta recibir resultados
            $.ajax({
                'url': PERITOS_PLATAFORMA_WEB_API_URL,
                'type': "GET",
                'data': {
                    'distrito': $('#autoridadSelect').val(),
                    'nombre': $('#nombreInput').val().trim()
                },
                'dataType': "json",
                'success': function(data) {
                    alRecibirResultados(data);
                }
            });
        } else {
            $('#revisarParametros').show();
            $('#peritosRegistrados').hide();
        };

    });

    // Al recibir los datos de la API
    function alRecibirResultados(data) {

        // Si tiene datos, limpiar la tabla
        if ($('#peritosRegistradosTable').length > 0) {
            $('#peritosRegistradosTable').DataTable().clear();
            $('#peritosRegistradosTable').DataTable().destroy();
        };

        // Si no hay resultados, muestra mensaje y termina
        if (data.length == 0) {
            $('#cargandoButton').hide();
            $('#consultarButton').show();
            $('#sinResultados').show();
            $('#sinResultadosAlert').text("No se encontraron expedientes registrados con las opciones dadas.");
            $('#peritosRegistrados').hide();
            return;
        };

        // Mostrar tabla
        $('#peritosRegistrados').show();

        // DataTable
        $('#peritosRegistradosTable').DataTable({
            'data': data,
            'columns': [
                { 'data': "distrito", 'width': "30%" },
                { 'data': "tipo", 'width': "30%" },
                { 'data': "nombre", 'width': "40%" }
            ],
            'pageLength': 10,
            'language': {
                'lengthMenu': "Mostrar _MENU_",
                'search': "Filtrar:",
                'zeroRecords': "Cargando información...",
                'info': "Página _PAGE_ de _PAGES_",
                'infoEmpty': "No hay registros",
                'infoFiltered': "(filtrados desde _MAX_ registros totales)",
                'oPaginate': {
                    'sFirst': "Primero",
                    'sLast': "Último",
                    'sNext': "Siguiente",
                    'sPrevious': "Anterior"
                }
            }
        });

        // Mostrar botón Consultar y ocultar botón Cargando...
        $('#consultarButton').show();
        $('#cargandoButton').hide();

    }; // Al recibir los datos de la API

});