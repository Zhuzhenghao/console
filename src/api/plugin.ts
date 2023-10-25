/* eslint-disable no-use-before-define */
import httpClient from '@/plugins/request';
import type { ObjectMeta } from 'kubernetes-types/meta/v1';

export interface DataPluginList {
  apiVersion: string
  items: Item[]
  kind: string
  metadata: ObjectMeta
}

export interface Item {
  apiVersion: string
  kind: string
  metadata: ObjectMeta
  spec: Spec
}

export interface Spec {
  datasetClass: string
  parameters: string
  provider: string
  version: string
}

// eslint-disable-next-line max-len
const listPlugins = (namespace:string) => httpClient.get<DataPluginList[]>(`/apis/extension.datatunerx.io/v1beta1/namespaces/${namespace}/dataplugins`);

export {
  listPlugins,
};
