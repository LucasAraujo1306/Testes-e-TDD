import { Math } from './Math'

describe('Testing Math libary', () => {
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

    it.only('contar quantos caracteres tem na string', () => {
        const response = 'teste'
        expect(response).toHaveLength(5);
    })
})

