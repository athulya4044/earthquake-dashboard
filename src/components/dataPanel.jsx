export default function DataPanel({ data, selectedQuake, setSelectedQuake }) {
  if (!data || data.length === 0) {
    return <div className="p-4">No data to display.</div>;
  }

  const keyColumns = ["time", "mag", "depth", "place"];

  return (
    <div>
      {/* <h2 className="text-xl font-bold mb-4">Data Panel</h2> */}

      <div className="bg-white rounded-lg shadow overflow-auto max-h-[31.25rem]">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-slate-100 text-gray-600 uppercase text-xs sticky top-0 z-10 shadow">
            <tr>
              {keyColumns.map((header) => (
                <th key={header} className="px-4 py-3 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => {
              const isSelected =
                selectedQuake && selectedQuake.time === row.time;
              return (
                <tr
                  key={index}
                  onClick={() => setSelectedQuake(row)}
                  className={`cursor-pointer transition-colors ${
                    isSelected ? "bg-blue-100" : "hover:bg-slate-50"
                  }`}
                >
                  {keyColumns.map((header) => (
                    <td key={header} className="px-4 py-3 whitespace-nowrap">
                      {header === "time"
                        ? new Date(row[header]).toLocaleString()
                        : row[header]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
// import { FixedSizeList as List } from "react-window";

// export default function DataPanel({
//   data,
//   selectedQuake,
//   setSelectedQuake,
// }) {
//   const keyColumns = ["time", "mag", "depth", "place"];
//   const Row = ({ index, style }) => {
//     const row = data[index];
//     const isSelected =
//       selectedQuake && selectedQuake.time === row.time;

//     return (
//       <tr
//         style={style}
//         onClick={() => setSelectedQuake(row)}
//         className={`cursor-pointer transition-colors ${
//           isSelected ? "bg-blue-100" : "hover:bg-slate-50"
//         }`}
//       >
//         {keyColumns.map((header) => (
//           <td key={header} className="px-4 py-3 whitespace-nowrap">
//             {header === "time"
//               ? new Date(row[header]).toLocaleString()
//               : row[header]}
//           </td>
//         ))}
//       </tr>
//     );
//   };

//   return (
//     <div>
   
//       <div className="bg-white rounded-lg shadow overflow-auto">
//         <table className="min-w-full text-sm text-left text-gray-800">
//           <thead className="bg-slate-100 text-gray-600 uppercase text-xs sticky top-0 z-10 shadow">
//   <tr>
//     <th className="px-4 py-3 w-1/4">TIME</th>
//     <th className="px-4 py-3 w-1/6">MAG</th>
//     <th className="px-4 py-3 w-1/6">DEPTH</th>
//     <th className="px-4 py-3 w-1/3">PLACE</th>
//   </tr>
// </thead>
// <tbody className="divide-y divide-gray-200">
//   {/* rows */}
// </tbody>

//         </table>

//         <List
//           height={400} // Adjust based on how many rows you want visible at once
//           itemCount={data.length}
//           itemSize={40} // Adjust row height
//           width="100%"
//         >
//           {Row}
//         </List>
//       </div>
//     </div>
//   );
// }
