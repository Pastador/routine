export class Routine {

    constructor(
        public id: number,              // identifiant de la routine
        public name: string,            // nom de la routine
        public frequence: string,
        public jour: number,
        public ordre: number
    )
    {}
}