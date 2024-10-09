function Bill({ setBill }) {
  return (
    <div className="bill">
      <p> What was the total bill? </p>
      <input type="text" onChange={(e) => setBill(e.target.value)}></input>
    </div>
  );
}

export default Bill;
