document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Evitar el envío si no se cumplen las validaciones
    event.preventDefault();
    
    // Obtener los valores de los campos
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    // Validar el nombre
    if (name === "") {
      document.getElementById("nameError").style.display = "inline";
      isValid = false;
    }

    // Validar el correo electrónico
    if (email === "" || !validateEmail(email)) {
      document.getElementById("emailError").style.display = "inline";
      isValid = false;
    }

    // Validar el mensaje
    if (message === "") {
      document.getElementById("messageError").style.display = "inline";
      isValid = false;
    }

    // Si todo es válido, permitir el envío del formulario
    if (isValid) {
      this.submit();
    }
  });

  // Detectar cambios en los campos y eliminar el mensaje de error
  document.getElementById("name").addEventListener("input", function() {
    if (this.value.trim() !== "") {
      document.getElementById("nameError").style.display = "none";
    }
  });

  document.getElementById("email").addEventListener("input", function() {
    if (validateEmail(this.value.trim())) {
      document.getElementById("emailError").style.display = "none";
    }
  });

  document.getElementById("message").addEventListener("input", function() {
    if (this.value.trim() !== "") {
      document.getElementById("messageError").style.display = "none";
    }
  });

  // Función para validar el formato del correo electrónico
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }