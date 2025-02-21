import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LanguageDropdown = () => {
  const params = useParams();

  const languageOptions = [
    { value: "en", label: "English", image: "/svg/en.svg" },
    { value: "es", label: "Spanish", image: "/svg/es.svg" },
    { value: "de", label: "German", image: "/svg/de.svg" },
    { value: "fr", label: "French", image: "/svg/es.svg" },
    { value: "it", label: "Italian", image: "/svg/pt.svg" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleChangeLanguage = (option: any) => {
    window.location.href = `/${option.value}`;
  };

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedLanguage(
      languageOptions.find((option) => option.value === params.locale) ||
        languageOptions[0]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 text-sm group-hover:bg-black text-white p-2 border-[1px] border-white/30 rounded w-24 duration-150"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Image
          src={selectedLanguage.image}
          alt={selectedLanguage.label}
          width={20}
          height={20}
        />
        <p className="text-sm text-white font-semibold">
          {selectedLanguage.label}
        </p>
        <ChevronDown size={16} />
      </button>
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-black border border-white/20 text-white rounded shadow z-[60]">
          {languageOptions.map((option) => (
            <button
              key={option.value}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-900 w-28 text-left duration-150"
              onClick={() => handleChangeLanguage(option)}
            >
              <Image
                src={option.image}
                alt={option.label}
                width={20}
                height={20}
              />
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
