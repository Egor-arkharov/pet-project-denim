'use strict';

(function () {

  var Url = {
    SAVE: 'https://echo.htmlacademy.ru/courses'
  };

  var StatusCode = {
    OK: 200
  };

  var handleRequest = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        var loadResponse = onLoad(xhr.response);
        return loadResponse;
      }

      var errorResponse = onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      return errorResponse;
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
  };

  var saveData = function (onLoad, onError, data) {
    var xhr = new XMLHttpRequest();
    handleRequest(xhr, onLoad, onError);
    xhr.open('POST', Url.SAVE);
    xhr.send(data);

    return xhr.response;
  };

  window.backend = {
    saveData: saveData
  };
})();
