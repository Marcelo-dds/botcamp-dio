const nickDoHeroi = 'Nero';


let xpDoHeroi = 1000;

let classificacaoDoHeroi = '';

while (xpDoHeroi <= 12000) {
    xpDoHeroi += 3000;
};


if (xpDoHeroi <= 1000) {

    classificacaoDoHeroi = 'Ferro';
};
if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    classificacaoDoHeroi = 'Bronze';

};

if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    classificacaoDoHeroi = 'Prata';

};

if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    classificacaoDoHeroi = 'Ouro';

};

if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    classificacaoDoHeroi = 'Platina';


};
if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    classificacaoDoHeroi = 'Ascedente';

};

if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    classificacaoDoHeroi = 'Imortal';

};

if (xpDoHeroi >= 10001) {
    classificacaoDoHeroi = 'Radiante';

};




console.log(`O Herói de nome ${nickDoHeroi} está no nível de ${classificacaoDoHeroi}`);