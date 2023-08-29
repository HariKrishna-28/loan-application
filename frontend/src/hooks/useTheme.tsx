"use client"

import  { useState, useEffect } from 'react'

const useTheme = () => {
    const [isDark, setisDark] = useState(false)

    const systemDarkTheme = () => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return true;
        } else {
            return false;
        }
    };

    const setTheme = () => {
        try {
            const currentTheme = localStorage.getItem('dark-theme')
            if (currentTheme === null) {
                const themePreference = systemDarkTheme()
                setisDark(themePreference)
                localStorage.setItem('dark-theme', JSON.stringify(themePreference))
            } else {
                setisDark(JSON.parse(currentTheme))
            }
            updateTheme()
        } catch (error) {
            setisDark(false)
        }
    }

    const updateTheme = () => {
        try {
            localStorage.setItem('dark-theme', JSON.stringify(isDark))
            document
                .querySelector("body")
                ?.setAttribute("data-theme", isDark ? "dark" : "light");
        } catch (error) {
            console.log(error)
        }
    }


    const toggleTheme = () => {
        try {
            setisDark(!isDark)
            updateTheme()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTheme()
        updateTheme()
    }, [])

  return{setTheme, updateTheme, isDark, toggleTheme}
}

export default useTheme

// const useTheme:React.FC = () => {

    
//     return (
//         <div>useTheme</div>
//     )
// }
