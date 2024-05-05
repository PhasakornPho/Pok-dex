// import React from "react";

import { generationList, typesList, sortList } from "@/utils/optionList";
import { useSearchForm } from "@/components/SearForm";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  const { fieldKeyword, fieldGeneration, fieldType, fieldSort, handleSubmit } = useSearchForm();
  const [display, setDisplay] = useState(true);

  return (
    <nav className="border-gray-800 border-[1px] rounded-[15px] bg-gray-900 p-[16px] mt-[20px] min-w-[275px]">
      <div>
        <form
          className="w-full mx-auto md:inline-block"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="search"
            className="hidden md:block mb-2 text-mb font-medium text-white"
          >
            Search
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none md:hidden">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-400 w-[20px] h-[20px]"
              />
            </div>
            <input
              {...fieldKeyword}
              id="search"
              placeholder="Enter pokemon name ..."
              className="placeholder-gray-300 lg:text-[14px] p-2.5 ps-10 md:ps-4 block bg-gray-700 border border-gray-600  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            {display ? (
              <FontAwesomeIcon
                icon={faBars}
                className="text-white w-[20px] h-[20px] md:hidden block hover:cursor-pointer hover:text-gray-400 absolute end-3.5 bottom-2.5 px-[2px] py-[2px]"
                onClick={() => {
                  setDisplay(!display);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                className="text-white w-[20px] h-[20px] md:hidden block hover:cursor-pointer hover:text-gray-400 absolute end-3.5 bottom-2.5 px-[2px] py-[2px]"
                onClick={() => {
                  setDisplay(!display);
                }}
              />
            )}
          </div>
        </form>
      </div>

      <div
        className={`md:grid  grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-[10px] mt-[10px] ${
          display ? "hidden" : "block"
        } animate-[showSearchFrom_800ms_ease-in-out]`}
      >
        <div>
          <form className="w-full mx-auto md:inline-block">
            <label
              htmlFor="generation"
              className="block mb-2 text-mb font-medium text-gray-900 dark:text-white"
            >
              Generation
            </label>
            <select
              {...fieldGeneration}
              id="generation"
              className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {generationList.map((generation, index) => {
                return (
                  <option
                    key={`generation-key-${index}`}
                    value={index}
                  >
                    {generation.name}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div>
          <form className="w-full mx-auto md:inline-block">
            <label
              htmlFor="type"
              className="block mb-2 text-mb font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <select
              {...fieldType}
              id="type"
              className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize"
            >
              {typesList.map((type, index) => {
                return (
                  <option
                    className="capitalize"
                    key={`type-key-${index}`}
                    value={type}
                  >
                    {type}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div>
          <form className="w-full mx-auto md:inline-block">
            <label
              htmlFor="sort"
              className="block mb-2 text-mb font-medium text-white"
            >
              Sort By
            </label>
            <select
              {...fieldSort}
              id="sort"
              className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize"
            >
              {sortList.map((sort, index) => {
                return (
                  <option
                    className="capitalized"
                    key={`sort-key-${index}`}
                    value={sort}
                  >
                    {sort}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SearchForm;
