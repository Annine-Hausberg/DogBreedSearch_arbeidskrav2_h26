import "@/app/API/dogbreeds.css"
export default function SearchInput(){
return  (
    <form className="searchform" action="">
        <input type="text" id="searchinput" name="searchinput" placeholder="Søk etter en hunderase, for eksempel: Golden retriver"/>
        <label htmlFor="searchinput">Søk</label>
    </form>
)
}