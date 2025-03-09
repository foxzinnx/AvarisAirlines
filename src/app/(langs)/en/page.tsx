import { About } from "@/components/ui/en-ui/about";
import { Avarisplus } from "@/components/ui/en-ui/avarisplus";
import { Footer } from "@/components/ui/en-ui/footer";
import { Header } from "@/components/ui/en-ui/header";
import { Main } from "@/components/ui/en-ui/main";
import { MaisInfo } from "@/components/ui/en-ui/maisinfo";
import { Viagens } from "@/components/ui/en-ui/viagens";
import { WorldMap } from "@/components/ui/en-ui/world-map";

export default function Page(){
    return(
        <div className="overflow-x-hidden lg:overflow-x-visible">
            <Header />
            <Main />
            <About />
            <Viagens />
            <Avarisplus />
            <WorldMap />
            <MaisInfo />
            <Footer />
        </div>
    );
}