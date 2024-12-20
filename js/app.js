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
          
  $(document).on('click', '.menu-button', function (event) {
    
    $('.menu').toggleClass('show');
    $('.menu-button').toggleClass('show');
    $('.toggle-menu').toggleClass('show');
    $('body').toggleClass('overflow-hidden');
  });
  


$(document).on('click', '.ul-link', function (event) {
  const toggleElements = $($(this).data('target'));
  const targetSection = $($(this).attr('href'));

  $('html, body').animate({
    scrollTop: targetSection.offset().top
  }, 800); 
  
  toggleElements.each(function() {
      $(this).removeClass('show');
  });

  $('body').removeClass('overflow-hidden');

})

$(document).on('click', '.contacto-anchor', function (event) {
  const toggleElements = $($(this).data('target'));
  const targetSection = $($(this).attr('href'));

  $('html, body').animate({
    scrollTop: targetSection.offset().top
  }, 1000); 

  toggleElements.each(function() {
      $(this).removeClass('show');
  });

  $('body').removeClass('overflow-hidden');

})