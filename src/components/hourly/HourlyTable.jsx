import React, { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { formatHourlyLabel } from "../../shared/utils/dateTime";

export default function HourlyTable({ hourlyData = [], timezone = 0 }) {
  const data = useMemo(() => {
    return hourlyData.map((item, index, arr) => {
      const label = formatHourlyLabel(
        item.dt,
        timezone,
        index > 0 ? arr[index - 1].dt : null,
      );
      return {
        dt: item.dt,
        temp: Math.round(item.main.temp * 10) / 10, // API уже отдаёт °C (units=metric)
        timeLabel: label.time, // строка — обязательно для оси X
        dateLabel: label.date, // строка или null — доп. подпись даты
      };
    });
  }, [hourlyData, timezone]);

  const minTemp = data.length ? Math.min(...data.map((d) => d.temp)) : 0;
  const maxTemp = data.length ? Math.max(...data.map((d) => d.temp)) : 30;
  const yMin = Math.floor((minTemp - 2) / 5) * 5;
  const yMax = Math.ceil((maxTemp + 2) / 5) * 5;
  const ticks = [];
  for (let t = yMin; t <= yMax; t += 5) ticks.push(t);

  // Кастомный тик оси X: время + дата (если начало нового дня).
  // dateLabel достаём по index из data через замыкание, а не через dataKey.
  const renderXAxisTick = (props) => {
    const { x, y, payload, index } = props;
    const dateLabel = data[index]?.dateLabel;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={10} textAnchor="middle" fill="#6b6b6b" fontSize={11}>
          {payload.value}
        </text>
        {dateLabel && (
          <text x={0} y={14} dy={10} textAnchor="middle" fill="#6b6b6b" fontSize={11}>
            {dateLabel}
          </text>
        )}
      </g>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: 340,
        background: "#e6e6e6",
        padding: "12px 8px 0 0",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="tempFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5a94e" stopOpacity={0} />
              <stop offset="100%" stopColor="#f5a94e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={true}
            horizontal={false}
            stroke="#bdbdbd"
            strokeDasharray="0"
          />

          <XAxis
            dataKey="timeLabel"
            axisLine={false}
            tickLine={false}
            tick={renderXAxisTick}
            interval={0}
            height={40}
          />

          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b6b6b", fontSize: 11 }}
            tickFormatter={(v) => `${v}°C`}
            domain={[yMin, yMax]}
            ticks={ticks}
          />

          <Area
            type="monotone"
            dataKey="temp"
            stroke="#f5a94e"
            strokeWidth={2.5}
            fill="url(#tempFill)"
            dot={false}
            activeDot={{ r: 4, fill: "#f5a94e", stroke: "#fff" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}