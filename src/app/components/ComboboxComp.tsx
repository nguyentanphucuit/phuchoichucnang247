import { Fragment, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { listType } from "../constants";

export default function ComboboxComp({
  selected,
  setSelected,
}: {
  selected: { label: string; value: string } | null;
  setSelected: (value: { label: string; value: string } | null) => void;
}) {
  const [query, setQuery] = useState("");

  const filteredType =
    query === ""
      ? listType
      : listType.filter((type) =>
          type.label
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="ml-4 pb-2 flex flex-row items-center w-80 gap-2 relative z-10">
      TYPE :
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value ?? listType[0])}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <ComboboxInput
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(type: { label: string; value: string }) =>
                type.label
              }
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </ComboboxButton>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}>
            <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredType.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredType.map((type) => (
                  <ComboboxOption
                    key={type.value}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={type}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}>
                          {type.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
