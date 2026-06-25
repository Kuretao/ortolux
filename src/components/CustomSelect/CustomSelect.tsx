"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export type CustomSelectOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: CustomSelectOption[];
  value?: string;
  defaultValue?: string;
  name?: string;
  ariaLabel?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export function CustomSelect({
  options,
  value,
  defaultValue,
  name,
  ariaLabel,
  placeholder = "Выберите значение",
  onChange,
}: CustomSelectProps) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const fallbackValue = defaultValue ?? options[0]?.value ?? "";
  const [internalValue, setInternalValue] = useState(fallbackValue);
  const [isOpen, setIsOpen] = useState(false);
  const currentValue = isControlled ? value : internalValue;
  const selectedOption = useMemo(
    () => options.find((option) => option.value === currentValue),
    [currentValue, options],
  );

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const selectValue = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full min-w-[210px]" ref={rootRef}>
      {name ? <input name={name} type="hidden" value={currentValue} /> : null}
      <button
        className="flex min-h-11 w-full items-center justify-between gap-3 rounded-[14px] border border-[#e5e7eb] bg-white px-4 text-left text-[15px] font-bold !text-[var(--color-ink)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition duration-200 hover:border-[#cbd2da] hover:bg-white focus-visible:border-[#ff7433] focus-visible:shadow-[0_0_0_4px_rgb(255_116_51/0.14)]"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${id}-listbox`}
        aria-label={ariaLabel}
        onClick={() => setIsOpen((state) => !state)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setIsOpen(false);
          }
        }}
      >
        <span className="truncate">{selectedOption?.label ?? placeholder}</span>
        <ChevronDown
          className={`shrink-0 text-[#737a82] transition duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={18}
        />
      </button>

      {isOpen ? (
        <div
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-[16px] border border-[#e5e7eb] bg-white p-1.5 shadow-[0_18px_50px_rgb(29_32_35/0.16)]"
          id={`${id}-listbox`}
          role="listbox"
        >
          {options.map((option) => {
            const isSelected = option.value === currentValue;

            return (
              <button
                className={`flex min-h-10 w-full items-center justify-between gap-3 rounded-[12px] px-3 text-left text-sm font-bold transition duration-150 ${
                  isSelected
                    ? "bg-[#fff0e8] !text-[#d95518]"
                    : "bg-transparent !text-[var(--color-ink)] hover:bg-[#f4f5f7]"
                }`}
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => selectValue(option.value)}
              >
                <span>{option.label}</span>
                {isSelected ? <Check size={16} /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
