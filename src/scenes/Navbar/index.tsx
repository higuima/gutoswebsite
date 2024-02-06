import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Link from "./Link";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
};

const Navbar = ( {selectedPage,setSelectedPage} : Props) => {
    const flexCenter = 'flex items-center justify-center'
    const flexEnd = "flex items-center justify-end";
    const flexBetween = "flex  items-center justify-around";
    const [isMenuToggled, setMenuToggled ] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return <nav>
    <div className={`${flexEnd} sticky top-0 z-30 w-full py-6`}>
        <div className={`${flexCenter} mx-auto w-5/6`}>
        {isAboveMediumScreens ? (
                <div className={`${flexCenter} w-full`}>
                    <div className={`${flexBetween} text-4xl text-white-100 font-extralight w-full`}>
                        <Link 
                            page="HOME" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="SERVIÇOS"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="CONTATO"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
                ) : (
                    <button
                        className='fixed right-8 rounded-full bg-black-400 p-2 mt-10'
                        onClick={() => setMenuToggled(!isMenuToggled)}
                    >
                        <Bars3Icon className="h-6 w-6 text-white" />
                    </button>
                )}
        </div>
    </div>

    {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreens && isMenuToggled && (
        // if you want menu on the left, it should be left-0
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-black-100 drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
                <button onClick={() => setMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-black-400"/>
                </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl text-white-100 font-extralight">
                <Link 
                    page="HOME" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link 
                    page="SERVIÇOS"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link 
                    page="CONTATO"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
        </div>
    )}

  </nav>;
}

export default Navbar