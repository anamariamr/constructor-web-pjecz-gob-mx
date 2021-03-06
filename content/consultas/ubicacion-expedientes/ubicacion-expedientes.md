Title: Versión Pública Ubicación de Expedientes
Summary: Servicio para informar a los justiciables de dónde se encuentran los Expedientes.
Slug: consultas-ubicacion-expedientes
URL: consultas/ubicacion-expedientes/
Save_As: consultas/ubicacion-expedientes/index.html
Date: 2021-02-17 14:22:00
Modified: 2021-02-17 14:22:00
JavaScripts: consultas-ubicacion-expedientes.js


<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../">Consultas</a></li>
        <li class="breadcrumb-item active" aria-current="page">Ubicación de Expedientes</li>
    </ol>
</nav>

## Instrucciones

1. Favor de seleccionar el **Distrito Judicial** (lista desplegable con los 8 distritos incluyendo tribunales, salas y pleno).
2. Seleccione el **Juzgado**, donde encontará los del distrito seleccionado.
3. Escriba el **Número de expediente** como número-diagonal-año; por ejemplo: 1/2021
4. Posteriormente presione el botón **Consultar** y espere a que se carguen los expedientes.
5. Para buscar por expediente favor de ingresar en la opción **Filtrar** el número de expediente que desee encontrar; por ejemplo **0025/2021**.
6. **Nota:** Si un expediente en particular no se encuentra en el listado favor de revisar con el juzgado correspondiente.

<div class="card mb-2">
    <div class="card-body">
        <form id="ubicacionExpedientesForm">
            <div class="form-group">
                <label for="distritoSelect">Distrito Judicial:</label>
                <select id="distritoSelect" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="autoridadSelect">Juzgado:</label>
                <select id="autoridadSelect" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="expedienteInput">Número de expediente</label>
                <input id="expedienteInput" type="text" class="form-control" aria-describedby="expedienteInputHelp">
                <small id="expedienteInputHelp" class="form-text text-muted">No use acentos, eñes, diéresis o caracteres especiales.</small>
            </div>
            <button id="consultarButton" type="button" class="btn btn-primary">
                Consultar
            </button>
            <button id="cargandoButton" class="btn btn-primary" type="button"  style="display: none;" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Cargando...
            </button>
        </form>
    </div>
</div>
<div id="revisarParametros" class="card mb-2" style="display: none;">
    <div class="card-body">
        <div id="revisarParametrosAlert" class="alert alert-primary" role="alert"></div>
    </div>
</div>
<div id="sinResultados" class="card mb-2" style="display: none;">
    <div class="card-body">
        <div id="sinResultadosAlert" class="alert alert-warning" role="alert"></div>
    </div>
</div>
<div id="ubicacionExpedientes" class="card mb-2" style="display: none;">
    <div class="card-body">
        <table id="ubicacionExpedientesTable" class="table" style="width: 100%;">
            <thead>
                <tr>
                    <th>Expediente</th>
                    <th>Ubicación</th>
                </tr>
            </thead>
        </table>
    </div>
</div>
