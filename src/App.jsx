import ChartPanel from "./components/chartPanel";
import DataPanel from "./components/dataPanel";
import { useEarthquakeData } from "./hooks/EarthquakeData";
import LoadingIndicator from "./components/loading";
import { useState } from "react";

function App() {
  const { data, loading, error } = useEarthquakeData();
  const [selectedQuake, setSelectedQuake] = useState(null);

  if (loading) return <LoadingIndicator />;
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-600">
        Error: {error.message}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Earthquake Visualization
        </h1>
      
      </header>

      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 overflow-auto p-4">
          <ChartPanel data={data} selectedQuake={selectedQuake} />
        </section>
        <section className="flex-1 overflow-auto p-4">
          <DataPanel
            data={data}
            selectedQuake={selectedQuake}
            setSelectedQuake={setSelectedQuake}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
