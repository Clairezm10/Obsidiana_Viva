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

// ===== ELEMENTOS DEL DOM =====
const productosGrid = document.getElementById('productos-grid');
const buscador = document.getElementById('buscador');
const filtrosBtns = document.querySelectorAll('.filtro-btn');
const contactoForm = document.getElementById('contacto-form');

// ===== FUNCIONES PRINCIPALES =====

// Renderizar productos
function renderizarProductos(productosAMostrar = productos) {
    if (!productosGrid) return; // Si no existe la página de productos, no hacer nada

    productosGrid.innerHTML = '';

    if (productosAMostrar.length === 0) {
        productosGrid.innerHTML = '<p class="sin-resultados">No se encontraron productos</p>';
        return;
    }

    productosAMostrar.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        
        const stockClass = producto.stock < 5 ? 'stock-bajo' : 'stock-disponible';
        const stockText = producto.stock < 5 ? `¡Solo ${producto.stock} disponibles!` : `${producto.stock} disponibles`;

        productoCard.innerHTML = `
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.style.display='none'">
            </div>
            <div class="producto-info">
                <p class="producto-categoria">${producto.categoria}</p>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <p class="producto-precio">$${producto.precio.toFixed(2)}</p>
                <p class="producto-stock"><span class="${stockClass}">${stockText}</span></p>
            </div>
        `;

        productosGrid.appendChild(productoCard);
    });
}

// Filtrar productos
function filtrarProductos() {
    let productosFiltrados = productos;

    // Filtrar por categoría
    if (categoriaActual !== 'todas') {
        productosFiltrados = productosFiltrados.filter(p => p.categoria === categoriaActual);
    }

    // Filtrar por búsqueda
    if (buscador) {
        const terminoBusqueda = buscador.value.toLowerCase();
        if (terminoBusqueda) {
            productosFiltrados = productosFiltrados.filter(p =>
                p.nombre.toLowerCase().includes(terminoBusqueda) ||
                p.descripcion.toLowerCase().includes(terminoBusqueda)
            );
        }
    }

    renderizarProductos(productosFiltrados);
}

// ===== EVENT LISTENERS =====

// Filtros por categoría
filtrosBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filtrosBtns.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        categoriaActual = btn.dataset.categoria;
        filtrarProductos();
    });
});

// Búsqueda
if (buscador) {
    buscador.addEventListener('input', filtrarProductos);
}

// Formulario de contacto
if (contactoForm) {
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ ¡Mensaje enviado! Te contactaremos pronto.');
        contactoForm.reset();
    });
}

// ===== INICIALIZACIÓN =====
if (productosGrid) {
    renderizarProductos();
}