import React from "react";
import {
  PythonOriginal,
  ThreejsOriginal,
  JavascriptOriginal,
  COriginal,
  ReactOriginal,
  Html5Original,
  Css3Original,
  JavaOriginal,
  //   TailwindcssOriginal,
  FigmaOriginal,
  LinuxOriginal,
  GitOriginal,
  NpmOriginalWordmark,
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

interface IconType {
  type: string;
}

("use-client");

function Icon(props: { iconName: string }) {
  const icons = {
    Python: PythonOriginal,
    JavaScript: JavascriptOriginal,
    // "C++": "TypeScript",
    C: COriginal,
    React: ReactOriginal,
    HTML: Html5Original,
    CSS: Css3Original,
    Java: JavaOriginal,
    // TailwindCSS: TailwindcssOriginal,
    Figma: FigmaOriginal,
    Linux: LinuxOriginal,
    Git: GitOriginal,
    npm: NpmOriginalWordmark,
    // "Node.js": "Nextjs",
    Nextjs: NextjsOriginal,
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
  var SomeIcon = iconType in icons ? icons[iconType] : PythonOriginal;
  return (
    <div className="app">
      <SomeIcon size={40} />
    </div>
  );
}

export default Icon;
