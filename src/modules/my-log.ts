
//Exportaciones parciales 2

const info=(text: string): string => {
    console.log("INFO",text);
    return text;
}

const error=(text:string):string =>{
    console.log("Error",text);
    return text;
}

interface SumData{
    num1: number;
    num2: number;
}

interface User{
    name:string,
    age: number;
    sum: SumData | null;
    bankAccount?: string;
}

const suma=(data: SumData): number => data.num1+data.num2;
const setUser = (data:User): void=>{
    console.log(data);
};

export {info, error, setUser, suma};