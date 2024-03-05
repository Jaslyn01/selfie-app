var SpeechRecognition = window.webkitSpeechRecognition; //change speach to text//
  var recognition = new SpeechRecognition();
  
  function start(){

    document.getElementById("textbox").innerHTML="";
    recognition.start();

  }
  recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript; // content is a variable and it is holding what i say// 
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
      speak();
    }
    
  }

  Webcam.set({
    width:360, 
    height:250,
    image_format:'png',
    png_quality:90

  });
  camara=document.getElementById("camera");
  

  function speak(){
    var synth /*synth will hold the speach */ = window.speechSynthesis;//change text to speach//
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utterThis);
    Webcam.attach(camera);
    
    setTimeout(function(){
      takeSnapshot();
    
    },5000);

   
  }

  function takeSnapshot(){
    Webcam.snap(function(data_uri) /* data_uri stores my still picture*/{
      document.getElementById("ressult").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
  }
  
