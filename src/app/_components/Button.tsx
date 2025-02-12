import Image, { StaticImageData } from "next/image";
import '@/styles/button.scss'

interface ButtonProps {
    icon: string | StaticImageData;
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ icon, text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      <Image src={icon} alt="Icon" width={16.14} height={18} />
      {text}
    </button>
  );
};

export default Button;
