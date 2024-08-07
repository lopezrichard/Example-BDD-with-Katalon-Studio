import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint

import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('https://katalon-demo-cura.herokuapp.com/')

WebUI.click(findTestObject('Appointment/Make Appointment Button'))
WebUI.setText(findTestObject('Object Repository/Appointment/User Input'), 'John Doe')

WebUI.setText(findTestObject('Object Repository/Appointment/Password Input'), 'ThisIsNotAPassword')

WebUI.takeScreenshotAsCheckpoint('full_view-2', FailureHandling.CONTINUE_ON_FAILURE)

WebUI.click(findTestObject('Object Repository/Appointment/Login button'))

WebUI.takeFullPageScreenshotAsCheckpoint('current_viewport-2', FailureHandling.CONTINUE_ON_FAILURE)

WebUI.click(findTestObject('Object Repository/Appointment/Calendar Button'))
WebUI.click(findTestObject('Object Repository/Appointment/Select Day'))
WebUI.setText(findTestObject('Object Repository/Appointment/Comment Input'), 'Test Comentario')
WebUI.click(findTestObject('Object Repository/Appointment/Book Appointment Button'))

WebUI.verifyElementPresent(findTestObject('Object Repository/Appointment/Appointment Confirmation'), 20)

