// import original module declaration
import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      type: string;
      primary: string;
      secondary: string;
      background: {
        default: string;
        paper: string;
      };
    };
    typography: { color: string; fontFamily?: string };
  }
}
