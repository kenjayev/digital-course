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
    <div className="bg-black">
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
