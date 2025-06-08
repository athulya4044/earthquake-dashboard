import Sidebar from "./components/sidebar";
import ChartPanel from "./components/chartPanel";
import DataPanel from "./components/dataPanel";
import { useEarthquakeData } from "./hooks/EarthquakeData";
import LoadingIndicator from "./components/loading";
import { useState } from "react";

export default function App() {
  const { data, loading, error } = useEarthquakeData();
  const [selectedQuake, setSelectedQuake] = useState(null);

  if (loading) return <LoadingIndicator />; // Show loading indicator while data is being fetched
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-600">
        Error: {error.message}
      </div>
    );

  return (
    <div className="flex min-h-screen bg-teal-50">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <header className="bg-teal-700 text-white p-4 shadow-sm">
          <h1 className="text-xl font-bold">Earthquake Data </h1>
        </header>

        <main className="flex flex-1 overflow-hidden">
          <section className="flex-1 overflow-auto p-8"> 
            {/* ChartPanel component to display the scatter plot */}
            <ChartPanel
              data={data}
              selectedQuake={selectedQuake}
              setSelectedQuake={setSelectedQuake}
            />
          </section>

          <section className="flex-1 overflow-auto p-8">
            {/* DataPanel component to display the earthquake data in a table */}
            <DataPanel
              data={data}
              selectedQuake={selectedQuake}
              setSelectedQuake={setSelectedQuake}
            />
          </section>
        </main>
      </div>
    </div>
  );
}
