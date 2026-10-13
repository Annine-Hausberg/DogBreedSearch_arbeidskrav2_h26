import "@/app/API/dogbreeds.css";
import Form from "next/form";
import {MagnifyingGlassIcon} from "@phosphor-icons/react/dist/ssr";


export default function SearchInput() {
  return (
    /*
    <form className="searchform" action="">
      <input
        type="text"
        id="searchinput"
        name="searchinput"
        placeholder="Søk etter en hunderase, for eksempel: Golden retriver"
      />
      <label htmlFor="searchinput">Søk</label>
    </form>
    */

    <Form action="/search" formMethod="GET" className="searchform">
      <input name="q" className="search-input" type="search" />
      <button type="submit">
        <MagnifyingGlassIcon size={32} />
      </button>
    </Form>
  );
}
