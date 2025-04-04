import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div key={repo.id} className="card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
    </div>
  );
};

export default RepoItem;
