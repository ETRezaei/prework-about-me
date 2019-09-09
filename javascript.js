
    document.getElementById("button1").addEventListener("click", function(){
        document.getElementById("box").style.height = "300px";
        document.getElementById("box").style.width = "300px";
        document.getElementById("box").style.backgroundColor="orange";
        document.getElementById("box").style.opacity="1";
        document.getElementById("myAnimation").style.opacity="0.02"; })

    document.getElementById("button2").addEventListener("click", function(){
        document.getElementById("box").style.backgroundColor="blue";
        document.getElementById("box").style.opacity="1";
        document.getElementById("myAnimation").style.opacity="0.02"; })

    document.getElementById("button3").addEventListener("click", function(){
        document.getElementById("box").style.opacity="0.03";
        document.getElementById("myAnimation").style.opacity="0.02"; })

    document.getElementById("button4").addEventListener("click", function(){
        document.getElementById("box").style.height = "150px";
        document.getElementById("box").style.width = "150px";
        document.getElementById("box").style.backgroundColor="orange";
        document.getElementById("box").style.opacity="1"; 
        document.getElementById("myAnimation").style.opacity="0.02";})
    
    document.getElementById("button5").addEventListener("click", function(){
        document.getElementById("box").style.height = "50px";
        document.getElementById("box").style.width = "50px";
        document.getElementById("box").style.backgroundColor="orange";
        document.getElementById("box").style.opacity="1";
        document.getElementById("myAnimation").style.opacity="0.02";})


    document.getElementById("button6").addEventListener("click", function(){
        document.getElementById("box").style.height = "600px";
        document.getElementById("box").style.width = "650px";
        document.getElementById("box").style.opacity = "1";
        document.getElementById("myAnimation").style.opacity="1";})

        function myMove(){
            var elem = document.getElementById("myAnimation");   
            var pos = 0;
            var id = setInterval(frame, 10);
            function frame() {
                if (pos == 600) {
                clearInterval(id);
                } else {
                pos++; 
                elem.style.top = pos + 'px'; 
                elem.style.left = pos + 'px'; 
                }
            }
        }