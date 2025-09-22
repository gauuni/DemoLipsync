import { Loader } from "@react-three/drei";
import { UI } from "./components/UI";
import { Lipsync } from "wawa-lipsync";

export const lipsyncManager = new Lipsync();

function App() {
  return (
    <>
      <Loader />
      <UI />
    </>
  );
}

export default App;
