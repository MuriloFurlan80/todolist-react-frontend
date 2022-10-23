import Route from "@/main/route";
import { ThemeContext } from "@/main/theme";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <ThemeContext><Route/></ThemeContext>,
    document.getElementById("main")
    )