class Libro2 {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarDescripcion() {
        return `Libro titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

class LibroDeTexto extends Libro2 {
    mostrarDescripcion() {
        return `Libro de texto ${super.mostrarDescripcion()}`;
    }
}

class Novela extends Libro2 {
    genero: string;

    constructor(titulo: string, autor: string, contenido: string, genero: string) {
        super(titulo, autor, contenido);
        this.genero = genero;
    }

    mostrarDescripcion() {
        return `Novela ${super.mostrarDescripcion()} del género ${this.genero}`;
    }
}

const libroTexto = new LibroDeTexto('Principio de la Materia', 'Stephen Howking', 'Contenido...');
const novela = new Novela('La Odisea', 'Homero', 'Erase una vez..', 'HIstoria');

console.log(libroTexto.mostrarDescripcion());
console.log(novela.mostrarDescripcion());
