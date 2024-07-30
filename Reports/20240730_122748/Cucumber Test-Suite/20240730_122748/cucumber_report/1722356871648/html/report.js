$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/richard/Example-BDD-with-Katalon-Studio/Include/features/Appointment/Appointment.feature");
formatter.feature({
  "name": "Appointment",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Realizar una cita medica de un cliente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ID_01"
    }
  ]
});
formatter.step({
  "name": "que nuesto cliente ingresa correctamente a nuestra plataforma \u003cuser\u003e \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "el asegurado completa los datos para realizar una reserva \u003ccomment\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "se visualiza un mensaje de confirmacion \u0027Appointment Confirmation\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "comment"
      ]
    },
    {
      "cells": [
        "John Doe",
        "ThisIsNotAPassword",
        "Quiero realizar un cita medica"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Realizar una cita medica de un cliente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ID_01"
    }
  ]
});
formatter.step({
  "name": "que nuesto cliente ingresa correctamente a nuestra plataforma John Doe ThisIsNotAPassword",
  "keyword": "Given "
});
formatter.match({
  "location": "AppointmentStep.RealizarLoginEnLaPlataforma(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el asegurado completa los datos para realizar una reserva Quiero realizar un cita medica",
  "keyword": "When "
});
formatter.match({
  "location": "AppointmentStep.HacerReservaDeCita(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza un mensaje de confirmacion \u0027Appointment Confirmation\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentStep.VisualizacionDeCitaConfirmada(String)"
});
formatter.result({
  "status": "passed"
});
});