import { writable } from 'svelte/store';

interface Request {
  request_id: string;
  emails: string[];
  status: string;
  point_person: string;
}

export const chosenRequest = writable<Request | null>(null);