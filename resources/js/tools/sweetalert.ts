import Swal, { SweetAlertIcon } from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const Confirm = Swal.mixin({
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#eab308',
    cancelButtonColor: '#d33',
})

export const useAlert = () => {

    const state = {
        Alert: (type: SweetAlertIcon, message: string) => {
            Toast.fire({
                icon: type,
                title: message
            })
        },
        Confirmation: (title: string, confirmButtonText: string) => {
            return new Promise((resolve, reject) => {
                Confirm.fire({
                    title,
                    confirmButtonText
                }).then((result) => {
                    if (result.isConfirmed) {
                        resolve(true)
                    }
                    resolve(false)
                })
            })
        }
    }

    return state
}