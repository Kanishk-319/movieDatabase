import React, { useState }  from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
function MenuAndTopDisplay() {
    const [done, setDone] = useState(false);
  return (
    <div>
      <div className="topContent">
        <div className="barcontainer">
          <motion.div
            onClick={() => {
              setDone(true);
            }}
            animate={{
              rotate: done && [0, 240],
              opacity: done ? [1, 0] : 1,
              display: done && ["flex", "none"],
            }}
            transition={{ duration: 0.35, display: { delay: 0.35 } }}
            style={{ height: "max-content", margin: "10px" }}
          >
            <MenuIcon
              style={{
                color: "#333",
                fontSize: "40px",
                cursor: "pointer",
                color: "white",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ x: "-350px" }}
            animate={{
              x: done && "0px",
              display: done && ["none", "flex"],
            }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="navbar"
          ></motion.div>
        </div>
        <div className="trendingMovies"></div>
      </div>
    </div>
  );
}

export default MenuAndTopDisplay;
