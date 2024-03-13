// Definindo a classe abstrata
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log("Som genérico de animal");
    }
}

// Criando classes herdeiras
class Cachorro extends Animal {
    emitirSom() {
        console.log("Latindo...");
    }

    cavar() {
        console.log("Cavando buracos...");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("Miando...");
    }

    arranhar() {
        console.log("Arranhando móveis...");
    }
}

// Criando instâncias de objetos
const animalGenerico = new Animal("Animal Genérico");
const meuCachorro = new Cachorro("Rex");
const meuGato = new Gato("Miau");

// Testando os métodos
animalGenerico.emitirSom(); // Saída: Som genérico de animal
meuCachorro.emitirSom();    // Saída: Latindo...
meuGato.emitirSom();        // Saída: Miando...

// Adicionando a capacidade de unir dois objetos
function unirObjetos(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// Unindo objetos
const novoObjeto = unirObjetos(meuCachorro, meuGato);
console.log(novoObjeto);



