import { writable } from 'svelte/store';

import CasesData from '@data/cases/list.json';
import PersonalData from '@data/personal.json';

export const Cases = writable(CasesData.data);
export const Personal = writable(PersonalData.data);
