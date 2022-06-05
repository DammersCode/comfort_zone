export interface DynamicComponent<K> {
  config?: K;
}

export type DynamicComponentLoaderConfig = DynamicComponent<any> & {
  component: any;
};
