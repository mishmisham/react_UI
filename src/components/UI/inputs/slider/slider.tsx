import React, { useCallback, useEffect, useState, useRef } from 'react';
import './slider.scss';

interface SliderProps {
  min: number;
  max: number;
  onChange: (value: { min: number; max: number }) => void;
  singleRange?: boolean;
  theme?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  presetValues?: { min?: number; max?: number };
}

const RangeSlider: React.FC<SliderProps> = ({
  min,
  max,
  onChange,
  singleRange = false,
  theme = 'primary',
  disabled = false,
  presetValues = { min: min, max: max }
}) => {
  const [minVal, setMinVal] = useState(presetValues.min ?? min);
  const [maxVal, setMaxVal] = useState(presetValues.max ?? max);
  const minValRef = useRef(minVal);
  const maxValRef = useRef(maxVal);
  const range = useRef<HTMLDivElement | null>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // mish
  // опять два useEffect =)
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(singleRange ? maxVal : maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, singleRange, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  // mish
  // onChange={(event) => и тд - нужно ее все же вынести в код)
  /*
    const myFunction = (e) => { ... }

    ....

    onChange={myFunction} // аргумент автоматом передастся при событии - обрати внимание - тут без скобок
  */
  return (
    <div className={`range-slider ${theme} ${disabled ? 'disabled' : ''}`}>
      {!singleRange && (
        <>
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(event) => {
              const value = Math.min(Number(event.target.value), maxVal - 1);
              setMinVal(value);
              minValRef.current = value;
            }}
            className={`thumb thumb--left`}
            style={{ zIndex: minVal > max - 100 ? '5' : undefined }}
            disabled={disabled}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(event) => {
              const value = Math.max(Number(event.target.value), minVal + 1);
              setMaxVal(value);
              maxValRef.current = value;
            }}
            className={`thumb thumb--right`}
            disabled={disabled}
          />
        </>
      )}
      {singleRange && (
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal);
            setMinVal(value);
            minValRef.current = value;
          }}
          className={`thumb thumb--single`}
          disabled={disabled}
        />
      )}
      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

export default RangeSlider;
