import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import { ModalProvider } from './context/ModalContext';
import AppointmentModal from './components/AppointmentModal';

function App() {
  return (
    <ModalProvider>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Home />
        </main>
        <WhatsAppButton />
        <Footer />
        <AppointmentModal />
      </div>
    </ModalProvider>
  );
}

export default App;
