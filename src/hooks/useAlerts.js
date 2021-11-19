import Swal from 'sweetalert2';

const useAlerts = () => {
  const successAlert = (title) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const loaderAlert = (title = 'Enviando Email...') => {
    Swal.fire({
      title,
      icon: 'info',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return {
    successAlert,
    loaderAlert,
  };
};

export default useAlerts;
