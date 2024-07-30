export interface Character {
  id: string;
  name: string;
  images: string[];
  debut: {
    [key: string]: any;
  };
  personal: {
    [key: string]: any;
  };
  jutsu: string[];
  natureType: string[];
  uniqueTraits: string[];
}