import {FiSun, FiMoon} from "react-icons/fi";
import {useState} from "react";

function DarkToggle() {
    // 表明变量被react接管
    const [isDark, setIsDark] = useState(false);
    const toggleDark = () => {
        setIsDark(!isDark);
    }
    // document.documentElement.classList.toggle("dark");
    const root = document.documentElement;
    if (isDark) {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark")
    }


    return (<button className="p-1 bg-gray-200 dark:bg-gray-600 rounded-full
    hover:bg-gray-300 dark:hover:bg-gray-400 transition-all duration-300
    hover:rotate-12
    " onClick={toggleDark}>
        {!isDark ? (
            <FiMoon size={24} className="text-gray-800 dark:text-gray-200 animate-pulse"/>
        ) : (<FiSun size={24} className="text-yellow-400 animate-pulse"/>)}
    </button>)
}

export default DarkToggle;