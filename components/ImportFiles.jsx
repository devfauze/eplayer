export default function ImportFiles(){
    return(
        <div className="mb-3">
            <label 
            htmlFor="formFileMultiple"
            className="block text-lg font-medium text-grey-400 mb-1"
            >
                Importar Músicas
            </label>

            <input 
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid bg-clip-padding px-3 py-[0.32rem] text-base font-normal file:-mx-3 file:-my-[0.32rem]"
            type="file" 
            id="formFileMultiple"
            multiple
            accept=".mp3,.wav"
            />
        </div>
    )
}