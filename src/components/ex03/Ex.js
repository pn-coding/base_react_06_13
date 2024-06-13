export const Ex = ({ menu }) => {
  console.log(menu);
  return (
    <div>
      <h2>오늘의 메뉴</h2>
      <div>이름:{menu[0].name}</div>
      <div>사이드:{menu[0].sub}</div>
      <hr />
      <div>이름:{menu[1].name}</div>
      <div>사이드:{menu[1].sub}</div>
      <hr />
      <div>이름:{menu[2].name}</div>
      <div>사이드:{menu[2].sub}</div>
      <hr />
      <div>이름:{menu[3].name}</div>
      <div>사이드:{menu[3].sub}</div>
      <hr />
    </div>
  );
};
