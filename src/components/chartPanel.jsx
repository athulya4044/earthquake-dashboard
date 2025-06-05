import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

export default function ChartPanel({ data, selectedQuake }) {
  // Local state for axis selections
  const [xAxis, setXAxis] = useState("mag");
  const [yAxis, setYAxis] = useState("depth");

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Title */}
         {/* Dropdowns */}
      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-xs text-gray-500 uppercase mb-1">
            X-Axis
          </label>
          <select
            value={xAxis}
            onChange={(e) => setXAxis(e.target.value)}
            className="border rounded p-1"
          >
            <option value="mag">Magnitude</option>
            <option value="depth">Depth</option>
            <option value="gap">Gap</option>
            <option value="dmin">Dmin</option>
            {/* More options if needed */}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 uppercase mb-1">
            Y-Axis
          </label>
          <select
            value={yAxis}
            onChange={(e) => setYAxis(e.target.value)}
            className="border rounded p-1"
          >
            <option value="depth">Depth</option>
            <option value="mag">Magnitude</option>
            <option value="gap">Gap</option>
            <option value="dmin">Dmin</option>
            {/* More options if needed */}
          </select>
        </div>
      </div>

      {/* Scatter Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            type="number"
            dataKey={xAxis}
            name={xAxis}
            tick={{ fill: "#4a5568", fontSize: 12 }}
            label={{
              value: xAxis,
              position: "insideBottom",
              offset: -5,
              fill: "#4a5568",
            }}
          />
          <YAxis
            type="number"
            dataKey={yAxis}
            name={yAxis}
            tick={{ fill: "#4a5568", fontSize: 12 }}
            label={{
              value: yAxis,
              angle: -90,
              position: "insideLeft",
              fill: "#4a5568",
            }}
          />
          <Tooltip />
          <Scatter
            data={data}
            shape={({ cx, cy, payload }) => {
              const isSelected =
                selectedQuake && payload.time === selectedQuake.time;
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 8 : 4}
                  fill={isSelected ? "#ef4444" : "#3182ce"}
                />
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
