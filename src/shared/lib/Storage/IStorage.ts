/* eslint-disable prettier/prettier */
interface IStorage {
    save(file: string, folder: string): Promise<string>;
    delete(file: string, folder: string): Promise<void>;
  }
  
  export { IStorage };