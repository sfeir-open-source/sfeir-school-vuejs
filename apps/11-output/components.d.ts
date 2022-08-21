declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NPageHeader: typeof import('naive-ui')['NPageHeader'];
    NCard: typeof import('naive-ui')['NCard'];
    NButton: typeof import('naive-ui')['NButton'];
    NIcon: typeof import('naive-ui')['NIcon'];
    NIconWrapper: typeof import('naive-ui')['NIconWrapper'];
  }
}

export {};
