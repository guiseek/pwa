import { create, debounce } from "./utils";
import "./style.css";

app.appendChild(create("h1", { id: "title-bar" }, new Text("PR Web App")));

if ("windowControlsOverlay" in navigator) {
  navigator.windowControlsOverlay.addEventListener(
    "geometrychange",
    debounce((event) => {
      const { visible } = navigator.windowControlsOverlay;
      const { width } = event.titlebarAreaRect;
      const is = visible ? "visible" : "hidden";
      console.log(`Overlay is ${is} with ${width}px`);
    })
  );
}
