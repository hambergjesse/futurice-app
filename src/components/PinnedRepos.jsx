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
      <div className="viewReposText">
        <a
          href="https://github.com/hambergjesse?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <h2>View all repositories</h2>
        </a>
      </div>
    </div>
  );
}

export default PinnedRepos;
