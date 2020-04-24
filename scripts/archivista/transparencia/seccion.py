import os


class Seccion(object):
    """ Sección de una página """

    def __init__(self, encabezado='', markdown=''):
        self.encabezado = encabezado
        self.archivo_markdown_ruta = None
        self.markdown = markdown
        self.descargables = []
        if self.markdown == '':
            self.cargado = False
        else:
            self.cargado = True

    def agregar_descargable(self, archivo_ruta):
        """ Agregar la ruta a un archivo descargable """
        if os.path.exists(archivo_ruta) and os.path.isfile(archivo_ruta):
            self.descargables.append(archivo_ruta)
            self.cargado = True

    def cargar(self, archivo_markdown_ruta):
        """ Cargar el contenido de un archivo markdown """
        self.archivo_markdown_ruta = archivo_markdown_ruta
        if os.path.exists(self.archivo_markdown_ruta) and os.path.isfile(self.archivo_markdown_ruta):
            with open(self.archivo_markdown_ruta, 'r') as f:
                self.markdown = f.read()
        self.cargado = True

    def contenido(self):
        """ Entregar el contenido markdown de esta sección """
        salida = []
        if self.cargado:
            if self.encabezado != '':
                salida.append(f'### {self.encabezado}\n\n')
            if self.markdown != '':
                salida.append(f'{self.markdown}\n\n')
            if len(self.descargables) > 0:
                listado = []
                for descargable in self.descargables:
                    nombre = os.path.basename(descargable)
                    vinculo = '#'
                    listado.append(f'* [{nombre}]({vinculo})')
                salida.append('\n'.join(listado))
                salida.append('\n')
            return('\n'.join(salida))
        else:
            return('Sección sin contenido.')

    def __repr__(self):
        if self.cargado:
            mensajes = []
            if self.archivo_markdown_ruta != None:
                mensajes.append(os.path.basename(self.archivo_markdown_ruta))
            elif self.markdown != '':
                mensajes.append('+md+')
            if len(self.descargables) > 0:
                nombres = []
                for descargable in self.descargables:
                    nombres.append(os.path.basename(descargable))
                mensajes.append('(' + ') ('.join(nombres) + ')')
            if self.encabezado != '':
                return(f'<Seccion> "{self.encabezado}" ' + ', '.join(mensajes))
            else:
                return('<Seccion> ' + ', '.join(mensajes))
        else:
            return('<Seccion> SIN CONTENIDO')
