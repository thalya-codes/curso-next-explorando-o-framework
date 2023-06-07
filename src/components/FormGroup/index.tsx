export default function FormGroup() {
    return (
        <form className="flex gap-5">
            <input 
                type="email" 
                placeholder="Coloque seu email aqui"
                className="rounded border-2 border-zinc-500 outline-none focus:border-indigo-800 shadow-md px-8 py-2"
            />
            <button className="bg-indigo-700 hover:bg-indigo-500 py-2 px-10 rounded text-white">Cadastrar</button>
        </form>
    )
}