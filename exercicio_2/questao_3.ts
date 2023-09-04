class Hotel {
    quantReservas : number;
    constructor(quantReservas : number = 0 ){
    this.quantReservas = quantReservas
}

    
    adicionarReserva() : void {
    this.quantReservas++;
    }
    }
    const hotel = new Hotel(10)
    hotel.adicionarReserva()
    console.log(hotel.quantReservas)