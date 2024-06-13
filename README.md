1일차
.....

3일차
\*export 두가지 방법
=>default로 사용시 컴포넌트 내부에는 하나만 사용
=>두개 이상의 컴포넌트를 내보내기 할땐
변수 앞에 붙여 사용
ex)
export const a = () => {}
=>import 사용시 두개 이상 컴포넌트를 불러올땐 중괄호 사용

ex)
import { ExportEx, ExportEx2 } from "./components/ex02/ExportEx";
