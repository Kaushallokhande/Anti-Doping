import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; 

const stats = [
  { id: 1, name: 'athletesWorldwide', value: '500' },
  { id: 2, name: 'dopingIncidence', value: '10' },
  { id: 3, name: 'dopingRelatedDeath', value: '15' },
];

function formatNumber(value) {
  return value.replace(/[^0-9]/g, '');
}

export default function Stats() {
  const [hoveredId, setHoveredId] = useState(null);
  const { t } = useTranslation();  

  return (
    <div className="bg-white py-4 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              id={stat.id}
              name={t(`stats.${stat.name}`)}
              value={stat.value}
              isHovered={hoveredId === stat.id}
              onMouseEnter={() => setHoveredId(stat.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          ))}
        </dl>
      </div>
    </div>
  );
}

function StatCard({ id, name, value, isHovered, onMouseEnter, onMouseLeave }) {
  const [displayValue, setDisplayValue] = useState('0');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      const endValue = formatNumber(value);
      let startValue = 0;
      intervalRef.current = setInterval(() => {
        startValue += Math.ceil(parseInt(endValue) / 50);
        if (startValue >= parseInt(endValue)) {
          setDisplayValue(`${endValue}+`);
          clearInterval(intervalRef.current);
        } else {
          setDisplayValue(`${startValue.toString()}+`);
        }
      }, 50);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setDisplayValue(`${formatNumber(value)}+`);
    }
  }, [isHovered, value]);

  return (
    <div
      className="mx-auto flex max-w-xs flex-col gap-y-4 mt-8"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <dt className="text-base leading-7 text-gray-600">{name}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl transform transition-transform duration-300 hover:scale-105">
        {displayValue}
      </dd>
    </div>
  );
}
