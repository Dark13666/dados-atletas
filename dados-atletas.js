class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) return "Infantil";
        if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
        if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
        if (this.idade >= 16 && this.idade <= 30) return "Adulto";
        return "Sem categoria";
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasValidas = notasOrdenadas.slice(1, -1);
        return notasValidas.reduce((a, b) => a + b, 0) / notasValidas.length;
    }


    obtemNomeAtleta() { return this.nome; }

    obtemIdadeAtleta() { return this.idade; }

    obtemPesoAtleta() { return this.peso; }

    obtemNotasAtleta() { return this.notas; }

    obtemCategoria() { return this.calculaCategoria(); }

    obtemIMC() { return this.calculaIMC(); }

    obtemMediaValida() { return this.calculaMediaValida(); }
}



const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);


console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta() + " anos");
console.log("Peso:", atleta.obtemPesoAtleta() + " kg");
console.log("Altura:", atleta.altura.toFixed(2) + "m");
console.log("Notas:", atleta.obtemNotasAtleta().join(", "));
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC().toFixed(2));
console.log("Média válida:", atleta.obtemMediaValida());