import Swal from 'sweetalert2';

export const showSuccessAlert = (message,status) => {
    Swal.fire({
        position: "top-end",
        icon: status,
        title: message,
        showConfirmButton: false,
        timer: 1500
    });
}; 