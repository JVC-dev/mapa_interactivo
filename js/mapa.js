
// Información de cada departamento de El Salvador
const infoDepartamentos = {
    'SVAH': {
        nombre: 'Ahuachapán',
        cabecera: 'Ahuachapán',
        poblacion: '333,406 habitantes',
        extension: '1,239.6 km²',
        descripcion: 'Conocido por sus cultivos de café y sus aguas termales.',
        zona: 'Occidental',
        archivo: 'Ahuchapán.html'
    },
    'SVSA': {
        nombre: 'Santa Ana',
        cabecera: 'Santa Ana',
        poblacion: '572,081 habitantes',
        extension: '2,023.2 km²',
        descripcion: 'Segunda ciudad más importante del país, famosa por su catedral y volcanes.',
        zona: 'Occidental',
        archivo: 'SantaAna.html'
    },
    'SVSO': {
        nombre: 'Sonsonate',
        cabecera: 'Sonsonate',
        poblacion: '462,399 habitantes',
        extension: '1,225.8 km²',
        descripcion: 'Conocido por sus playas y producción agrícola.',
        zona: 'Occidental',
        archivo: 'Sonsonate.html'
    },
    'SVLI': {
        nombre: 'La Libertad',
        cabecera: 'Santa Tecla',
        poblacion: '660,652 habitantes',
        extension: '1,652.9 km²',
        descripcion: 'Famoso por sus playas y desarrollo turístico.',
        zona: 'Central',
        archivo: 'LaLibertad.html'
    },
    'SVCH': {
        nombre: 'Chalatenango',
        cabecera: 'Chalatenango',
        poblacion: '192,788 habitantes',
        extension: '2,016.6 km²',
        descripcion: 'Departamento montañoso con clima fresco y paisajes naturales.',
        zona: 'Central',
        archivo: 'Chalatenango.html'
    },
    'SVCU': {
        nombre: 'Cuscatlán',
        cabecera: 'Cojutepeque',
        poblacion: '252,528 habitantes',
        extension: '756.2 km²',
        descripcion: 'Departamento pequeño pero importante históricamente.',
        zona: 'Central',
        archivo: 'Cuscatlán.html'
    },
    'SVSS': {
        nombre: 'San Salvador',
        cabecera: 'San Salvador',
        poblacion: '1,740,847 habitantes',
        extension: '886.2 km²',
        descripcion: 'Capital del país y centro económico y político.',
        zona: 'Central',
        archivo: 'sansalvador.html'
    },
    'SVPA': {
        nombre: 'La Paz',
        cabecera: 'Zacatecoluca',
        poblacion: '328,221 habitantes',
        extension: '1,223.6 km²',
        descripcion: 'Importante zona agrícola y ganadera.',
        zona: 'Central',
        archivo: 'LaPaz.html'
    },
    'SVCA': {
        nombre: 'Cabañas',
        cabecera: 'Sensuntepeque',
        poblacion: '149,326 habitantes',
        extension: '1,103.5 km²',
        descripcion: 'Rico en historia y sitios arqueológicos.',
        zona: 'Central',
        archivo: 'Cabañas.html'
    },
    'SVSV': {
        nombre: 'San Vicente',
        cabecera: 'San Vicente',
        poblacion: '174,561 habitantes',
        extension: '1,184.0 km²',
        descripcion: 'Destaca por el volcán Chinchontepec.',
        zona: 'Central',
        archivo: 'San vicente.html'
    },
    'SVUS': {
        nombre: 'Usulután',
        cabecera: 'Usulután',
        poblacion: '366,040 habitantes',
        extension: '2,130.4 km²',
        descripcion: 'Conocido como "La Perla de Oriente".',
        zona: 'Oriental',
        archivo: 'Usulutan.html'
    },
    'SVSM': {
        nombre: 'San Miguel',
        cabecera: 'San Miguel',
        poblacion: '478,792 habitantes',
        extension: '2,077.1 km²',
        descripcion: 'Famosa por su carnaval y el volcán Chaparrastique.',
        zona: 'Oriental',
        archivo: 'SanMiguel.html'
    },
    'SVMO': {
        nombre: 'Morazán',
        cabecera: 'San Francisco Gotera',
        poblacion: '174,406 habitantes',
        extension: '1,447.4 km²',
        descripcion: 'Conocido por su historia durante el conflicto armado.',
        zona: 'Oriental',
        archivo: 'Morazán.html'
    },
    'SVUN': {
        nombre: 'La Unión',
        cabecera: 'La Unión',
        poblacion: '238,217 habitantes',
        extension: '2,074.3 km²',
        descripcion: 'Principal puerto marítimo del país.',
        zona: 'Oriental',
        archivo: 'La Union.html'
    }
};

// Crear tooltip dinámicamente
function crearTooltip() {
    const tooltip = document.createElement('div');
    tooltip.id = 'mapa-tooltip';
    tooltip.className = 'mapa-tooltip';
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.95);
        color: white;
        padding: 15px;
        border-radius: 8px;
        font-size: 14px;
        pointer-events: none;
        z-index: 1000;
        max-width: 300px;
        display: none;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        border: 2px solid #8283da;
        font-family: "Poppins", sans-serif;
    `;
    document.body.appendChild(tooltip);
    return tooltip;
}

// Inicializar el mapa
function inicializarMapa() {
    const tooltip = crearTooltip();
    const departamentos = document.querySelectorAll('#features path');
    
    // Agregar clase a los departamentos para el CSS
    departamentos.forEach(depto => {
        depto.classList.add('departamento-interactivo');
        
        // Evento mouseenter
        depto.addEventListener('mouseenter', function(event) {
            const deptoId = this.id;
            const info = infoDepartamentos[deptoId];
            
            if (info) {
                const contenido = `
                    <h3 style="margin: 0 0 10px 0; color: #9aadff; border-bottom: 1px solid #9aadff; padding-bottom: 5px;">${info.nombre}</h3>
                    <p style="margin: 5px 0;"><strong>Cabecera:</strong> ${info.cabecera}</p>
                    <p style="margin: 5px 0;"><strong>Zona:</strong> ${info.zona}</p>
                    <p style="margin: 5px 0;"><strong>Población:</strong> ${info.poblacion}</p>
                    <p style="margin: 5px 0;"><strong>Extensión:</strong> ${info.extension}</p>
                    <p style="margin: 5px 0;"><strong>Descripción:</strong> ${info.descripcion}</p>
                    <p style="margin: 5px 0; font-size: 12px; color: #9aadff;"><i>Haz clic para más información</i></p>
                `;
                
                tooltip.innerHTML = contenido;
                tooltip.style.display = 'block';
                
                // Resaltar departamento
                this.style.fill = '#9aadff';
                this.style.stroke = '#ffffff';
                this.style.strokeWidth = '2px';
                
                actualizarPosicionTooltip(event, tooltip);
            }
        });
        
        // Evento mousemove
        depto.addEventListener('mousemove', function(event) {
            if (tooltip.style.display === 'block') {
                actualizarPosicionTooltip(event, tooltip);
            }
        });
        
        // Evento mouseleave
        depto.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
            // Restaurar color original
            this.style.fill = '#3d404b';
            this.style.stroke = '#8283da';
            this.style.strokeWidth = '0.5px';
        });
        
        // Evento click para redirección
        depto.addEventListener('click', function() {
            const deptoId = this.id;
            const info = infoDepartamentos[deptoId];
            if (info && info.archivo) {
                // Redireccionar a la página correspondiente
                window.location.href = `pages/${info.archivo}`;
            }
        });
        
        // Mejorar accesibilidad
        depto.setAttribute('tabindex', '0');
        depto.setAttribute('role', 'button');
        depto.setAttribute('aria-label', `Información de ${infoDepartamentos[depto.id]?.nombre || 'departamento'}`);
    });
    
    console.log('Mapa interactivo inicializado correctamente');
}

// Función para actualizar posición del tooltip
function actualizarPosicionTooltip(event, tooltip) {
    const x = event.pageX + 15;
    const y = event.pageY + 15;
    
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    
    // Asegurar que el tooltip no se salga de la pantalla
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (x + tooltipRect.width > viewportWidth) {
        tooltip.style.left = (event.pageX - tooltipRect.width - 15) + 'px';
    }
    
    if (y + tooltipRect.height > viewportHeight) {
        tooltip.style.top = (event.pageY - tooltipRect.height - 15) + 'px';
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    inicializarMapa();
});

// También inicializar si la página ya está cargada
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarMapa);
} else {
    inicializarMapa();
}