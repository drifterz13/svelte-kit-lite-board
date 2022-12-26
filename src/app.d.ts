// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
interface SessionData {
  userId: string;
}

declare namespace App {
  // interface Error {}
  interface Locals {
    session: import('svelte-kit-cookie-session').Session<SessionData>;
  }
  interface PageData {
    session: SessionData;
  }
  // interface Platform {}
}
