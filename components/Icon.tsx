import React from "react";
import {
  PythonOriginal,
  JavascriptOriginal,
  CplusplusOriginal,
  COriginal,
  ReactOriginal,
  Html5Original,
  Css3Original,
  JavaOriginal,
  TailwindcssPlain,
  FigmaOriginal,
  LinuxOriginal,
  GitOriginal,
  NpmOriginalWordmark,
  NodejsOriginal,
  NextjsOriginal,
  ElectronOriginal,
  ExpressOriginal,
  FirebasePlain,
  NumpyOriginal,
  MatlabOriginal,
  MongodbOriginal,
  MysqlOriginal,
  TypescriptOriginal,
  ThreejsOriginalWordmark,
  AmazonwebservicesOriginal,
  DockerOriginal,
  KotlinOriginal,
  SwiftOriginal,
  BehanceOriginal,
} from "devicons-react";

("use-client");

interface IconProps {
  iconName: string;
  size?: number;
}

function Icon({ iconName, size = 40 }: IconProps) {
  const icons = {
    Python: PythonOriginal,
    JavaScript: JavascriptOriginal,
    React: ReactOriginal,
    "C++": CplusplusOriginal,
    C: COriginal,
    HTML: Html5Original,
    CSS: Css3Original,
    Java: JavaOriginal,
    TailwindCSS: TailwindcssPlain,
    Figma: FigmaOriginal,
    Linux: LinuxOriginal,
    Git: GitOriginal,
    npm: NpmOriginalWordmark,
    "Node.js": NodejsOriginal,
    "Next.js": NextjsOriginal,
    Electron: ElectronOriginal,
    Express: ExpressOriginal,
    numpy: NumpyOriginal,
    Firebase: FirebasePlain,
    MATLAB: MatlabOriginal,
    MongoDB: MongodbOriginal,
    MySQL: MysqlOriginal,
    TypeScript: TypescriptOriginal,
    ThreeJS: ThreejsOriginalWordmark,
    AWS: AmazonwebservicesOriginal,
    Docker: DockerOriginal,
    Kotlin: KotlinOriginal,
    Swift: SwiftOriginal,
  };
  var SomeIcon =
    iconName in icons ? icons[iconName as keyof typeof icons] : PythonOriginal;
  return (
    <div className="app">
      <SomeIcon size={size} />
    </div>
  );
}

Icon.defaultProps = {};

export default Icon;
