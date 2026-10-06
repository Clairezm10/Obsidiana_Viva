// ===== BASE DE DATOS DE PRODUCTOS =====
const productos = [
    // Anillos
    {
        id: 1,
        nombre: 'Anillo de Diamante Solitario',
        categoria: 'Anillos',
        descripcion: 'Anillo en oro blanco 18k con diamante de 1 quilate',
        precio: 5000.00,
        stock: 5,
        imagen: 'img/anillo-diamante.jpg'
    },
    {
        id: 2,
        nombre: 'Anillo de Ópalo Argentino',
        categoria: 'Anillos',
        descripcion: 'Anillo de plata 925 con ópalo precioso',
        precio: 850.00,
        stock: 12,
        imagen: 'img/anillo-opalo.jpg'
    },
    {
        id: 3,
        nombre: 'Anillo de Amatista',
        categoria: 'Anillos',
        descripcion: 'Anillo en plata esterlina con amatista pulida',
        precio: 450.00,
        stock: 8,
        imagen: 'img/anillo-amatista.jpg'
    },
    {
        id: 4,
        nombre: 'Anillo Obsidiana Negra',
        categoria: 'Anillos',
        descripcion: 'Anillo artesanal con obsidiana volcánica',
        precio: 320.00,
        stock: 15,
        imagen: 'img/anillo-obsidiana.jpg'
    },
    // Collares
    {
        id: 5,
        nombre: 'Collar Cadena Oro 18k',
        categoria: 'Collares',
        descripcion: 'Collar cadena fina en oro amarillo 18 quilates',
        precio: 2500.00,
        stock: 7,
        imagen: 'img/collar-oro.jpg'
    },
    {
        id: 6,
        nombre: 'Collar Plata con Cristal',
        categoria: 'Collares',
        descripcion: 'Collar en plata 925 con colgante de cristal transparente',
        precio: 680.00,
        stock: 10,
        imagen: 'img/collar-cristal.png'
    },
    {
        id: 7,
        nombre: 'Collar Turquesa Natural',
        categoria: 'Collares',
        descripcion: 'Collar étnico con turquesa mexicana auténtica',
        precio: 750.00,
        stock: 6,
        imagen: 'img/collar-turquesa.jpg'
    },
    {
        id: 8,
        nombre: 'Collar Obsidiana Viva',
        categoria: 'Collares',
        descripcion: 'Collar con colgante de obsidiana negra pulida',
        precio: 420.00,
        stock: 18,
        imagen: 'img/collar-obsidiana.jpg'
    },
    // Pulseras
    {
        id: 9,
        nombre: 'Pulsera Tenis de Diamantes',
        categoria: 'Pulseras',
        descripcion: 'Pulsera con diamantes engarzados en oro blanco',
        precio: 3800.00,
        stock: 4,
        imagen: 'img/pulsera-diamantes.jpg'
    },
    {
        id: 10,
        nombre: 'Pulsera Plata Eslabones',
        categoria: 'Pulseras',
        descripcion: 'Pulsera de plata 925 con eslabones gruesos',
        precio: 920.00,
        stock: 9,
        imagen: 'img/pulsera-eslabones.jpg'
    },
    {
        id: 11,
        nombre: 'Pulsera Cuarzo Rosa',
        categoria: 'Pulseras',
        descripcion: 'Pulsera con perlas de cuarzo rosa natural',
        precio: 580.00,
        stock: 14,
        imagen: 'img/pulsera-cuarzo.jpg'
    },
    {
        id: 12,
        nombre: 'Pulsera Magnética',
        categoria: 'Pulseras',
        descripcion: 'Pulsera con cuentas magnéticas y obsidiana',
        precio: 340.00,
        stock: 20,
        imagen: 'img/pulsera-magnetica.jpg'
    },
    // Aretes
    {
        id: 13,
        nombre: 'Aretes Diamante Doble',
        categoria: 'Aretes',
        descripcion: 'Par de aretes en oro amarillo con diamantes',
        precio: 2200.00,
        stock: 8,
        imagen: 'img/aretes-diamante.jpg'
    },
    {
        id: 14,
        nombre: 'Aretes Perla Blanca',
        categoria: 'Aretes',
        descripcion: 'Aretes con perlas cultivo de agua dulce',
        precio: 450.00,
        stock: 12,
        imagen: 'img/aretes-perla.jpg'
    },
    {
        id: 15,
        nombre: 'Aretes Obsidiana',
        categoria: 'Aretes',
        descripcion: 'Aretes artesanales con obsidiana pulida',
        precio: 280.00,
        stock: 16,
        imagen: 'img/aretes-obsidiana.jpg'
    },
    {
        id: 16,
        nombre: 'Aretes Jade Verde',
        categoria: 'Aretes',
        descripcion: 'Aretes tradicionales con jade verde oscuro',
        precio: 650.00,
        stock: 11,
        imagen: 'img/aretes-jade.jpg'
    },
    // Broches
    {
        id: 17,
        nombre: 'Broche Diamante Clásico',
        categoria: 'Broches',
        descripcion: 'Broche en oro blanco 18k con diamante solitario',
        precio: 2800.00,
        stock: 6,
        imagen: 'img/broche-diamante.jpg'
    },
    {
        id: 18,
        nombre: 'Broche Perla Natural',
        categoria: 'Broches',
        descripcion: 'Broche artesanal con perla natural engarzada en plata',
        precio: 1200.00,
        stock: 8,
        imagen: 'img/broche-perla.jpg'
    },
    {
        id: 19,
        nombre: 'Broche Rubí y Oro',
        categoria: 'Broches',
        descripcion: 'Broche vintage en oro amarillo con rubí birmano',
        precio: 3500.00,
        stock: 4,
        imagen: 'img/broche-rubi.jpg'
    },
    {
        id: 20,
        nombre: 'Broche Cristal Austriaco',
        categoria: 'Broches',
        descripcion: 'Broche decorativo con cristales austriacos brillantes',
        precio: 580.00,
        stock: 14,
        imagen: 'img/broche-cristal.jpeg'
    },
    {
        id: 21,
        nombre: 'Broche Obsidiana Pulida',
        categoria: 'Broches',
        descripcion: 'Broche artesanal con obsidiana negra volcánica',
        precio: 390.00,
        stock: 10,
        imagen: 'img/broche-obsidiana.jpg'
    },
    {
        id: 22,
        nombre: 'Broche Turquesa Mexicana',
        categoria: 'Broches',
        descripcion: 'Broche étnico con turquesa auténtica de Sonora',
        precio: 950.00,
        stock: 7,
        imagen: 'img/broche-turquesa.jpg'
    },
    {
        id: 23,
        nombre: 'Broche Camafeo Antiguo',
        categoria: 'Broches',
        descripcion: 'Broche con camafeo tallado a mano',
        precio: 2100.00,
        stock: 5,
        imagen: 'img/broche-camafeo.jpg'
    },
    // Gargantillas
    {
        id: 24,
        nombre: 'Gargantilla Oro Delicada',
        categoria: 'Gargantillas',
        descripcion: 'Gargantilla en oro 18k tejida fina',
        precio: 1900.00,
        stock: 5,
        imagen: 'img/gargantilla-oro.jpg'
    },
    {
        id: 25,
        nombre: 'Gargantilla Plata Ajustable',
        categoria: 'Gargantillas',
        descripcion: 'Gargantilla de plata 925 con cierre ajustable',
        precio: 480.00,
        stock: 13,
        imagen: 'img/gargantilla-plata.jpg'
    },
    {
        id: 26,
        nombre: 'Gargantilla Obsidiana',
        categoria: 'Gargantillas',
        descripcion: 'Gargantilla con colgante de obsidiana negra',
        precio: 350.00,
        stock: 17,
        imagen: 'img/gargantilla-obsidiana.jpg'
    },
    // Cadenas
    {
        id: 27,
        nombre: 'Cadena Oro Ancla',
        categoria: 'Cadenas',
        descripcion: 'Cadena en oro amarillo 18k estilo ancla',
        precio: 3200.00,
        stock: 6,
        imagen: 'img/cadena-oro.png'
    },
    {
        id: 28,
        nombre: 'Cadena Plata Eslabón Cubano',
        categoria: 'Cadenas',
        descripcion: 'Cadena de plata 925 estilo eslabón cubano',
        precio: 1100.00,
        stock: 10,
        imagen: 'img/cadena-plata.jpg'
    },
    {
        id: 29,
        nombre: 'Cadena Acero Quirúrgico',
        categoria: 'Cadenas',
        descripcion: 'Cadena resistente en acero quirúrgico hipoalergénico',
        precio: 220.00,
        stock: 25,
        imagen: 'img/cadena-acero.jpeg'
    }
];

// ===== VARIABLES GLOBALES =====
let categoriaActual = 'todas';
let terminoActual = '';
const categoriasValidas = ['Anillos', 'Collares', 'Pulseras', 'Aretes', 'Broches', 'Gargantillas', 'Cadenas'];
const obtenerFavoritos = () => {
    try { return JSON.parse(localStorage.getItem('obsidiana-favoritos') || '[]'); }
    catch { return []; }
};

// ===== ELEMENTOS DEL DOM =====
const productosGrid = document.getElementById('productos-grid');
const buscador = document.getElementById('buscador');
const filtrosBtns = document.querySelectorAll('.filtro-btn');
const contactoForm = document.getElementById('contacto-form');
const productoDialog = document.getElementById('producto-dialog');
let productoActivoDialog = null;
const tasaEuroDemo = 0.92;

function formatearPrecioUSD(precioUSD) {
    return `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(precioUSD)} USD`;
}

function formatearPrecioEUR(precioUSD) {
    return `≈ ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(precioUSD * tasaEuroDemo)}`;
}

function enlaceCompraWhatsapp(producto = null) {
    const mensaje = producto
        ? `¡Hola! Me interesa ${producto.nombre} de Obsidiana Viva. ¿Podrían darme más información?`
        : '¡Hola! Me interesan las joyas de Obsidiana Viva. ¿Podrían darme más información?';
    return `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
}

function renderizarDestacados() {
    const grid = document.getElementById('destacados-grid');
    if (!grid) return;
    [4, 8, 29].map(id => productos.find(producto => producto.id === id)).filter(Boolean).forEach((producto, index) => {
        const tarjeta = document.createElement('article');
        tarjeta.className = `destacado-card reveal reveal-delay-${index + 1}`;
        tarjeta.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.style.display='none'"><div class="destacado-info"><h3>${producto.nombre}</h3><p>${producto.descripcion}</p><p class="producto-precio">${formatearPrecioUSD(producto.precio)}</p><p class="producto-precio-eur">${formatearPrecioEUR(producto.precio)}</p><a class="btn btn-primary" href="${enlaceCompraWhatsapp(producto)}" target="_blank" rel="noopener noreferrer">Reservar ahora</a><a class="btn btn-secondary" href="productos.html">Ver en el catálogo</a></div>`;
        grid.appendChild(tarjeta);
    });
    observarElementos();
}

renderizarDestacados();

document.querySelectorAll('.menu-toggle').forEach(button => {
    const nav = document.getElementById(button.getAttribute('aria-controls'));
    if (!nav) return;
    const cerrarMenu = () => {
        nav.classList.remove('menu-open');
        button.setAttribute('aria-expanded', 'false');
        button.querySelector('.sr-only').textContent = 'Abrir menú';
    };
    button.addEventListener('click', () => {
        const abierto = button.getAttribute('aria-expanded') === 'true';
        nav.classList.toggle('menu-open', !abierto);
        button.setAttribute('aria-expanded', String(!abierto));
        button.querySelector('.sr-only').textContent = abierto ? 'Abrir menú' : 'Cerrar menú';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', cerrarMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') cerrarMenu(); });
});

// ===== FUNCIONES PRINCIPALES =====

function renderizarProductos(productosAMostrar = productos) {
    if (!productosGrid) return;

    productosGrid.innerHTML = '';

    if (productosAMostrar.length === 0) {
        productosGrid.innerHTML = '<div class="sin-resultados"><p>No encontramos joyas con esos criterios.</p><button type="button" class="btn btn-secondary" id="sin-resultados-limpiar">Ver todo el catálogo</button></div>';
        document.getElementById('sin-resultados-limpiar').addEventListener('click', limpiarFiltros);
        return;
    }

    productosAMostrar.forEach((producto, index) => {
        const productoCard = document.createElement('article');
        const delayClass = `reveal-delay-${(index % 6) + 1}`;
        productoCard.className = `producto-card reveal ${delayClass}`;

        productoCard.innerHTML = `
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.style.display='none'">
            </div>
            <div class="producto-info">
                <p class="producto-categoria">${producto.categoria}</p>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-precio">${formatearPrecioUSD(producto.precio)}</p>
                <p class="producto-precio-eur">${formatearPrecioEUR(producto.precio)}</p>
                <div class="producto-acciones">
                    <a class="btn btn-primary" href="${enlaceCompraWhatsapp(producto)}" target="_blank" rel="noopener noreferrer">Reservar ahora</a>
                    <button type="button" class="btn btn-secondary ver-detalles" data-detalles="${producto.id}" aria-haspopup="dialog">Ver detalles</button>
                </div>
            </div>
        `;

        productosGrid.appendChild(productoCard);
    });

    productosGrid.querySelectorAll('[data-detalles]').forEach(boton => {
        boton.addEventListener('click', () => abrirDetallesProducto(Number(boton.dataset.detalles)));
    });
    observarElementos();
}

function variantesPara(producto) {
    const medidasPorCategoria = {
        Anillos: ['5', '6', '7', '8', '9', '10'],
        Pulseras: ['16 cm', '17 cm', '18 cm', '19 cm', '20 cm', 'Ajustable'],
        Collares: ['40 cm', '45 cm', '50 cm', '55 cm', '60 cm'],
        Gargantillas: ['35 cm', '40 cm', '45 cm', 'Ajustable'],
        Cadenas: ['40 cm', '45 cm', '50 cm', '55 cm', '60 cm'],
        Aretes: ['Única'],
        Broches: ['Única']
    };
    const texto = normalizar(`${producto.nombre} ${producto.descripcion}`);
    let colores = ['Dorado', 'Plateado', 'Negro'];
    if (texto.includes('oro blanco')) colores = ['Oro blanco', 'Dorado', 'Oro rosa'];
    else if (texto.includes('oro')) colores = ['Dorado', 'Oro blanco', 'Oro rosa'];
    else if (texto.includes('plata')) colores = ['Plateado', 'Dorado', 'Negro'];
    else if (texto.includes('obsidiana')) colores = ['Negro', 'Plateado', 'Dorado'];
    else if (texto.includes('piedra') || texto.includes('amatista') || texto.includes('opal') || texto.includes('diamante') || texto.includes('perla') || texto.includes('jade') || texto.includes('turquesa')) colores = ['Tono original', 'Dorado', 'Plateado'];
    return { medidas: medidasPorCategoria[producto.categoria] || ['Única'], colores };
}

function abrirDetallesProducto(id) {
    if (!productoDialog) return;
    const producto = productos.find(p => p.id === id);
    if (!producto) return;
    productoActivoDialog = producto;
    const variantes = variantesPara(producto);
    const stockClass = producto.stock < 5 ? 'stock-bajo' : 'stock-disponible';
    const stockText = producto.stock < 5 ? `Pocas existencias: ${producto.stock}` : `${producto.stock} disponibles`;
    document.getElementById('dialog-producto-imagen').src = producto.imagen;
    document.getElementById('dialog-producto-imagen').alt = producto.nombre;
    document.getElementById('dialog-producto-categoria').textContent = producto.categoria;
    document.getElementById('dialog-producto-nombre').textContent = producto.nombre;
    document.getElementById('dialog-producto-descripcion').textContent = producto.descripcion;
    document.getElementById('dialog-producto-precio').textContent = formatearPrecioUSD(producto.precio);
    document.getElementById('dialog-producto-precio-eur').textContent = formatearPrecioEUR(producto.precio);
    document.getElementById('dialog-reservar-ahora').href = enlaceCompraWhatsapp(producto);
    document.getElementById('dialog-producto-stock').innerHTML = `<span class="${stockClass}">${stockText}</span>`;

    const tallas = document.getElementById('dialog-tallas');
    tallas.innerHTML = variantes.medidas.map((medida, index) => `<button type="button" class="talla-opcion${index === 0 ? ' seleccionada' : ''}" aria-pressed="${index === 0}" data-talla="${medida}">${medida}</button>`).join('');
    tallas.querySelectorAll('[data-talla]').forEach(boton => boton.addEventListener('click', () => {
        tallas.querySelectorAll('[data-talla]').forEach(opcion => {
            const seleccionada = opcion === boton;
            opcion.classList.toggle('seleccionada', seleccionada);
            opcion.setAttribute('aria-pressed', String(seleccionada));
        });
    }));

    const selectorColor = document.getElementById('dialog-color-select');
    selectorColor.innerHTML = '<option value="">Elige un color</option>' + variantes.colores.map(color => `<option value="${color}">${color}</option>`).join('');
    const favoritos = obtenerFavoritos();
    const botonFavorito = document.getElementById('dialog-favorito');
    const esFavorito = favoritos.includes(producto.id);
    botonFavorito.textContent = esFavorito ? '♥ En favoritos' : '♡ Agregar a Favoritos';
    botonFavorito.classList.toggle('guardado', esFavorito);
    botonFavorito.setAttribute('aria-pressed', String(esFavorito));
    productoDialog.showModal();
}

document.querySelector('.dialog-cerrar')?.addEventListener('click', () => productoDialog.close());
productoDialog?.addEventListener('click', event => {
    if (event.target === productoDialog) productoDialog.close();
});

document.getElementById('dialog-favorito')?.addEventListener('click', event => {
    if (!productoActivoDialog) return;
    const boton = event.currentTarget;
    const favoritos = obtenerFavoritos();
    const id = productoActivoDialog.id;
    const nuevos = favoritos.includes(id) ? favoritos.filter(f => f !== id) : [...favoritos, id];
    localStorage.setItem('obsidiana-favoritos', JSON.stringify(nuevos));
    const esFavorito = nuevos.includes(id);
    boton.textContent = esFavorito ? '♥ En favoritos' : '♡ Agregar a Favoritos';
    boton.classList.toggle('guardado', esFavorito);
    boton.setAttribute('aria-pressed', String(esFavorito));
});

function normalizar(texto) {
    return texto.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function actualizarUrl() {
    if (!productosGrid) return;
    const url = new URL(window.location.href);
    if (categoriaActual === 'todas') url.searchParams.delete('categoria');
    else url.searchParams.set('categoria', categoriaActual);
    if (terminoActual) url.searchParams.set('q', terminoActual);
    else url.searchParams.delete('q');
    if (window.location.protocol !== 'file:') history.replaceState(null, '', url);
}

function alternarFavorito(id) {
    const favoritos = obtenerFavoritos();
    const nuevos = favoritos.includes(id) ? favoritos.filter(f => f !== id) : [...favoritos, id];
    localStorage.setItem('obsidiana-favoritos', JSON.stringify(nuevos));
    filtrarProductos();
}

function limpiarFiltros() {
    categoriaActual = 'todas';
    terminoActual = '';
    if (buscador) buscador.value = '';
    filtrosBtns.forEach(b => {
        const activo = b.dataset.categoria === 'todas';
        b.classList.toggle('activo', activo);
        b.setAttribute('aria-pressed', String(activo));
    });
    filtrarProductos();
}

function filtrarProductos() {
    let productosFiltrados = productos;

    if (categoriaActual !== 'todas') {
        productosFiltrados = productosFiltrados.filter(p => p.categoria === categoriaActual);
    }

    if (buscador) {
        const terminoBusqueda = normalizar(buscador.value.trim());
        terminoActual = buscador.value.trim();
        if (terminoBusqueda) {
            productosFiltrados = productosFiltrados.filter(p =>
                normalizar(p.nombre).includes(terminoBusqueda) ||
                normalizar(p.descripcion).includes(terminoBusqueda) ||
                normalizar(p.categoria).includes(terminoBusqueda)
            );
        }
    }

    actualizarUrl();
    const conteo = document.getElementById('resultado-conteo');
    if (conteo) conteo.textContent = `${productosFiltrados.length} ${productosFiltrados.length === 1 ? 'joya encontrada' : 'joyas encontradas'}`;
    renderizarProductos(productosFiltrados);
}

// ===== EVENT LISTENERS =====
filtrosBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filtrosBtns.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        filtrosBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        categoriaActual = btn.dataset.categoria;
        filtrarProductos();
    });
});

if (buscador) {
    buscador.addEventListener('input', filtrarProductos);
}

const limpiarBtn = document.getElementById('limpiar-filtros');
if (limpiarBtn) limpiarBtn.addEventListener('click', limpiarFiltros);

if (contactoForm) {
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por tu interés. Este formulario es una demostración escolar y no envía mensajes.');
        contactoForm.reset();
    });
}

// ===== ANIMACIONES AL HACER SCROLL =====
function observarElementos() {
    const elementos = document.querySelectorAll('.reveal:not(.visible)');

    if (elementos.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    elementos.forEach(el => observer.observe(el));
}

// ===== INICIALIZACIÓN =====
if (productosGrid) {
    const categoriaUrl = new URLSearchParams(window.location.search).get('categoria');
    const busquedaUrl = new URLSearchParams(window.location.search).get('q') || '';
    if (categoriasValidas.includes(categoriaUrl)) categoriaActual = categoriaUrl;
    if (buscador) buscador.value = busquedaUrl;
    terminoActual = busquedaUrl;
    filtrosBtns.forEach(b => {
        const activo = b.dataset.categoria === categoriaActual;
        b.classList.toggle('activo', activo);
        b.setAttribute('aria-pressed', String(activo));
    });
    renderizarProductos();
    filtrarProductos();
}

document.addEventListener('DOMContentLoaded', () => {
    observarElementos();

    const header = document.querySelector('.header-over-video');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

});

const motionButtons = document.querySelectorAll('.motion-toggle');
const movimientoGuardado = localStorage.getItem('obsidiana-reducir-movimiento');
const sistemaReduceMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let movimientoReducido = movimientoGuardado === null ? sistemaReduceMovimiento : movimientoGuardado === 'true';

function aplicarPreferenciaMovimiento() {
    document.body.classList.toggle('motion-reduced', movimientoReducido);
    document.documentElement.classList.toggle('motion-reduced', movimientoReducido);
    document.body.classList.toggle('motion-enabled', !movimientoReducido);
    const video = document.querySelector('.page-video');
    if (video) {
        if (movimientoReducido) {
            video.pause();
            video.removeAttribute('autoplay');
            video.hidden = true;
        } else {
            video.hidden = false;
            video.setAttribute('autoplay', '');
            video.play().catch(() => {});
        }
    }
    motionButtons.forEach(button => {
        button.setAttribute('aria-pressed', String(movimientoReducido));
        button.textContent = movimientoReducido ? 'Activar movimiento' : 'Reducir movimiento';
    });
}

motionButtons.forEach(button => button.addEventListener('click', () => {
    movimientoReducido = !movimientoReducido;
    localStorage.setItem('obsidiana-reducir-movimiento', String(movimientoReducido));
    aplicarPreferenciaMovimiento();
}));
aplicarPreferenciaMovimiento();

document.querySelectorAll('.contacto-info-card, .mision-card, .vision-card, .valor-card, .material-card').forEach((elemento, index) => {
    elemento.classList.add('reveal', `reveal-delay-${(index % 6) + 1}`);
});
observarElementos();
