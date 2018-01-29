
  $('#form').on('submit', function(e) {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    var userdate = birthdate.getFullYear();
    var todaydate = today.getFullYear();
    var age = todaydate - userdate;
    var Confirmation = document.getElementById("confirmation");
    var old = "Form was submitted successfully";
    var young = "Sorry, you are too young for this form to be accepted";
    e.preventDefault();
    console.log ('this form was submitted');
    if(age < 18) {
      confirmation.textContent = young;
        document.getElementById("confirmation").style.color = 'red';
    }
    if (age >= 18) {
      confirmation.textContent = old;
        document.getElementById("confirmation").style.color = 'green';
    }
  });
