import { SAVE_SECTION } from './types';

export function saveSection(section) {
  return {
    type: SAVE_SECTION,
    payload: section
  }
}
