document.addEventListener("DOMContentLoaded", function () {
  // Verificar si el usuario está logueado
  const authenticatedUser = localStorage.getItem("isAuthenticated");
  let  nuser = localStorage.getItem("username");
  if (!authenticatedUser) {
    window.location.href = "login.html"; // Redirige si no está logueado
    return;
  } else {
  nuser = localStorage.getItem("username");
  }
  console.log (nuser);
  // Prellenar el campo de E-mail
  let username = document.getElementById("username");
  if (username) {
    username.value = nuser;
  }

  // Guardar los datos de perfil
let profileInfo = document.getElementById('profileInfo');
if (profileInfo) {
    profileInfo.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        let name = document.getElementById('name').value;
        let middleName = document.getElementById('middleName').value;
        let surname = document.getElementById('surname').value;
        let secondSurname = document.getElementById('secondSurname').value;
        let username = document.getElementById('username').value;
        let contactNumber = document.getElementById('contactNumber').value;
        if (!name || !surname || !username) {
            alert('Por favor completa los campos obligatorios.');
            return;
            } else {
                localStorage.setItem('profileInfo', JSON.stringify({ name, middleName, surname, secondSurname, username, contactNumber}))
            }
        })}

     // Cargar datos del perfil
     loadProfileInfo();

    // Manejar envío del formulario
   profileInfo.addEventListener('submit', function(e) {
    e.preventDefault();
    if (profileInfo.checkValidity()) {
        saveProfileInfo();
        alert('Perfil actualizado con éxito');
    } else {
        profileInfo.reportValidity();
    }
});


            // Funciones auxiliares
            function loadProfileInfo() {
                let profileInfo = JSON.parse(localStorage.getItem('profileInfo')) || {};
                for (const [key, value] of Object.entries(profileInfo)) {
                    if (document.getElementById(key)) {
                        document.getElementById(key).value = value;
                    }
                }
                document.getElementById('username').value = localStorage.getItem('username') || '';
            }

            function saveProfileInfo() {
                 profileInfo = {
                    name: document.getElementById('name').value,
                    middleName: document.getElementById('middleName').value,
                    surname: document.getElementById('surname').value,
                    secondSurname: document.getElementById('secondSurname').value,
                    username: document.getElementById(username),
                    contactNumber: document.getElementById('contactNumber').value,
                };
                localStorage.setItem('profileInfo', JSON.stringify(profileInfo));
                localStorage.setItem('username', document.getElementById('username').value);
            }

});
