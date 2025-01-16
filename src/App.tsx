import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import FetchData from "./FetchData";
import "./App.css"

export default function App() {
  return <MantineProvider theme={theme}>
    <FetchData></FetchData>
  </MantineProvider>;
}
