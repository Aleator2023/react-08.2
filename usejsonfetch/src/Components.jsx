import React from 'react';
import useJsonFetch from './useJsonFetch';

function DataComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', {});

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

function ErrorComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error', {});

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

function LoadingComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', {});

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

export { DataComponent, ErrorComponent, LoadingComponent };
