$(document).ready( function () {

  $.getJSON('getJSON-demo.json', function(data){
    
    // Skriv ut resultatet (response)
    console.log(data);

    // Skriv ut det första objektet
    console.log(data[0]);   

    // Skriv ut namnet från objektet
    console.log(data[0].name);
    
    // Skriv ut e-post från objektet
    console.log(data[0].email);

    // Visa alla namn
    data.forEach( element => {
      // console.log(element);
      console.log(element.name);
    });

    // Visa alla e-postadresser
    data.forEach( element => {
      console.log(element.email);
    });

    // Visa både namn och e-postadresser
    data.forEach( element => {
      console.log(element.name + ', ' + element.email);
    });

    // Skapa en sträng som innehåller all info
    // Strängen ska innehålla en tabell
    let table = '<table class="table table-striped table-hover">';
    table += `<thead class="thead-dark">
                <tr>
                  <th>Namn</th>
                  <th>E-post</th>
                </tr>
              </thead>
    `;

    data.forEach( person => {
      table += `<tr>
                  <td>${person.name}</td>
                  <td>${person.email}</td>
                </tr>
      `;
    })

    table += '</table>';

    console.log(table);

    $('#showTable').html(table);

    // Vanilla JS
    // document.getElementById('showTable').innerHTML = table;
    
  }).fail(function() {
    console.error( "Fel vid läsning av JSON!" );
  }); // getJSON 

});