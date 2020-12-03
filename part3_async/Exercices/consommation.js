const myPromise = (data, state) => {

    return (new Promise((successCallback, failureCallback) => {
        if (state)
            successCallback(data);
        else
            failureCallback('error');
    })
    );
}

const error = () => "Error";

// Consommation
myPromise([1, 2, 3], true)
    .then(resultat => console.log(resultat))
    .catch(error);