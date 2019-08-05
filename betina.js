/**
    Author: Gabriel Carmo.
    Date:   2019-08-04.
    Target: ES6 and Jest to  Learn a unitary Tests.
    Thanks for: Betina who got her first million and is now organizing socks.

 */

const betina ={
    
   ///GET QTY ARRAY ELEMENTS
   getQtdElements(sockArray){
       return sockArray.length
       },

   ///RETURN THE DISTINC VALUES
   getDistinctValues(sockArray){
       return Array.from(new Set(sockArray))
    },

    

    ///CHECK PAR OF SOCKS
    getParSock(sockArray){
       
        ///DISTINCT VALUE OF ARRAY
        const colorSocks =  this.getDistinctValues(sockArray)
        //QUANTITY OF DISTINCT COLOR OF SOCKS
        let numDistinctSocks = this.getQtdElements(colorSocks)
        ///ararry to return
        let returnObject = []   
        ///Rounds
        let round = 0
        ///number of socks
        let nrSocks = 0
        //Position of array
        let position = 0
        
        ///WHILE TO ALL DISTINCT SOCKS
        while (numDistinctSocks > round){

           ///Clean number of socks
            nrSocks = 0        
            sockArray.forEach(function (sockArray, index) {
                //IF HAVE DUPLICATE VALUE SUM
               if (colorSocks[round] === sockArray) nrSocks++ 
            })
            ///PUSH THE VALUE TO ARRAY   
            returnObject.push({color:colorSocks[round],par:parseInt(nrSocks/2),odd:nrSocks%2 })
            
            round ++
        }
    ///RETURN OBJECT WITH COLOR CODE, PAR NUMBER, ODD NUMBER 
    
    return  returnObject
    },
      
    //SHOW TO USER HOW IS THE QUANTITY OF PARS AND OOD      
     sendMessage(sockArray){
        //GET THE OBJECT WITH RESULTS
        let result =  this.getParSock(sockArray)
        ///DISTINCT VALUE OF ARRAY
        const colorSocks =  this.getDistinctValues(sockArray)
        //QUANTITY OF DISTINCT COLOR OF SOCKS
        let numDistinctSocks = this.getQtdElements(colorSocks)

        ///CREATE A MESSAGE TO USER
        let finalMessage = "You have"
        ///ROUND TO WHILE
        let round = 0 
        //QUANTITY OF PAR
        let nrpar = 0;
        //QUANTITY OF ODD
        let nrodd = 0 
        while (numDistinctSocks > round){
            ///IF HAVE PAR SUM
            if(result[round]['par'] > 0) {nrpar++}
            ///IF HAVE ODD SUM
            if(result[round]['odd'] > 0) {nrodd++}
            ////ADD TO MESSAGE A VALUE
            finalMessage = finalMessage +" "+result[round]['par']+" par of color "+result[round]['color']+","
            ///ADD MORE ONE IN ROUND
            round++
        }
        ///ADD VALUE INTO  FINAL MESSAGE 
        finalMessage = finalMessage +" "+nrpar+" par of socks and "+nrodd+" socks are alone"
       
        //RETURN A STRING HERE    
        return finalMessage  
    } 

    
}
module.exports = betina;