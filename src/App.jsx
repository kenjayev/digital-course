import { Toaster } from "react-hot-toast";
import {
  About,
  AboutAuthor,
  ContactForm,
  Footer,
  FrequentlyAQ,
  Header,
  Plane,
} from "./components";

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Toaster
        style={{ background: "red" }}
        toastOptions={{
          style: {
            fontSize: "18px", // Shrift o‘lchamini kattalashtirish
          },
        }}
        position="top-right"
        reverseOrder={false}
      />
      <Header />
      <About />
      <AboutAuthor />
      <Plane />
      <ContactForm />
      <FrequentlyAQ />
      <Footer />
    </div>
  );
}

export default App;
