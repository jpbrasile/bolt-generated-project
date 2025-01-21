import { useState } from 'react'
    import Confetti from 'react-confetti'
    import { FaMoon, FaSun } from 'react-icons/fa'

    export default function App() {
      const [showConfetti, setShowConfetti] = useState(false)
      const [isDarkMode, setIsDarkMode] = useState(false)

      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle('dark')
      }

      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
          {showConfetti && <Confetti />}
          
          <h1 className="text-6xl font-bold text-center">
            🎉 Hello World! 🌍✨
          </h1>
          
          <button
            onClick={() => setShowConfetti(true)}
            className="mt-8 px-8 py-4 text-2xl font-bold bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            🎊 Launch Confetti! 🎊
          </button>

          <button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>
      )
    }
