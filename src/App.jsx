import {
  About,
  ContactForm,
  Footer,
  FrequentlyAQ,
  Header,
  Plane,
} from "./components";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <About />
      <Plane />
      <ContactForm />
      <FrequentlyAQ />
      <Footer />
    </div>
  );
}

export default App;
