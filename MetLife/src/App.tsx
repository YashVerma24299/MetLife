import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import HomePage from "./pages/HomePage/HomePage";
import GenerateVideo from "./pages/GenerateVideo/GenerateVideo";
import UploadScript from "./pages/Upload/UploadScript";
import Default from "./pages/Default/Default";
import GenerateScript from "./pages/GenerateScript/GenerateScript";
import YourScript from "./pages/YourScript/YourScript";
import VisualPage from "./pages/VisualPage/VisualPage";
import Audio_Animation from "./pages/AudioAnimation/Audio&Animation";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route element={<DashboardLayout />}>
        <Route path="/videos" element={<Default title="Videos" />} />
        <Route path="/progress" element={<Default title="Progress" />} />
        <Route path="/completed" element={<Default title="Completed" />} />
        <Route path="/settings" element={<Default title="Settings" />} />

        <Route path="/dashboard">
          <Route index element={<HomePage />} />
          <Route path="createvideo">
            <Route index element={<GenerateVideo />} />
            <Route path="upload" element={<UploadScript />} />

            <Route path="generate">
              <Route index element={<GenerateScript />} />
              <Route path="script">
                <Route index element={<YourScript />} />
                <Route path="visuals">
                  <Route index element={<VisualPage />} />
                  <Route path="audio-animation" element={<Audio_Animation />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
