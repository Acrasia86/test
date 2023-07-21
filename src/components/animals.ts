import { AnimalProps } from "./Animal";

export const tigerList: string[] = [
    'Assia', "Russia"
  ] 
  export const elephantList: string[] = [
    'Assia', "Africa"
  ] 

  export const math = (numberOne: number, numberTwo: number) => {
    return numberOne + numberTwo;
  }

  export const animalTest = (setAnimal: (animal: any) => void, data: AnimalProps[]) => {
      return setAnimal(data);
  }
  