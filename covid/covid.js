
console.log("hell0");
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://api.covid19india.org/data.json`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        
        let statewise = json.statewise;
        console.log(statewise);

        let data = "";
        let talebody = document.getElementById('tabletitle');
        let taleb = document.getElementById('tablenew');
        statewise.forEach(function(element,i){
           if(i==0)
           {
            let p  = `<tr>
          <td>${statewise[i].lastupdatedtime}</td>
           
            <td>${statewise[i].active}</td>
            <td>${statewise[i].confirmed}</td>
            <td>${statewise[i].deaths}</td>
            <td>${statewise[i].recovered}</td>
            </tr>`
          
          
           taleb.innerHTML+=p;
       
            return;
           }
         
            let d  = `<tr>
            <td>${statewise[i].lastupdatedtime}</td>
             <td>${statewise[i].state}</td>
            <td>${statewise[i].active}</td>
            <td>${statewise[i].confirmed}</td>
            <td>${statewise[i].deaths}</td>
            <td>${statewise[i].recovered}</td>
            </tr>`
          
           data +=d;
       
            
            
        });
        talebody.innerHTML+=data;
       
    }


   
        else {
            console.log("Some error occured")
        }
    }

    xhr.send();