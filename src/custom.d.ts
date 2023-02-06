declare module "*.svg" {
  const content: any;
  export default content;
}

declare module '*.webp' {
  const ref: string;
  export default ref;
}
declare module "*.png" {
  const value: any;
  export default value;
}