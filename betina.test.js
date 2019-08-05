const betina = require('./betina')
describe('Betina Function Jests',() => {
  
    it('It should return a quantity of array elements  ',() => {
        var sockArrayRight = ['10','20','10','20','10','30','20']
        var result = 7
        expect(betina.getQtdElements(sockArrayRight)).toBe(result)
    }),
    it('It should return a distinct colors off aray ',() => {
        var sockArrayRight = ['10','20','10','20','10','30','20']
        var result = ['10','20','30']
        expect(betina.getDistinctValues(sockArrayRight)).toStrictEqual(result)
    }),
    it('It should return a object with par and odd values of distinct colors of socks ',() => {
        var sockArrayRight = ['10','20','10','20','10','30','20']
        var result  = [
                        { color: '10', par: 1, odd: 1 },
                        { color: '20', par: 1, odd: 1 },
                        { color: '30', par: 0, odd: 1 }
                      ]
        
        expect(betina.getParSock(sockArrayRight)).toStrictEqual(result)
    }),
    
    it('It should return a message to user informing what quantity of par and odd socks ',() => {
        var sockArrayRight = ['10','20','10','20','10','30','20']
        var result  = "You have 1 par of color 10, 1 par of color 20, 0 par of color 30, 2 par of socks and 3 socks are alone"
        
        expect(betina.sendMessage(sockArrayRight)).toStrictEqual(result)
    })
})