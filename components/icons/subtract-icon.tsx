interface SubtractIconProps {
  color?: string;
}

const SubtractIcon = ({ color = '#A3A3A3' }: SubtractIconProps) => {
  return (
    <svg
      width="10"
      height="3"
      viewBox="0 0 10 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.86102 0.972092H0.138794V2.36098H9.86102V0.972092Z"
        fill={color}
      />
    </svg>
  );
};

export default SubtractIcon;
