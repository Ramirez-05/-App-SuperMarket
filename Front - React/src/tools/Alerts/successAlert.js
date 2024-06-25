import Swal from 'sweetalert2';

// Definir el objeto Toast una vez
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

// Función para mostrar una alerta de éxito usando Toast
export const showSuccessAlert = (message, status) => {
    Toast.fire({
        icon: status,
        title: message
    });
};

