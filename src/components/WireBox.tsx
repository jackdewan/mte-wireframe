interface WireBoxProps {
  label: string;
}

export const WireBox = ({ label }: WireBoxProps) => {
  return (
    <div className="h-20 bg-gray-300 border-2 border-gray-400 w-full my-2 flex justify-center items-center">
      {label}
    </div>
  );
};
