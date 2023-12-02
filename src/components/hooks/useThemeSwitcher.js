"use client"
// import { useEffect, useState } from "react";




// export default function useThemeSwitcher() {
//     const preferDarkQuery = "(prefers-color-scheme: dark)";
//     const [mode, setMode] = useState("");

//     useEffect(() => {
//         const mediaQuery = window.matchMedia(preferDarkQuery);
//         const userPref = window.localStorage.getItem("theme");

//         const handleChange = () => {
//             if (userPref) {
//                 let check = userPref === "dark" ? "dark" : "light";
//                 setMode(check);
//                 if (check === "dark") {
//                     document.documentElement.classList.add("dark")
//                 } else {
//                     document.documentElement.classList.remove("dark")
//                 }
//             } else {
//                 let check = mediaQuery.matches ? "dark" : "light"
//                 setMode(check);
//                 window.localStorage.setItem(
//                     "theme",
//                     check
//                 );
//                 if (check === "dark") {
//                     document.documentElement.classList.add("dark")
//                 } else {
//                     document.documentElement.classList.remove("dark")
//                 }
//             }
//         };

       
//         handleChange()

//         mediaQuery.addEventListener("change", handleChange);
//         return () => mediaQuery.removeEventListener("change", handleChange)

//     }, [])


//     useEffect(() => {
//         if (mode === "dark") {
//             window.localStorage.setItem("theme", "dark")
//             document.documentElement.classList.add("dark")

//         } else {
//             window.localStorage.setItem("theme", "light")
//             document.documentElement.classList.remove("dark")
//         }
//     }, [mode])


//     return [mode, setMode]

// };


import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                window.localStorage.setItem("theme", check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
            // Set loading to false once the theme is determined
            setIsLoading(false);
        };

        handleChange();

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);


    useEffect(() => {
        // Only set the theme if loading is false
        if (!isLoading) {
            if (mode === "dark") {
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
            } 
            
            if(mode === "light"){
                window.localStorage.setItem("theme", "light");
                document.documentElement.classList.remove("dark");
            }
        }
    }, [mode, isLoading]);


    return [mode, setMode];
}
