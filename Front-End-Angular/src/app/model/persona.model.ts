export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    ocupacion: String;
    institucion: String;
    urlinst: String;
    imginst: String;
    email: String;
    telefono: String;
    img: String;
    banner: String;
    about: String;
    ubicacion: String;



    constructor(nombre: String, apellido: String, ocupacion: String, institucion: String,
        urlinst: String, imginst: String, email: String, telefono: String, img: String,
        banner: String, about: String, ubicacion: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion = ocupacion;
        this.institucion = institucion;
        this.urlinst = urlinst;
        this.imginst =imginst;
        this.email = email;
        this.telefono = telefono;
        this.img = img;
        this.banner = banner;
        this.about = about;
        this.ubicacion = ubicacion;
    }
}
