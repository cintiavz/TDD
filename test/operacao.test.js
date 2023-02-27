const { describe, expect, it} = require('@jest/globals')
const calculadora = require('../src/operacoes')

describe('teste da calculadora', () => {
    it('operacao de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3);

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow('Não é numero');

        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1);

        resultado = calculadora.sum(0, 2);
        expect(resultado).toEqual(2);

        resultado = calculadora.sum(-6, 5);
        expect(resultado).toEqual(-1);

        resultado = calculadora.sum(8, 2);
        expect(resultado).toEqual(10);

    })

    
    it('Operacao sub', () => {
        let resultado = calculadora.sub(5, 2);
        expect (resultado).toEqual(3);

        resultado = () => calculadora.sub("a", 7);
        expect(resultado).toThrow('Não é numero');

        resultado = calculadora.sub(10, 10);
        expect (resultado).toEqual(0);

        resultado = calculadora.sub(21, 5);
        expect(resultado).toEqual(16);

        resultado = calculadora.sub(-15, 60);
        expect (resultado).toEqual(-75);

        resultado = calculadora.sub(50, 30);
        expect (resultado).toEqual(20);


})

    it('Operacao multi', () => {
        let resultado = calculadora.multi(5, 2);
        expect (resultado).toEqual(10);

        resultado = () => calculadora.multi("a", 5);
        expect(resultado).toThrow('Não é numero');

        resultado = calculadora.multi(6, 3);
        expect (resultado).toEqual(18);

        resultado =  calculadora.multi(21, 5);
        expect(resultado).toEqual(105);

        resultado = calculadora.multi(5, 15);
        expect(resultado).toEqual(75);

        resultado = calculadora.multi(1, 60);
        expect (resultado).toEqual(60);

        resultado = calculadora.multi(30, 7);
        expect (resultado).toEqual(210);

        resultado = calculadora.multi(5, 5);
        expect (resultado).toEqual(25);



});

    it('Operacao divi', () => {
        let resultado = calculadora.divi(7, 7);
        expect (resultado).toEqual(1);

        resultado = () => calculadora.divi("a", 3);
        expect(resultado).toThrow('Não é numero');

        resultado = calculadora.divi(20, 5);
        expect (resultado).toEqual(4);

        resultado = calculadora.divi(33, 3);
        expect (resultado).toEqual(11);

        resultado = calculadora.divi(5, 5);
        expect (resultado).toEqual(1);

        resultado = calculadora.divi(90, 9);
        expect (resultado).toEqual(10);

        resultado = calculadora.divi(80, 5);
        expect (resultado).toEqual(16);

        resultado = calculadora.divi(120, 8);
        expect (resultado).toEqual(15);

        resultado = calculadora.divi(18, 3);
        expect (resultado).toEqual(6);

       
})

    it('Operacao poten', () => {
        let resultado = calculadora.poten(3, 2);
        expect (resultado).toEqual(9)

        resultado = () => calculadora.divi("a", 2);
        expect(resultado).toThrow('Não é numero');

        resultado = calculadora.poten(10, 2);
        expect (resultado).toEqual(100);

        resultado = calculadora.poten(14, 2);
        expect (resultado).toEqual(196);

        resultado = calculadora.poten(2, 2);
        expect (resultado).toEqual(4);

        resultado = calculadora.poten(12, 2);
        expect (resultado).toEqual(144);

        resultado = calculadora.poten(20, 2);
        expect (resultado).toEqual(400);

        resultado = calculadora.poten(8, 2);
        expect (resultado).toEqual(64);

        resultado = calculadora.poten(5, 2);
        expect (resultado).toEqual(25);
    });

    it('Operacao raiz', () => {
        let resultado = calculadora.raiz(9);
        expect (resultado).toEqual(3);

        resultado = () => calculadora.raiz("a");
        expect(resultado).toThrow('Não é numero');

        resultado = calculadora.raiz(100);
        expect (resultado).toEqual(10);

        resultado = calculadora.raiz(225);
        expect (resultado).toEqual(15);

        resultado = calculadora.raiz(324);
        expect (resultado).toEqual(18);

        resultado = calculadora.raiz(144);
        expect (resultado).toEqual(12);

        resultado = calculadora.raiz(36);
        expect (resultado).toEqual(6);

        resultado = calculadora.raiz(16);
        expect (resultado).toEqual(4);

        resultado = calculadora.raiz(81);
        expect (resultado).toEqual(9);

});
})


