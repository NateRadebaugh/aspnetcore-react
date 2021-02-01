const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function getServerSideProps(context) {
  const response = await fetch(process.env.BASE_URL + "/weatherforecast", {
    agent,
  } as RequestInit);
  const data = await response.json();

  return {
    props: {
      forecasts: data,
    },
  };
}

export default function FetchData({ forecasts }) {
  return (
    <div>
      <h1 id="tableLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
