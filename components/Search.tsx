import "@/app/globals.css"
import Form from "next/form";
import {MagnifyingGlassIcon} from "@phosphor-icons/react/dist/ssr";


export default function SearchInput() {
  return (
      <Form action="/search" formMethod="GET" className="searchform">
      <input name="q" className="search-input" type="search" placeholder="Søk etter en hunderase"/>
      <button type="submit" className="search-input-button">
        <MagnifyingGlassIcon size={20} />
      </button>
    </Form>
  );
}
