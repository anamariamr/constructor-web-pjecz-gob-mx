Title: Abogados Registrados
Summary: Consultar las y los abogados registrados en el Poder Judicial del Estado de Coahuila de Zaragoza.
Slug: consultas-abogados-registrados
URL: consultas/abogados-registrados/
Save_As: consultas/abogados-registrados/index.html
Date: 2020-06-17 10:42:00
Modified: 2021-02-15 10:38:00
JavaScripts: consultas-abogados-registrados.js


<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../">Consultas</a></li>
        <li class="breadcrumb-item active" aria-current="page">Abogados registrados</li>
    </ol>
</nav>

## Instrucciones

1. Escriba parte del nombre; preferentemente los apellidos paterno y materno. No use acentos, eñes, diéresis o caracteres especiales.
2. Puede cambiar el rango de años de registro. El año "desde" debe ser igual o menor al año "hasta".
3. Presione el botón **Consultar** y espere a que se carguen. Como máximo verá 100 resultados.
4. Puede usar el campo **Filtrar** para encontrar algo específico entre los resultados.

<div class="card mb-2">
    <div class="card-body">
        <form id="abogadosForm">
            <div class="form-group">
                <label for="nombreInput">Nombre</label>
                <input id="nombreInput" type="text" class="form-control" aria-describedby="nombreInputHelp">
                <small id="nombreInputHelp" class="form-text text-muted">No use acentos, eñes, diéresis o caracteres especiales.</small>
            </div>
            <div class="form-group">
                <label for="anoDesdeSelect">Año de registro, desde:</label>
                <select id="anoDesdeSelect" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="anoHastaSelect">Año de registro, hasta:</label>
                <select id="anoHastaSelect" class="form-control"></select>
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
<div id="abogadosRegistrados" class="card mb-2" style="display: none;">
    <div class="card-body">
        <table id="abogadosRegistradosTable" class="table" style="width: 100%;">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Libro</th>
                    <th>Número</th>
                    <th>Nombre</th>
                </tr>
            </thead>
        </table>
    </div>
</div>

## Requisitos para el Registro de Títulos de Abogados

1. Título Legalizado (Registrado en la Dirección de Procedimientos y Trámites, Calle Victoria 608 entre Xicoténcatl y Obregón. Cuarto Piso. Tel: 844-411-1200).
2. Original y Copia del Título.
3. Escrito dirigido al **Lic. Miguel Felipe Mery Ayup Presidente del Tribunal Superior de Justicia del Estado de Coahuila de Zaragoza,** solicitando el Registro del Título y Expedición de la Constancia del registro (original y copia).
4. Copia de Identificación con fotografía.
5. 3 Fotografías tamaño infantil.
6. $6.00 por copia del Título y Constancia del Registro del Título (para archivo).
