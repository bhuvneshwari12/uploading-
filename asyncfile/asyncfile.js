console.log('person 1 : 1st tickets ');
console.log('person 2 : 2nd tickets ');

const premovie = async () => {


      //PROMISES

        const PromiseWifeBringingtickets = new Promise((resolve,reject)=> {
        setTimeout(()=> { resolve('3rd ticket') },3000)
        })
       const getpopcorn= new Promise((resolve,reject)=> resolve(" CHEESSY POPCORN"))
       const getbutter= new Promise((resolve,reject)=> resolve(" CHESSY BUTTER"))
       const getColdDrinks = new Promise((resolve,reject)=> resolve(" BLACK COLDDRINK"))


       //AWAIT

       let ticket = await PromiseWifeBringingtickets;
       console.log(ticket)

       let popcorn = await getpopcorn;
       console.log(popcorn)

       let butter =await getbutter;
       console.log(butter)
       let colddrink =await getColdDrinks;
       console.log(colddrink)

        return ticket
}

premovie().then((m)=> console.log(`PERSON 3 : ${m}`))



console.log('person 4 : 4th tickets ');
console.log('person 5 : 5th tickets ');
