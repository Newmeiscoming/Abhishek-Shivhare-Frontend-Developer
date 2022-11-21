import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Capsules,
  Crew,
  SingleCrew,
  Launchpads,
  SingleLaunchPad,
  Rockets,
  SingleRocket,
} from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/crew/:id" element={<SingleCrew />}></Route>
        <Route path="/launchpads" element={<Launchpads />}></Route>
        <Route path="/launchpads/:id" element={<SingleLaunchPad />}></Route>
        <Route path="/rockets" element={<Rockets />}></Route>
        <Route path="/rockets/:id" element={<SingleRocket />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
