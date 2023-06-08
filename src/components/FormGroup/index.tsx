export default function FormGroup() {
    return (
        <form className="flex flex-wrap sm:flex-nowrap justify-between gap-5 xl:justify-normal w-full">
            <input 
                type="email" 
                placeholder="Coloque seu email aqui"
                className="
                    w-full sm:w-[70%] xl:w-auto rounded 
                    border-2 border-zinc-500 outline-none 
                    focus:border-indigo-800 shadow-md px-8 py-2
                "
            />
            <button 
                className="
                    bg-indigo-700 hover:bg-indigo-500 
                    py-2 px-10 rounded text-white
                    w-full
                    sm:w-auto
                "
            >Cadastrar</button>
        </form>
    )
}