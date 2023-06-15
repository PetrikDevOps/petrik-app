import loginPage from './pages/login';
import mainPage from './pages/main';
import chatPage from './pages/chat';

export default function App() {
  return (
    <div>
      {chatPage()}
    </div>
  );
}