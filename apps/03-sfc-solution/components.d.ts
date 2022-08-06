declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NPageHeader: typeof import('naive-ui')['NPageHeader'];
  }
}

export {};
