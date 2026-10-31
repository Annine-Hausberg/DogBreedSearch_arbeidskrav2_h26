import Link from "next/link";
import "@/components/Aside/Aside.css";

export default function FilterAside() {
  return (
    <aside>
      <details className="filter-details">
        <summary>Filter</summary>
        <hr />
        <form className="filter" action={"/filter"}>
          <fieldset>
            <legend>Aktivitetsnivå</legend>

            <label className="filter-checkbox">
              <input type="checkbox" name="activity" value="calm" /> Rolig
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" name="activity" value="moderate" /> Moderat
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" name="activity" value="high" /> Høyt
            </label>
          </fieldset>

          <hr />
          <fieldset>
            <legend>Pelsstell</legend>
            <label className="filter-checkbox">
              <input type="checkbox" name="coatCare" value="low" /> Lite pelsstell
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" name="coatCare" value="normal" /> Moderat pelsstell
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" name="coatCare" value="much" /> Mye pelsstell
            </label>
          </fieldset>

          <hr />
          <fieldset>
            <legend>Allergi</legend>
            <label className="filter-checkbox">
              <input type="checkbox" name="hypoallergenic" value="true" /> Allergivennlig
            </label>
          </fieldset>

          <button type="submit">Filtrer</button>
          <Link href={"/dogview/page/1"}>Nullstill</Link>
        </form>
      </details>
    </aside>
  );
}
