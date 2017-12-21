
 function sendMail() {
        var name,email, phone;
            name = $("#name").val();
            email = $("#email").val();
            phone = $("#phone").val();
        //validation email and phone
            var emailCheck =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
            var phoneCheck=/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            if(emailCheck.test(email) && (phoneCheck.test(phone))){
            $("#message").text("Пожалуйста, подождите ...");
            $.get("/send", {
                name: name,
                email: email,
                phone: phone
            }, function (data) {
                if (data == "send") {
                    $("#message").empty().html("Спасибо, мы приняли заявку!");
                }
            });}
            else if((name=='' && email=='' && phone=='')||(email=='' && phone=='')||(name=='' && phone=='')){
                $("#message").empty().html("Пожалуйста, заполните пустые поля");
            }
            else{
                $("#message").empty().html("Что-то пошло не так. Проверьте номер телефона или почту");
        }
    }

//-------scroll----
    var updownElem = document.getElementById('updown');
    var pageYLabel = 0;
     window.onscroll = function () {
        var pageY = window.pageYOffset || document.documentElement.scrollTop;
        var innerHeight = document.documentElement.clientHeight;
        updownElem.addEventListener('click', function () {
            var pageY = window.pageYOffset || document.documentElement.scrollTop;

            switch (this.className) {
                case 'up':
                    pageYLabel = pageY;
                    window.scrollTo(0, 0);
                    this.className = 'down';
                    break;

                case 'down':
                    window.scrollTo(0, pageYLabel);
                    this.className = 'up';
            }

        switch (updownElem.className) {
            case '':
                if (pageY > innerHeight) {
                    updownElem.className = 'up';
                }
                break;

            case 'up':
                if (pageY < innerHeight) {
                    updownElem.className = '';
                }
                break;

            case 'down':
                if (pageY > innerHeight) {
                    updownElem.className = 'up';
                }
                break;
        }
    });



};