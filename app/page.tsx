import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
        <Banner 
            content={"Amrita Centre for Entrepreneurship is under construction."}
            boldContent={"Thank you for your patience!"}
            display={true}
        />
        <div className="text-center py-20">
            <b>Banner </b>
                and
            <b> Footer </b>
                complete.
        </div>
        <Footer />
    </div>
  );
}
