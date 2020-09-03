'use strict';

(function () {

  let Url = {
    SAVE: 'https://echo.htmlacademy.ru/courses'
  };

  let StatusCode = {
    OK: 200
  };

  let handleRequest = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        let loadResponse = onLoad(xhr.response);
        return loadResponse;
      }

      let errorResponse = onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      return errorResponse;
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
  };

  let saveData = function (onLoad, onError, data) {
    let xhr = new XMLHttpRequest();
    handleRequest(xhr, onLoad, onError);
    xhr.open('POST', Url.SAVE);
    xhr.send(data);

    return xhr.response;
  };

  window.backend = {
    saveData: saveData
  };
})();
