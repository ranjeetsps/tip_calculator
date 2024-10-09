function Output({ bill, satisfaction }) {
  const finalsatisfaction =
    (Number(satisfaction[0]) + Number(satisfaction[1])) / 2;
  console.log(satisfaction[0], satisfaction[1]);
  console.log("finalsatisfaction", finalsatisfaction);
  const tip = (finalsatisfaction / 100) * bill;
  const finalbill = Number(bill) + Number(tip);

  return (
    <div className="output">
      <p>
        {" "}
        You pay total of {finalbill}$ ( {"$"}
        {bill} + {"$"}
        {tip} )
      </p>
    </div>
  );
}

export default Output;
