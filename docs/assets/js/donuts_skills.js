function data_fnc(x, y, z) {
  var data = {
    [y]: {
      val: Math.round(x * 100),
      color: z
     // link: 'http://www.google.com'
    }
  };
  return data;
}

$(window).on('scroll load', function() {
  
  var sectionOffset = $('#skills').offset().top;
  var scrollPosition = $(window).scrollTop() + $(window).height();
  
  
  if (scrollPosition > sectionOffset) {
    // Execute your function here
  // Python
  doughnutWidget.options = {
    container: $('#python_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70,
  };
  var dataset = data_fnc(0.9, "Python", '#A31F34');
  doughnutWidget.render(dataset);


  // PyTorch
  doughnutWidget.options = {
    container: $('#pytorch_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.9, "PyTorch", '#A31F34');
  doughnutWidget.render(dataset);
  
  
  // TF
  doughnutWidget.options = {
    container: $('#tensorflow_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.85, "Tensorflow", '#A31F34');
  doughnutWidget.render(dataset);

  // C++
  doughnutWidget.options = {
    container: $('#cpp_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.8, "Cpp", '#A31F34');
  doughnutWidget.render(dataset);
  
  // Matlab
  doughnutWidget.options = {
    container: $('#matlab_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.80, "MATLAB", '#A31F34');
  doughnutWidget.render(dataset);

  
  
  
  // HTML
  doughnutWidget.options = {
    container: $('#html_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.7, "HTML", '#44484C');
  doughnutWidget.render(dataset);
  
  // CSS
  doughnutWidget.options = {
    container: $('#css_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.7, "CSS", '#44484C');
  doughnutWidget.render(dataset);
  
  // SQL
  doughnutWidget.options = {
    container: $('#git_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.8, "GIT", '#44484C');
  doughnutWidget.render(dataset);
  
  // Latex
  doughnutWidget.options = {
    container: $('#latex_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.9, "Latex", '#44484C');
  doughnutWidget.render(dataset);
  
  // Inkscape
  doughnutWidget.options = {
    container: $('#inkscape_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.85, "Inkscape", '#44484C');
  doughnutWidget.render(dataset);


  // Spanish
  doughnutWidget.options = {
    container: $('#spanish_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(1.0, "Spanish", '#69b7fc ');
  doughnutWidget.render(dataset);

  // English
  doughnutWidget.options = {
    container: $('#english_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.95, "English", '#69b7fc ');
  doughnutWidget.render(dataset);

  // German
  doughnutWidget.options = {
    container: $('#german_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.90, "German", '#69b7fc ');
  doughnutWidget.render(dataset);

  // Italian
  doughnutWidget.options = {
    container: $('#italian_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.7, "Italian", '#69b7fc ');
  doughnutWidget.render(dataset);

  // Turkish
  doughnutWidget.options = {
    container: $('#turkish_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.1, "Turkish", '#69b7fc ');
  doughnutWidget.render(dataset);

  // Russian
  doughnutWidget.options = {
    container: $('#russian_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.2, "Russian", '#69b7fc ');
  doughnutWidget.render(dataset);

  // Russian
  doughnutWidget.options = {
    container: $('#swiss_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  var dataset = data_fnc(0.4, "Swiss", '#69b7fc ');
  doughnutWidget.render(dataset);


  }

});

/*

  // ML
  var data6 = data(0.8, "Machine Learning");
  doughnutWidget.options = {
    container: $('#ml_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data6);
  
  // Data Science
  var data7 = data(0.8, "Data Science/Stats");
  doughnutWidget.options = {
    container: $('#ds_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data7);
  
  // AI
  var data8 = data(0.8, "AI/RL/NN");
  doughnutWidget.options = {
    container: $('#ai_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data8);
  
  // Shiny
  var data9 = data(0.95, "R-Shiny");
  doughnutWidget.options = {
    container: $('#shiny_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data9);
  
  // Data Viz
  var data10 = data(0.75, "DataViz");
  doughnutWidget.options = {
    container: $('#dataviz_donut'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 70
  };
  doughnutWidget.render(data10);


*/