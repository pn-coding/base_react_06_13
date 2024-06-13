export const IntroEx = ({ name, age }) => {
  //   console.log(props);
  //   const name = props.name;
  //   const age = props.age;

  //   const { name, age } = props;
  //   =>객체 비구조화 할당
  //   =>객체 내부에 접근하여 속성을 쉽게 가져올 수 있음
  //   console.log(name, age);

  return (
    <div>
      <h2>이름: {name}</h2>
      <h2>나이: {age}</h2>
    </div>
  );
};
