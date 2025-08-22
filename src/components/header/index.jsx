import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Moon, Sun } from "lucide-react"; // ikonalar

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="px-2 xl:px-10 py-1 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
            <div className="my-3 flex items-center justify-between">
                {/* Logo */}
                <img src={Logo} alt="Logo" className="h-10" />

                {/* Toggle button */}
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:opacity-80 transition"
                >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </div>
    );
};

export default Header;
