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
  ExpressOriginal,
  FlaskOriginal,
  NumpyOriginal,
  FirebasePlain,
  MatlabOriginal,
  MongodbOriginal,
  MysqlOriginal,
  TypescriptOriginal,
  ThreejsOriginalWordmark,
  AmazonwebservicesOriginal,
  DockerOriginal,
  KotlinOriginal,
  SwiftOriginal,
} from "devicons-react";

("use-client");

function Icon(props: { iconName: string }) {
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
    Express: ExpressOriginal,
    Flask: FlaskOriginal,
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
  var iconType = props.iconName;
  var SomeIcon =
    iconType in icons ? icons[iconType as keyof typeof icons] : PythonOriginal;
  return (
    <div className="app">
      <SomeIcon size={40} />
    </div>
  );
}

export default Icon;
