import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
    onclick?: () => void;
}



const Link = ({
    page,
    selectedPage,
    onclick
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
            transition duration-5 hover:text-primary-500
        `}
        href={`#${lowerCasePage}`}
        onClick={onclick}
    >
        {page}
    </AnchorLink>
  )
}

export default Link