document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    direccion: document.getElementById('direccion').value,
    codigoPostal: document.getElementById('codigo-postal').value,
    ciudad: document.getElementById('ciudad').value,
    pais: document.getElementById('pais').value
  };
  
  console.log('Datos del formulario:', formData);
  alert('Formulario enviado correctamente');
  this.reset();
});
