export function PopularPairContainer({ pairs }: { pairs: string[] }) {
  return (
    <div className="flex gap-3 p-3 bg-custom-blue-900 rounded-[30px]">
      {pairs.map((pair, index) => (
        <img
          key={`${pair}_${index}`}
          src={pair}
          alt=""
          width={22}
          height={22}
        />
      ))}
    </div>
  );
}
