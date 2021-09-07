import React from 'react';

interface iconProps {
  props: React.SVGProps<SVGSVGElement>;
}

const PolishFlag: React.FC<iconProps> = ({ props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <circle cx={256} cy={256} r={256} fill="#f0f0f0" />
      <path d="M512 256c0 141.384-114.616 256-256 256S0 397.384 0 256" fill="#d80027" />
    </svg>
  );
};

export default PolishFlag;
