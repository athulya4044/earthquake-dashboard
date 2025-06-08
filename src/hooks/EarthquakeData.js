// This hook fetches earthquake data from the USGS API.
import { useState, useEffect } from "react";
import Papa from "papaparse";

export function useEarthquakeData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching earthquake data...");
      try {
        const response = await fetch(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv"
        );
        const text = await response.text();

        const parsed = Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          worker: true,
          complete: (results) => {
            const slicedData = results.data.slice(0, 25); // Limit to 25 records
            setData(slicedData);
            setLoading(false);
          },      
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
