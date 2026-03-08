interface LimitFilterProps {
  maxLimit: number;
  currentLimit: number;
  onLimitChange: (limit: number) => void;
  onLimitChangeCommitted?: (limit: number) => void;
}

export default function LimitFilter({
  maxLimit,
  currentLimit,
  onLimitChange,
  onLimitChangeCommitted,
}: LimitFilterProps) {
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLimitChange(Number(e.target.value));
  };

  const handleCommit = (
    e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>,
  ) => {
    if (onLimitChangeCommitted) {
      onLimitChangeCommitted(Number(e.currentTarget.value));
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Limite Pré-Aprovado
        </p>

        <p className="text-xl font-bold text-green-600">
          {formatCurrency(currentLimit)}
        </p>
      </div>

      <input
        type="range"
        min={0}
        max={maxLimit}
        step={1}
        value={currentLimit}
        onChange={handleChange}
        onMouseUp={handleCommit}
        onTouchEnd={handleCommit}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
        aria-label="Selecionar limite de empréstimo"
      />

      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{formatCurrency(0)}</span>
        <span>{formatCurrency(maxLimit)}</span>
      </div>
    </div>
  );
}
