import Header from "./components/ex02/Header";
import Footer from "./components/ex02/Footer";
import { ExportEx, ExportEx2 } from "./components/ex03/ExportEx";
import { PropEx } from "./components/ex03/PropEx";
import { MapFnEx } from "./components/ex04/MapFnEx";
import { Ex05 } from "./components/ex05/Ex05";

const App = () => {
  return (
    <>
      {/* <Header />
      <Footer /> */}
      {/* 2일차 */}

      {/* <ExportEx />
      <ExportEx2 /> */}
      {/* <PropEx /> */}
      {/* 3일 */}

      {/* <MapFnEx /> */}
      {/* 4일차 */}

      <Ex05 />
    </>
  );
};

export default App;

// *JSX 문법
// =>react에서 사용하는 문법
// =>js 파일에서 html 태그를 사용할 수 있음
// =>반드시 태그를 닫아줘야됨
// =>반드시 부모가 있어야됨

// *fragment
// =>부모역할을 하는 태그
// =><></> 꺽쇠 괄호만 사용함
