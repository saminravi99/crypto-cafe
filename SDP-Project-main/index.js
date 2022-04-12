console.log("connectcc");
const handleBook = () => {
    console.log("book now")
    let form = document.getElementById('form-modal')
    console.log(form)
    // form.style.display = 'block'
    // form.classList.remove("modal-hide")
    form.classList.add("modal-display")
}

const closeModal = () => {
    const form = document.getElementById('form-modal')
    // form.style.display = 'none'
    form.classList.remove("modal-display")
    // form.classList.add("modal-hide")
}