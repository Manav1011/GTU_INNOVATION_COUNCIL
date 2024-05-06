function InputControl({ type, placeholder, name, label, id }) {
    return (
        <>
            <label for={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
            <input type={type} id={id} class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full border border-gray-300" placeholder={placeholder} name={name} required />
        </>
    )
}
export default InputControl