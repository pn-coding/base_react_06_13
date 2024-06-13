import { Ex } from "./Ex";
import { IntroEx } from "./IntroEx";

const menus = [
  {
    id: 0,
    name: "김치찌개",
    sub: "콜라",
  },
  {
    id: 1,
    name: "마라탕",
    sub: "꿔바로우",
  },
  {
    id: 3,
    name: "피자",
    sub: "맥주",
  },
  {
    id: 4,
    name: "엽기 떡볶이",
    sub: "주먹밥",
  },
];

export const PropEx = () => {
  return (
    <div>
      {/* <IntroEx name="이정환" age="12" />
      <IntroEx name="월요일" age="13" />
      <IntroEx name="화요일" age="14" /> */}
      <Ex menu={menus} />
    </div>
  );
};
