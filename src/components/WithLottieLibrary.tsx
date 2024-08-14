import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function WithLottieLibrary(){


  return(
    <DotLottieReact
      src="src/Prueba.json"
      loop
      autoplay
    />
  );
}