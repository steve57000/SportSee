import './Loader.css';
export default function Loader() {
  // state
  // comportements
  // affichage (render)
  return (
    <div className="Loader">
      <h1>Chargement des données</h1>
      <div className="CsLoader">
        <div className="CsLoaderInner">
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
        </div>
      </div>
    </div>
  );
}
