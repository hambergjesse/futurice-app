import Repository from "./Repository";

function PinnedRepos() {
  return (
    <div className="PinnedRepos">
      <h2>Pinned repositories</h2>
      <div className="Repositories">
        <Repository />
        <Repository />
        <Repository />
      </div>
    </div>
  );
}

export default PinnedRepos;
