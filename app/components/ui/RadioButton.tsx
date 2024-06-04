const RadioButton = ({ active }: { active: boolean }) => {
  return active ? (
    <div className="w-5 h-5 border-2 border-[#d4840b] rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-[#d4840b] rounded-full"></div>
    </div>
  ) : (
    <div className="w-5 h-5 border-2 border-[#d4840b] rounded-full"></div>
  );
};

export default RadioButton;
