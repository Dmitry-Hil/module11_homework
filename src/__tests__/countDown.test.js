import { countDown } from "../countDown.js";

describe('test for countDown function', () => {
   it('should count down with numbers equal 0', () => {
        expect(countDown(0)).toBe('Введите целое число, не равное нулю'); 
    }),
    it('should count down with numbers not equal 0', () => {
        expect(countDown(4)).toBe('4321'); 
    }),
    it ('should count down with not integer number', () => {
        expect(countDown(0.4)).toBe('Введите целое число, не равное нулю');
    })
})