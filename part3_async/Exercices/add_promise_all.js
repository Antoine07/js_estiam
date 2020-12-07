const add = number => ( new Promise((resolve, reject) => {
    setTimeout(() => {
      if ( parseFloat(number) != number  ) {
          reject( new Error( 'not a number ...' ) );
  
          return;
      }
      resolve(parseFloat(number));
    }
    , 100);
  }) ) ;
  
  Promise.all([add(1), add(2), add(3)]).then( numbers => { 
      console.log( numbers.reduce((acc, curr) => acc + curr) );
  }).catch( err => console.error(err));