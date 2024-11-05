$(document).ready(function () {
  $("header").load("../partials/header.html");
  $("footer").load("../partials/footer.html");
});


$(document).on('click', '[data-toggle="show"]', function (event) {
  event.preventDefault()
  var target = $(this).data('target')
  $(target).toggleClass('show')
})

$(document).ready(function() {
  $('#select-ciudad').selectize({
      placeholder: "Select a city",
      allowEmptyOption: true
  });
});


$('#select-ciudad').selectize({
  options: [
    { value: "leon", name: "León" },
    { value: "irapuato", name: "Irapuato" },
    { value: "guanajuato", name: "Guanajuato" },
    { value: "salamanca", name: "Salamanca" },
    { value: "silao", name: "Silao" },
    { value: "lagos", name: "Lagos" },
    { value: "san-pancho", name: "San Pancho" },
    { value: "purisima", name: "Purísima" }
  ],
  labelField: 'name',
  searchField: ['name'],
  sortField: 'name'
  });
          

//   document.querySelectorAll('.ul-link').forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();  

//         const targetSection = document.querySelector(this.getAttribute('href'));
//         const toggleElements = document.querySelectorAll(this.dataset.target);    

//         targetSection.scrollIntoView({ behavior: 'smooth' });

//         toggleElements.forEach(el => el.classList.remove('show'));
//     });
// });