document.addEventListener("DOMContentLoaded", () => {
    
    // 1. FUNCIONALIDAD DINÁMICA: MODO OSCURO
    const btnDarkMode = document.getElementById("btn-dark-mode");
    
    btnDarkMode.addEventListener("click", () => {
        // Alterna la clase 'dark-mode' en el elemento body
        document.body.classList.toggle("dark-mode");
        
        // Cambia el texto del botón según el modo activo
        if (document.body.classList.contains("dark-mode")) {
            btnDarkMode.textContent = "☀️ Modo Claro";
        } else {
            btnDarkMode.textContent = "🌙 Modo Oscuro";
        }
    });

    // 2. FUNCIONALIDAD DINÁMICA: VALIDACIÓN DE FORMULARIO
    const contactForm = document.getElementById("contact-form");
    const feedbackDiv = document.getElementById("form-feedback");

    contactForm.addEventListener("submit", function(evento) {
        // Prevenir que la página se recargue al enviar el formulario
        evento.preventDefault(); 
        
        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Limpiar mensajes anteriores
        feedbackDiv.textContent = "";
        feedbackDiv.className = "feedback";

        // Validación 1: Campos vacíos
        if (nombre === "" || email === "" || mensaje === "") {
            feedbackDiv.textContent = "❌ Por favor, completa todos los campos.";
            feedbackDiv.classList.add("error");
            return; // Detener la ejecución
        }

        // Validación 2: Formato de correo electrónico (Regex básico)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedbackDiv.textContent = "❌ Por favor, ingresa un correo electrónico válido.";
            feedbackDiv.classList.add("error");
            return;
        }

        // Si todo está correcto (Simular envío)
        feedbackDiv.textContent = "✅ ¡Gracias, " + nombre + "! Tu mensaje ha sido enviado con éxito.";
        feedbackDiv.classList.add("success");
        
        // Limpiar el formulario
        contactForm.reset();
    });
});