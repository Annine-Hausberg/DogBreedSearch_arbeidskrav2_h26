import Link from "next/link";
import "@/components/Aside/Aside.css"


export default function FilterAside() {
  return (
    <aside>
      <details className="filter-details">
        <summary>Filter</summary>
        <hr />
        <form className="filter" action={"/filter"}>
          <h4 className="filter-headlines">Størrelse</h4>
          <label>
            <input type="checkbox" name="dogsize" value="small" /> Liten{" "}
          </label>
          <label>
            <input type="checkbox" name="dogsize" value="medium" /> Mellomstor
          </label>
          <label>
            <input type="checkbox" name="dogsize" value="big" /> Stor
          </label>
          <label>
            <input type="checkbox" name="dogsize" value="huge" /> Ekstra stor
          </label>
          <hr />

          <h4 className="filter-headlines">Aktivitetsnivå</h4>

          <label>
            <input type="checkbox" name="activity" value="calm" /> Rolig
          </label>
          <label>
            <input type="checkbox" name="activity" value="moderate" /> Moderat
          </label>
          <label>
            <input type="checkbox" name="activity" value="high" /> Høyt
          </label>

          <hr />

          <h4 className="filter-headlines">Pelsstell</h4>
          <label>
            <input type="checkbox" name="coatCare" value="low" /> Lite pelsstell
          </label>
          <label>
            <input type="checkbox" name="coatCare" value="normal" /> Moderat pelsstell
          </label>
          <label>
            <input type="checkbox" name="coatCare" value="much" /> Mye pelsstell
          </label>

          <hr />

          <h4 className="filter-headlines">Allergi</h4>
          <label>
            <input type="checkbox" name="hypoallergenic" value="true" /> Allergivennlig
          </label>
          <button type="submit">Filtrer</button>
          <Link href={"/dogview/page/1"}>Nullstill</Link>
        </form>
      </details>
    </aside>
  );
}
