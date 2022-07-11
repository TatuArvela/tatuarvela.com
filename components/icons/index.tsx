import Image from "next/image";

import closeOutline from "./svg/close-outline.svg";
import menuOutline from "./svg/menu-outline.svg";

type IconProps = { src: string };

const Icon = ({ src }: IconProps) => (
  <span>
    <Image src={src} alt="icon" />
  </span>
);

export const CloseOutline = () => <Icon src={closeOutline} />;
export const MenuOutline = () => <Icon src={menuOutline} />;
