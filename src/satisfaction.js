function Satisfaction({ satisfaction, SetSatisfaction, index, children }) {
  return (
    <div className="bill">
      {children}
      <Dropdown
        satisfaction={satisfaction}
        SetSatisfaction={SetSatisfaction}
        index={index}
      />
    </div>
  );
}

function Dropdown({ satisfaction, SetSatisfaction, index }) {
  function handleSatisfaction(e) {
    index === 0
      ? SetSatisfaction([e.target.value, satisfaction[1]])
      : SetSatisfaction([satisfaction[0], e.target.value]);
  }
  return (
    <select onChange={(e) => handleSatisfaction(e)}>
      <option value="0">Not Good(0%)</option>
      <option value="5">Ok(5%)</option>
      <option value="10">It was Good(10%)</option>
      <option value="20">Absolutely amazing(20%)</option>
    </select>
  );
}

export default Satisfaction;
