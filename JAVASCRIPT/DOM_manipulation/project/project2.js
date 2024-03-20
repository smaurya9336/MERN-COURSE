 const form=document.querySelector('form');

 form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);

    const weight=parseInt(document.querySelector('#weight').value);

    const results=document.querySelector('#results');
    const weightGuide=document.querySelector('#weight-guide');

    if(height === "" || height < 0 || isNaN(height)){
    
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        if(weight<18.6){
            const bmi= (weight / ((height*height)/10000).toFixed(2));
          //show the results
           results.innerHTML=`<span>${bmi}</span>`
            weightGuide.innerHTML=`Under Weight = less than 18.6`
           }
           else if(weight< 18.6 && weight == 24.9){
            const bmi= (weight / ((height*height)/10000).toFixed(2));
          //show the results
          results.innerHTML=`<span>${bmi}</span>`
            weightGuide.innerHTML=`Normal Range = 18.6 and 24.9`
        
           }
           else{
            const bmi= (weight / ((height*height)/10000).toFixed(2));
          //show the results
            results.innerHTML=`<span>${bmi}</span>`
            weightGuide.innerHTML=`Overweight = Greater than 24.9`
           }
        
        // const bmi= (weight / ((height*height)/10000).toFixed(2));
        //   //show the results
        //   results.innerHTML=`<span>${bmi}</span>`
    }

   
 });


 