function InputSelectControl({label,OptionList,id,name}){
    return(
        <>
            <label for={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
                  <select id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {
                        OptionList.length > 0 ? (
                            OptionList.map((item,index)=>{
                                return (
                                    <>
                                        <option value={item.value} key={index}>{item.label}</option>
                                    </>
                                )
                            })
                        ) : (null)
                    }
                  </select>
        </>
    )
}
export default InputSelectControl