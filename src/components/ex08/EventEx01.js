export const EventEx01 = () => {
  let num = 0;

  const plusHandler = () => {
    num++;
    console.log(num);
  };

  return (
    <div>
      <h3>클릭할때 숫자 증가</h3>
      <p>{num}</p>
      <button onClick={plusHandler}>+</button>
      <button>-</button>
    </div>
  );
};
