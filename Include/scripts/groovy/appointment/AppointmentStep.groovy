package appointment

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import internal.GlobalVariable

public class AppointmentStep {

	@Given ("que nuesto cliente ingresa correctamente a nuestra plataforma (.*) (.*)")
	def RealizarLoginEnLaPlataforma(String user, String password) {
		WebUI.openBrowser('https://katalon-demo-cura.herokuapp.com/')
		WebUI.click(findTestObject('Appointment/Make Appointment Button'))
		WebUI.setText(findTestObject('Object Repository/Appointment/User Input'), user)
		WebUI.setText(findTestObject('Object Repository/Appointment/Password Input'), password)
		WebUI.takeFullPageScreenshotAsCheckpoint('current_viewport')
		WebUI.click(findTestObject('Object Repository/Appointment/Login button'))
	}

	@When ("el asegurado completa los datos para realizar una reserva (.*)")
	def HacerReservaDeCita(String comment) {
		WebUI.click(findTestObject('Object Repository/Appointment/Calendar Button'))
		WebUI.click(findTestObject('Object Repository/Appointment/Select Day'))
		WebUI.setText(findTestObject('Object Repository/Appointment/Comment Input'), comment)
		WebUI.click(findTestObject('Object Repository/Appointment/Book Appointment Button'))
	}

	@Then ("se visualiza un mensaje de confirmacion '(.*)'")
	def VisualizacionDeCitaConfirmada(String mensaje) {
		WebUI.verifyElementPresent(findTestObject('Object Repository/Appointment/Appointment Confirmation'),20)
	}
}

