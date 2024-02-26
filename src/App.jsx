import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import { MantineProvider, createTheme } from "@mantine/core";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations.jsx";


const theme = createTheme({
  body: {
    width: "100vw",
    height: "100vh"
  },
  "#root": {
    width: "100%",
    height: "100%",
  }
});

export default function App() {
  return (
  <MantineProvider theme={theme}>    
    <CharacterAnimationsProvider>
    <Canvas camera={{ position: [0, 4, 10], fov: 80 }} shadows> 
    <Experience />
            </Canvas>
      <Interface />
    </CharacterAnimationsProvider>
  </MantineProvider>
  );
}