import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import {
  Wrap,
  Container,
  Form,
  Button,
  Seper,
  Line,
  TextWrap,
} from "../components/LoginStyle";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();
  // =>페이지 경로를 설정 함

  const loginHandler = () => {
    alert("회원가입 되었습니다!");
    navi("/login");
    // =>메소드를 사용하여 작성한 경로로 이동함
  };

  return (
    <Wrap>
      <Container>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <h3>SIGN UP</h3>
          <input
            {...register("username", {
              required: "아이디는 필수 입니다.",
            })}
            type="text"
            placeholder="login"
          />
          <ErrorMessage message={errors?.username?.message} />

          <input
            {...register("name", {
              required: false,
            })}
            type="text"
            placeholder="name"
          />
          <ErrorMessage message={errors?.name?.message} />

          <input
            {...register("email", {
              required: false,
            })}
            type="text"
            placeholder="email"
          />
          <ErrorMessage message={errors?.email?.message} />

          <input
            {...register("password", {
              required: "패스워드는 필수 입니다.",
            })}
            type="password"
            placeholder="password"
          />
          <ErrorMessage message={errors?.password?.message} />

          <Button $isBtnActive={isValid}>SIGN UP</Button>
        </Form>

        <Seper>
          <Line />
          <span>OR</span>
          <Line />
        </Seper>

        <TextWrap>
          <p>
            이미 아이디가 있으신가요? <Link to={"/login"}>로그인</Link>
          </p>
        </TextWrap>
      </Container>
    </Wrap>
  );
};
