type Props = {
  label: string;
  value: number;
};

const StatBlock = ({ label, value }: Props) => {
  return (
    <div className="flex flex-col justify-start gap-1">
      <p className="small-semibold lg:body-bold text-primary-500">{value}</p>
      <p className="small-medium lg:base-medium text-light-2">{label}</p>
    </div>
  );
};

export default StatBlock;
