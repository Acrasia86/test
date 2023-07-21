import { AnimalProps } from "./Animal";

export const tigerList = [
    {
      country: 'Asien'
    },
    {
      country: 'Ryssland'
    }
  ] 
 export const elephantList = [
    {
      country: 'Asien'
    },
    {
      country: 'Afrika'
    }
  ] 

  export const math = (numberOne: number, numberTwo: number) => {
    return numberOne + numberTwo;
  }

  export const animalTest = (setAnimal: (animal: any) => void, data: AnimalProps[]) => {
      return setAnimal(data);
  }

  function setAnimal (animal: any) {

  }
  