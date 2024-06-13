import { Ex01 } from "./Ex01";

// const nums = [1, 2, 3, 4, 5];
// console.log(nums);

// nums.map((n) => console.log(n * 2));

const data = [
  {
    id: 0,
    imgUrl:
      "https://blog.kakaocdn.net/dn/CNxUY/btqw7dnElRU/HuVZgvpT6J8n4aEYFathEk/img.jpg",
    title: "네이버",
    desc: "네이버 바로가기",
    linkUrl: "https://naver.com",
  },
  {
    id: 1,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwjiYZCzLvTuyhNo66ezaz4U_Pe127pS1qw&s",
    title: "유튜브",
    desc: "유튜브 바로가기",
    linkUrl: "https://youtube.com",
  },
  {
    id: 2,
    imgUrl:
      "https://i.namu.wiki/i/IqmOmj71Vd9La5zunuoLdkOXMuy8BHcg2Hk5KN-oGgJp1gvlCytffdNpbUwd3P4WfORoqi7cad4f71d6uOgEug.svg",
    title: "카카오",
    desc: "카카오 바로가기",
    linkUrl: "https://kakao.com",
  },
];

export const MapFnEx = () => {
  return (
    <div>
      {/* {nums.map((n) => (
        <div key={n}>
          <div>배열내용</div>
          <h2>{n + "❤"}</h2>
        </div>
      ))} */}

      <Ex01 />
    </div>
  );
};

// *map
// =>배열의 요소의 값을 변환하여
// 새로운 요소값으로 반환할때 사용
// =>배열의 개수만큼 반복함
// =>jsx에서 사용시 반환되는 첫번째 태그에
// 유니크한 key값을 넣어줄것
