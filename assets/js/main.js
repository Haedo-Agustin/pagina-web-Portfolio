/*===== mostrar menu =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== quitar menu movil ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // Cuando hacemos clic en cada enlace de navegación, eliminamos la clase de menú 
    navMenu.classList.remove('show');
}
    // const eventClick = document(event.target);

navLink.forEach(n => n.addEventListener('click', linkAction))
// const navMenu = document.getElementById('nav-menu');
// const navToggle = document.getElementById('nav-toggle');

// Función para cerrar el menú cuando se hace clic fuera del toggle
// function closeMenu(event) {
//     // Verificar si el clic ocurrió fuera del botón de activación
//     if (!event.target.closest('#nav-toggle')) {
//         // Si el clic no fue dentro del botón, cerrar el menú eliminando la clase 'show'
//         navMenu.classList.remove('show');
//         // Eliminar el event listener para evitar múltiples ejecuciones
//         document.removeEventListener('click', closeMenu);
//     }
// }

/*==================== desplasarse por secciones ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)
