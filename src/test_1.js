"use strict";




    const token  =  window.frameElement.attributes.value.value;



        let supervisor = new Supervisor({
            url: 'https://demo.proctoring.online'
        });
// инициализация сессии прокторинга
// в поле token можно указать строку, функцию или промис
        supervisor.init({
            // указать провайдер авторизации, по умолчанию 'jwt'
            provider: 'jwt',
            // получить строку с токеном JWT от вашего сервера
            // на стороне вашего сервера должен быть реализован API
            token: token
        }).then(function() {
            // запустить сессию прокторинга сразу после инициализации
            return supervisor.start();
        }).catch(function(err) {
            // в случае ошибки отобразить соответствующее сообщение
            alert(err.toString());
            // выполнить переадресацию на главную страницу,
            // чтобы не дать начать тест без прокторинга
            // location.href = '/';
            window.parent.backHome()
        });

const btn_complete = document.querySelector( '.btn-complete' );

btn_complete.addEventListener('click', (e)=>{
    e.preventDefault();
   supervisor.stop();
   supervisor.logout();
    window.parent.complete()
});