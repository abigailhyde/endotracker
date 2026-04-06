export type Symptom = {
    display : string,
    code : number
}

export type SymptomGroup = {
    id: number,
    name: string,
    iconSrc: string,
    symptoms: Array<Symptom>
}