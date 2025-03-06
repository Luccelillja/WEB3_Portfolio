import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import styles from "./App.module.css";

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Function to reveal the portfolio section
  const handleEnterPortfolio = () => {
    console.log("Enter Portfolio button clicked!"); // ✅ Debugging Log
    setShowPortfolio(true);
  };

  useEffect(() => {
    console.log("Updated showPortfolio state:", showPortfolio);
  }, [showPortfolio]);

  return (
    <div className={styles.appContainer}>
      {/* ✅ Ensure the function is passed down */}
      <LandingPage onEnterPortfolio={handleEnterPortfolio} />

      {showPortfolio && (
        <div className={styles.portfolioContainer}>
          <About />
          <Portfolio />
        </div>
      )}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import LandingPage from "./components/LandingPage";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import styles from "./App.module.css";

// const App = () => {
//   const [showPortfolio, setShowPortfolio] = useState(false);

//   // Function to reveal the portfolio section
//   const handleEnterPortfolio = () => {
//     console.log("Enter Portfolio button clicked!");
//     setShowPortfolio(true);
//     console.log("updated showPortfolio state:", showPortfolio);
//   };

//   return (
//     <div className={styles.appContainer}>
//       {/* Landing Page Stays Visible */}
//       <LandingPage onEnterPortfolio={handleEnterPortfolio} />

//       {/* Portfolio Section Appears Below */}
//       {showPortfolio && (
//         <div className={styles.portfolioContainer}>
//           <About />
//           <Portfolio />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// Original App.jsx

// import React from "react";
// import LandingPage from "./components/LandingPage";
// import About from "./components/About";
// import styles from "./App.module.css";

// const App = () => {
//   return (
//     <div>
//       <LandingPage />
//       {/* <div>
//         <About />
//       </div> */}
//     </div>
//   );
// };

// export default App;
