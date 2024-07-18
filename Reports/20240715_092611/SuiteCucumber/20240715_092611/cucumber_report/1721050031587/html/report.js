$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/richard/Katalon Studio/BDD Example/Include/features/Appointment/Appointment.feature");
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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Appointment/Appointment Confirmation\u0027 is present\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1503)\n\tat appointment.AppointmentStep.VisualizacionDeCitaConfirmada(AppointmentStep.groovy:49)\n\tat ✽.se visualiza un mensaje de confirmacion \u0027Appointment Confirmation\u0027(/Users/richard/Katalon Studio/BDD Example/Include/features/Appointment/Appointment.feature:7)\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Appointment/Appointment Confirmation\u0027 located by \u0027\u0027 not found\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1503)\n\tat appointment.AppointmentStep.VisualizacionDeCitaConfirmada(AppointmentStep.groovy:49)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:72)\n\tat cucumber.runner.TestStep.run(TestStep.java:54)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\n\tat cucumber.api.cli.Main.run(Main.java:35)\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:110)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:77)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:256)\n\tat CucumberTest.run(CucumberTest:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:150)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:180)\n\tat TempTestSuite1721049971017.run(TempTestSuite1721049971017.groovy:35)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n",
  "status": "failed"
});
});