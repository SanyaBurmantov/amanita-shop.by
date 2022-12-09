
export const useModalOpen = (value: boolean) => {

    value ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')


    return {
        value
    }
}