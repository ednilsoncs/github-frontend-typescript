/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_REQUEST, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_REQUEST);
