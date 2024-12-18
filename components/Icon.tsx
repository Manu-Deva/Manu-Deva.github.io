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
  TailwindcssOriginal,
  FigmaOriginal,
  LinuxOriginal,
  GitOriginal,
  NpmOriginalWordmark,
  NodejsOriginal,
  NextjsOriginal,
  ElectronOriginal,
  ExpressOriginal,
  FirebasePlain,
  FirebaseOriginal,
  NumpyOriginal,
  MatlabOriginal,
  MongodbOriginal,
  MysqlOriginal,
  TypescriptOriginal,
  ThreejsOriginalWordmark,
  AmazonwebservicesOriginalWordmark,
  DockerOriginal,
  KotlinOriginal,
  SwiftOriginal,
  ScalaOriginal,
  SqliteOriginal,
  BehanceOriginal,
  RaspberrypiOriginal,
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
    TailwindCSS: TailwindcssOriginal,
    Figma: FigmaOriginal,
    Linux: LinuxOriginal,
    Git: GitOriginal,
    npm: NpmOriginalWordmark,
    "Node.js": NodejsOriginal,
    "Next.js": NextjsOriginal,
    Electron: ElectronOriginal,
    Express: ExpressOriginal,
    numpy: NumpyOriginal,
    Firebase: FirebaseOriginal,
    MATLAB: MatlabOriginal,
    MongoDB: MongodbOriginal,
    RaspberryPi: RaspberrypiOriginal,
    SQLite: SqliteOriginal,
    TypeScript: TypescriptOriginal,
    ThreeJS: ThreejsOriginalWordmark,
    AWS: AmazonwebservicesOriginalWordmark,
    Docker: DockerOriginal,
    Kotlin: KotlinOriginal,
    Swift: SwiftOriginal,
    Scala: ScalaOriginal,
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
