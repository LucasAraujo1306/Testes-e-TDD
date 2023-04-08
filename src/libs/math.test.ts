import { Math } from './Math'

describe('Testing Math libary', () => {

    beforeEach(() => {
        console.log('beforeEach')
        //antes de cada teste
    })

    afterEach(() => {
        console.log('afterEach')
        //depois de cada teste
    })

    beforeAll(() => {
        console.log('beforeAll')
        //antes de todos os testes
    })

    afterAll(() => {
        console.log('afterAll')
        //depois de todos os testes
    })


    it('should sum two numbers correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    })

    it('should subtract two number correctly', () => {
        const response = Math.sub(4, 2);
        expect(response).toBe(2);
    })

    it('should divide two number correctly', () => {
        const response = Math.div(10, 2);
        expect(response).toBe(5);

        const response2 = Math.div(10, 0);
        expect(response2).toBe(false);
    })

    it('should multiply two number correctly', () => {
        const response = Math.mut(5, 2);
        expect(response).toBe(10);

        const response2 = Math.mut(0, 2);
        expect(response2).toBe(0);
    })

    it('contar quantos caracteres tem na string', () => {
        const response = 'teste'
        expect(response).toHaveLength(5);
    })

    it('verifica se possui a propriedade Email', () => {
        const response = {
            name: 'teste',
            email: 'lucas@gmail.com'
        }
        expect(response).toHaveProperty('email');
    })

    it('verifica se um objeto não é undefined', () => {
        const response = {
            name: 'teste',
            email: 'lucas@gmail.com'
        }
        expect(response).not.toBeUndefined();
    })

    it('verifica se um numero é maior ou igual 18', () => {
        const response = 20;
        expect(response).toBeGreaterThanOrEqual(18);
        //expect(response).toBeLessThanOrEqual(18);
    })

    it('verifica se possui a propriedade Email', () => {
        const response = 'lucas@gmail.com'
        expect(response).toMatch(/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    })

    /*it.only('retorna um erro', () => {
        const response = Math.div(10, 0);
        expect(response).toThrow(new Error('Não é possível dividir por zero'));
    })*/



})

