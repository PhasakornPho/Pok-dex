import { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import PokemonStatus from "@/components/PokemonStats";

type Props = {
  data: IPokemonDetailResponse | undefined;
};

function PokemonDetail(props: Props) {
  const { data } = props;
  const { name } = useParams();

  console.log(data);

  return (
    <div className="w-[90%] m-auto max-w-[1100px] relative ">
      <div>
        <div className="flex justify-center relative">
          <img
            src="/images/logo.webp"
            alt=""
            className="max-h-[80px] mt-[20px]"
          />
        </div>
      </div>
      <div>
        <Link
          to={"/"}
          className="relative bg-[#0E61A7] w-fit px-[30px] text-center py-[8px] rounded-[20px] text-gray-300 animation-shine hover:scale-105 mt-[20px]"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-50"
          />
        </Link>
      </div>
      {data && (
        <div className="mt-2 pt-4 rounded-[20px] w-[90%] max-w-[600px] m-[auto]">
          <div className="rounded-[20px] overflow-hidden shadow- p-[16px] m-[auto]">
            <div className="bg-center bg-cover w-full relative h-[400px] aspect-square">
              <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img
                  className="animate-[spin_3s_linear_infinite] max-h-[400px] aspect-square min-h-[250px] min-w-[250px]"
                  src="/images/pokemon_bg.png"
                  alt=""
                />
              </div>
              <img
                className="absolute rounded-t-lg p-[60px] min-h-[250px] h-[65%] md:h-[256px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                src={data.image || ""}
                alt=""
              />
            </div>

            <div className="pt-5 bg-gray-800 border-gray-700 p-[16px] rounded-[20px]">
              <div className="w-full p-4 md:p-6">
                <div className="flex justify-between">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-white capitalize">
                    {name}
                  </h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-white capitalize">
                    #{data.id}
                  </h5>
                </div>

                <div className="grid grid-cols-2 gap-2 items-around justify-center">
                  <div className="text-white flex flex-col justify-around gap-2">
                    <div className="flex gap-x-2 flex-col small:flex-row">
                      <div className="text-[#3dc8ff] font-semibold">Height</div>
                      <div>{(data.height / 10).toFixed(2)} m.</div>
                    </div>
                    <div className="flex gap-x-2 flex-col small:flex-row">
                      <div className="text-[#3dc8ff] font-semibold">Weight</div>
                      <div>{(data.weight / 10).toFixed(2)} kg.</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end items-center">
                    {data?.types.map((type, index) => {
                      return (
                        <span
                          className={`badge-type-${type.type.name} px-[14px] py-1 rounded-[15px] capitalize`}
                          key={index}
                        >
                          {type.type.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-4 w-[100%]">
                <PokemonStatus data={data} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonDetail;
