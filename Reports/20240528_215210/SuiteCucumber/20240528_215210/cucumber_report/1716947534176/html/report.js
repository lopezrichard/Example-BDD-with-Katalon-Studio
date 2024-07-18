$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/richard/Katalon Studio/BDD Example/Include/features/LoginFeatures/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "el usuario navega en la pagina de Login",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.navegacionDelUsuario()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ingreso sastifactorio con credenciales validas",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginValido"
    },
    {
      "name": "@regresion"
    },
    {
      "name": "@smokeTest"
    },
    {
      "name": "@ID_01"
    }
  ]
});
formatter.step({
  "name": "el usuario introduce sus credenciales validas \u0027Admin\u0027 \u0027admin123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Login.usuarioIngresaLaWeb(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se puede visualizar el dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.visualizarHome()"
});
formatter.result({
  "status": "passed"
});
});