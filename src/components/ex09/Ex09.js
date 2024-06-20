import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Header } from "./components/Header";

export const Ex09 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// *react-router-dom
// =>리액트 경로 설정
// =>Router -> Routes -> Route 순서
// =>Router는 2가지 종류가 있음
// 1.HashRouter: /#/ 형식으로 사용됨
// 2.BrowserRouter: / 형식으로 사용됨

// =>Route 프롭스
// 1.path: 경로 지정
// 2.element: 지정한 경로를 입력하면 보여줄 페이지의 컴포넌트
// =>/* 경로는 지정한 경로가 없을때 (404 페이지)
// => /:변수명  으로 설정하면 경로에 변수를 지정할 수있음
