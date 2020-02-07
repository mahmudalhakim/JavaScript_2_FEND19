$(document).ready(function() {

  $.getJSON('getJson-demo.json', function (data, status, xhr){
    console.log(data);
    console.log(status);
    console.log(xhr);
    
    data.forEach(element => {
      console.log(element);
      console.log(element.name);
      console.log(element.email);
    });

    let output = '<table class="table table-striped table-hover">';
    output += '<thead class="thead-dark"><tr><th>Name</th><th>Email</th></tr></thead>';
    data.forEach(element => {
      output += `
                <tr>
                  <td>${element.name}</td>
                  <td>${element.email}</td>
                </tr>`;
    });
    output += '<table>';

    document.getElementById('table').innerHTML = output;

  });
});