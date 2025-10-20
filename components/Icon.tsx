import React from "react";
import {
  // Languages
  PythonOriginal,
  JavascriptOriginal,
  CplusplusOriginal,
  COriginal,
  JavaOriginal,
  TypescriptOriginal,

  // Frameworks & Libraries
  ReactOriginal,
  TailwindcssOriginal,
  NextjsOriginal,
  NodejsOriginal,
  SpringOriginal,
  ElectronOriginal,
  AngularOriginal,

  // Dev Tools & Infrastructure
  GitOriginal,
  LinuxOriginal,
  DockerOriginal,
  KubernetesOriginal,
  JenkinsOriginal,
  PostmanOriginal,
  NpmOriginalWordmark,
  FigmaOriginal,

  // Cloud & Databases
  AmazonwebservicesOriginalWordmark,
  AzureOriginal,
  PostgresqlOriginal,
  SqliteOriginal,
  SupabaseOriginal,

  // ML/AI
  TensorflowOriginal,
  PytorchOriginal,

  // Other
  SplunkOriginalWordmark,
  ApachekafkaOriginal,
  PlaywrightOriginal,
} from "devicons-react";

interface IconProps {
  iconName: string;
  size?: number;
  imageSrc?: string;
}

function Icon({ iconName, size = 40, imageSrc }: IconProps) {
  // If imageSrc is provided, render as image thumbnail
  if (imageSrc) {
    return (
      <div className="app">
        <img
          src={imageSrc}
          alt={iconName}
          width={size}
          height={size}
          className="rounded"
        />
      </div>
    );
  }

  const icons = {
    // Languages
    Java: JavaOriginal,
    Python: PythonOriginal,
    TypeScript: TypescriptOriginal,
    JavaScript: JavascriptOriginal,
    "C++": CplusplusOriginal,
    C: COriginal,

    // Frameworks & Libraries
    React: ReactOriginal,
    TailwindCSS: TailwindcssOriginal,
    Spring: SpringOriginal,
    "Next.js": NextjsOriginal,
    "Node.js": NodejsOriginal,
    Electron: ElectronOriginal,
    Angular: AngularOriginal,
    TensorFlow: TensorflowOriginal,
    PyTorch: PytorchOriginal,

    // Dev Tools & Infrastructure
    Git: GitOriginal,
    Linux: LinuxOriginal,
    AWS: AmazonwebservicesOriginalWordmark,
    Azure: AzureOriginal,
    Docker: DockerOriginal,
    Kubernetes: KubernetesOriginal,
    Jenkins: JenkinsOriginal,
    npm: NpmOriginalWordmark,
    SQLite: SqliteOriginal,
    Postman: PostmanOriginal,
    Figma: FigmaOriginal,

    // Databases
    PostgreSQL: PostgresqlOriginal,
    Supabase: SupabaseOriginal,

    // Other
    Splunk: SplunkOriginalWordmark,
    Kafka: ApachekafkaOriginal,
    Playwright: PlaywrightOriginal,
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
