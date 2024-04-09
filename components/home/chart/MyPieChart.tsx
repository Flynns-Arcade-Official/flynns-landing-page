import { useMemo } from "react";
import * as d3 from "d3";

type DataItem = {
  name: string;
  value: number;
  color: string;
};
type PieChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};

const MARGIN_X = 150;
const MARGIN_Y = 50;
const INFLEXION_PADDING = 20; // space between donut and label inflexion point

const MyPieChart = ({ width, height, data }: PieChartProps) => {
  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

  const pie = useMemo(() => {
    const pieGenerator = d3
      .pie<any, DataItem>()
      .value((d) => d.value)
      .padAngle(0.02);
    return pieGenerator(data);
  }, [data]);

  const arcGenerator = d3.arc();

  const shapes = pie.map((grp, i) => {
    // First arc is for the pie
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    // Second arc is for the legend inflexion point
    const inflexionInfo = {
      innerRadius: radius + INFLEXION_PADDING,
      outerRadius: radius + INFLEXION_PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 30 * (isRightLabel ? 2 : -2);
    const textAnchor = isRightLabel ? "start" : "end";
    const label = grp.data.name;

    return (
      <g key={i}>
        <path d={slicePath as string | undefined} fill={grp.data.color} />
        <path d={slicePath as string | undefined} fill={"black"} transform="scale(0.4)" />
        <circle
          cx={((inflexionPoint[0] - centroid[0]) * 4) / 3}
          cy={((inflexionPoint[1] - centroid[1]) * 4) / 3}
          r={3}
          stroke={"#DDD"}
          fill={"#DDD"}
        />
        <line
          x1={((inflexionPoint[0] - centroid[0]) * 4) / 3}
          y1={((inflexionPoint[1] - centroid[1]) * 4) / 3}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke={"#DDD"}
          fill={"#DDD"}
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke={"#DDD"}
          fill={"#DDD"}
        />
        <text
          x={((inflexionPoint[0] - centroid[0]) * 3) / 3}
          y={((inflexionPoint[1] - centroid[1]) * 3) / 3}
          fontSize={18}
          fill="#0D0E10"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="ChakraPetch"
          fontWeight={600}
        >
          {grp.value}%
        </text>
        <text
          x={labelPosX + (isRightLabel ? -30 : 30)}
          y={inflexionPoint[1] - 8}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize={20}
          fontFamily="Manrope"
          fontWeight={500}
          fill="#fff"
        >
          {label}
        </text>
      </g>
    );
  });

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>{shapes}</g>
    </svg>
  );
};

export default MyPieChart;
