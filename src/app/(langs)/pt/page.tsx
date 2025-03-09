import { About } from "@/components/ui/about";
import { Avarisplus } from "@/components/ui/avarisplus";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import { MaisInfo } from "@/components/ui/maisinfo";
import { Viagens } from "@/components/ui/viagens";
import { WorldMap } from "@/components/ui/world-map";

export default function Page() {
    return (
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