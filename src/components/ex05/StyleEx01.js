// import "./css/style.css";

export const StyleEx01 = () => {
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "gray",
        }}
      ></div>
      {/* =>태그내부에 사용하는 인라인 스타일  */}

      <div className="box"></div>
      {/* =>jsx문법내부에서 class속성은 사용할수 없음
      =>class속성을 사용할땐 className으로 사용할것 */}
    </div>
  );
};
