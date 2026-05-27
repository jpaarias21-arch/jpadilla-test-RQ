document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    // Manejo de la apertura/cierre del menú móvil al hacer click
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        
        // Animación simple opcional para el botón hamburguesa
        menuToggle.classList.toggle('open');
    });

    // Cerrar el menú automáticamente si se selecciona una opción en móvil
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
});