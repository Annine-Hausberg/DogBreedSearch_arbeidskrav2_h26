import "@/components/Search/Search.css";
import Form from "next/form";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";

export default function SearchInput() {
  return (
    <Form action="/search" className="searchform">
      <input name="q" className="search-input" type="search" placeholder="Søk etter en hunderase" aria-label="Søk etter hunderase"/>
      <button type="submit" className="search-input-button" aria-label="Søk">
        <MagnifyingGlassIcon size={20} aria-hidden="true"/>
      </button>
    </Form>
  );
}
