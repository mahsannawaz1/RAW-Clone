import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import {
  SiNintendo,
  SiAtari,
  SiCommodore,
  SiD3Dotjs,
  SiSega,
} from "react-icons/si";

interface Props {
  platformName: string;
}

const Platform = ({ platformName }: Props) => {
  return (
    <div>
      {(platformName === "pc" && <FaWindows size={20} color="grey" />) ||
        (platformName === "playstation" && (
          <FaPlaystation size={20} color="grey" />
        )) ||
        ((platformName === "xbox" ||
          platformName === "xbox-series-x" ||
          platformName === "xbox360") && <FaXbox size={20} color="grey" />) ||
        (platformName === "ios" && (
          <MdOutlinePhoneAndroid size={20} color="grey" />
        )) ||
        (platformName === "mac" && <FaApple size={20} color="grey" />) ||
        (platformName === "android" && <FaAndroid size={20} color="grey" />) ||
        (platformName === "nintendo" && (
          <SiNintendo size={20} color="grey" />
        )) ||
        (platformName === "linux" && <FaLinux size={20} color="grey" />) ||
        (platformName === "atari" && <SiAtari size={20} color="grey" />) ||
        (platformName === "commodore-amiga" && (
          <SiCommodore size={20} color="grey" />
        )) ||
        (platformName === "3do" && <SiD3Dotjs size={20} color="grey" />) ||
        (platformName === "sega" && <SiSega size={20} color="grey" />)}
    </div>
  );
};

export default Platform;
