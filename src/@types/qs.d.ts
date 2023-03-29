/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'qs' {
  interface qs {
    stringify(data: any): string;
  }
  const obj: qs;
  export default obj;
}
