import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        It's A Home Page;
        <br />See My Profile...
      </div>
      <Footer />
    </div>
  );
}
