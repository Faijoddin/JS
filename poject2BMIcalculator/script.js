const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }

    //result.innerHTML = ` ${height}`;
    
    if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        //show the result

        result.innerHTML = `<span>${bmi}</span>`;

        if(bmi <= 18.06){
            result.innerHTML = `You are underweight your bmi is ${bmi}`
        }
        if(bmi >=18.06 && bmi <= 24.09){
            result.innerHTML = `You are in normal range your bmi is ${bmi}`
        }else{
            result.innerHTML = `You are overweight your bmi is ${bmi}`
        }
    }
    
});
