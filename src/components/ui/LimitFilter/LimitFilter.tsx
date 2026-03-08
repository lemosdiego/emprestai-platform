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
    <div className=" listPlans-section-aside-container-body-filter__container">
      <div className="listPlans-section-aside-container-body-filter-container__limit">
        <h4>Limite Pré-Aprovado</h4>
        <p>{formatCurrency(currentLimit)}</p>
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
        aria-label="Selecionar limite de empréstimo"
      />

      <div className=" listPlans-section-aside-container-body-filter-container__limit-range">
        <span>{formatCurrency(0)}</span>
        <span>{formatCurrency(maxLimit)}</span>
      </div>
    </div>
  );
}
