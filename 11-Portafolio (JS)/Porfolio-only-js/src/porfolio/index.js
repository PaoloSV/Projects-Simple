import html from './html/portafolioPrueba.html?raw'

export const App = (elementId) => {
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();
}

// Navegación móvil
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Cerrar menú al hacer clic en un enlace
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      }
    })
  })

  // Animación de desplazamiento suave
  const scrollLinks = document.querySelectorAll('a[href^="#"]')
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Formulario de contacto
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Aquí puedes agregar la lógica para enviar el formulario
      // Por ejemplo, usando fetch para enviar los datos a un servidor

      // Simulación de envío exitoso
      alert("¡Mensaje enviado con éxito! Te responderé lo antes posible.")
      contactForm.reset()
    })
  }

  // Animación de aparición al hacer scroll
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Resaltar sección activa en la navegación
  const highlightActiveSection = () => {
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", highlightActiveSection)
  highlightActiveSection() // Ejecutar al cargar la página
})

// Añadir estilos CSS para las animaciones
const style = document.createElement("style")
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #0a0a0a;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    z-index: 100;
    border-bottom: 2px solid #307FE2;
  }
  
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .nav-links a.active {
    color: #fff;
  }
  
  .nav-links a.active::after {
    width: 100%;
    background-color: #307FE2;
    box-shadow: 0 0 8px rgba(48, 127, 226, 0.8);
  }
`

document.head.appendChild(style)
