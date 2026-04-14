function ola() {
    for (var i = 0; i < 10; i++) {
        var cont = i;
    }
    console.log(cont);
}
ola();

// let: Escopo de Bloco: A variável só existe dentro das chaves { } onde foi criada (seja num if, while ou for).

// var: Se você declarar uma var dentro de uma função, ela pertence à função. Se declarar fora, ela é global. Ela ignora blocos como if ou for.

// const: Funciona exatamente como o let, mas com uma regra extra: o valor não pode ser reatribuído.