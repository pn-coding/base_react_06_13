import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};

  return (
    <Wrap>
      <Container>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <h3>LOGIN</h3>
          <input
            {...register("username", {
              required: "아이디는 필수 입니다.",
            })}
            type="text"
            placeholder="login"
          />
          <ErrorMessage message={errors?.username?.message} />

          <input
            {...register("password", {
              required: "패스워드는 필수 입니다.",
            })}
            type="password"
            placeholder="password"
          />
          <ErrorMessage message={errors?.password?.message} />

          <Button $isBtnActive={isValid}>LOGIN</Button>
        </Form>

        <Seper>
          <Line />
          <span>OR</span>
          <Line />
        </Seper>

        <TextWrap>
          <p>
            아이디가 없으신가요? <Link to={"/signup"}>회원가입</Link>
          </p>
        </TextWrap>
      </Container>
    </Wrap>
  );
};
