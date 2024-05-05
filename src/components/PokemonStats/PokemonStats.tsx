import ChartStats from "@/components/PokemonStats/ChartStats";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";

type Props = {
  data: IPokemonDetailResponse;
};

const colors = ["#edc951", "#fdba8c", "#eb6841", "#cc333f"];

const stats = [
  { x: "HP", y: 0, fillColor: "#cc333f" },
  { x: "Attack", y: 0, fillColor: "#cc333f" },
  { x: "Defense", y: 0, fillColor: "#cc333f" },
  { x: "Sp. Atk", y: 0, fillColor: "#0cc333f00" },
  { x: "Sp. Def", y: 0, fillColor: "#cc333f" },
  { x: "Speed", y: 0, fillColor: "#cc333f" },
];

function PokemonStats(props: Props) {
  const data = props.data;
  let total = 0;

  stats.map((item, index) => {
    item.y = data.stats[index].base_stat;
    const colorIndex = Math.floor((item.y - 1) / 25);
    colorIndex >= 4 ? (item.fillColor = "#8E232C") : (item.fillColor = colors[colorIndex]);
    total += item.y;
  });

  return (
    <div className="w-full px-4 md:px-6">
      <div className="flex flex-col mini:flex-row justify-between pb-4 mb-4 border-b border-gray-700">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center">
            <img
              src="/public/images/sword.png"
              className="w-10 h-10 text-gray-400"
            />
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-white pb-1">{total}</h5>
            <p className="text-sm font-normal text-gray-400">Total Power</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-2 py-2">
            {data.abilities.map((item) => {
              return (
                <span
                  key={`${item.ability.name}`}
                  className="text-center capitalize p-2.5 py-2 min-h-[32px] text-sm font-medium rounded-md bg-green-900 text-green-200"
                >
                  {item.ability.name}
                </span>
              );
            })}
          </div>
          <p className="text-sm font-normal text-gray-400">Abilities</p>
        </div>
      </div>

      {/* <!-- Column-chart --> */}

      <div className="w-[80%] m-auto">
        <h5 className="leading-none text-2xl font-medium text-gray-900 dark:text-white pb-1 text-center">
          Base stats
        </h5>
        <ChartStats stats={stats} />
      </div>
    </div>
  );
}

export default PokemonStats;
