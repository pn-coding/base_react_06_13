import { useForm } from "react-hook-form";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  padding: 5px 50px;
  background-color: salmon;
  color: white;
  opacity: ${(props) => props.$isLoggedIn};
`;

export const Ex12 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = (data) => {
    // console.log(data);
    const { username, password } = data;
    // const inputUserName = data.username;
    // const inputPassword = data.password;
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
  };

  // console.log(isValid);

  return (
    <div>
      <form onSubmit={handleSubmit(loginHandler)}>
        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
            minLength: {
              value: 2,
              message: "아이디는 2자리 이상 작성해 주셔야 합니다.",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해 주셔야 합니다.",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message: "영문 숫자 특수기호 조합 8자리 이상 작성해 주세요",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <Button $isLoggedIn={isValid ? "1" : "0.5"}>로그인</Button> <br />
        {/* {errors && errors.username && errors.username.message} */}
        <span style={{ color: "red" }}>{errors?.username?.message}</span>
        <span style={{ color: "red" }}>{errors?.password?.message}</span>
      </form>
    </div>
  );
};

// *로그인
// =>아이디 유무 확인
// =>패스워드 맞는지 확인
// =>중복 유무
// =>아이디는 2자리이상
// =>패스워드 8자리 이상
// =>패스워드는 특수문자, 숫자, 대 소문자가 있는지
// =>띄어쓰기 확인
// =>이메일 로그인이라면 메일 형식에 맞는지 확인
// =>전화번호 로그인이라면 메일 형식에 맞는지 확인
// =>패스워드가 20자내에 작성
// =>비번이 이름이랑 생일 아이디랑 동일한지 유무 확인
// =>아이디를 입력해주세요
// =>비밀번호를 입력해주세요

// C: Create
// R: Read
// U: Update
// D: Delete

// *useForm
// =>폼 상태 관리 훅

// ex)
// const {
//     register,
//     handleSubmit,
//     formState:{
//         errors,
//         isValid
//     }
// } = useForm();

// 1.register
// => input 태그에 등록을 하며, name속성과, required속성을 대신함
// => <input {...register("이름", {
//     required:"오류 났을때 메세지 작성"
// })}/>

// 2.handleSubmit
// =>form 태그의 이벤트 담당
// =><form onSubmit={handleSubmit(폼 핸들링작성)}></form>

// 3.formState
// =>폼 상태 담당
// =>errors: 폼 내부의 에러 발생시 객체로 값을 반환함
// =>isValid: 폼 내용이 유효한지 판단후 boolean값으로 반환함

// *spread 연산자
// => ...객체
// =>객체의 {}중괄호를 제거 후 내용만 가져옴

// *옵셔널 체이닝
// =>?.
// =>객체의 접근성을 유연하게 확인후 값이 있다면 반환함
