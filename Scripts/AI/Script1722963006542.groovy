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
/*
 * Escribe un caso de prueba en Katalon Studio para realizar los siguientes pasos:
 * 1. Abre el navegador y navega a la URL https://katalon-demo-cura.herokuapp.com/
 * 2. Haz clic en el botón 'Make Appointment' ubicado en 'Object Repository/Appointment/Make Appointment Button'
 * 3. Llena el campo de nombre de usuario con el texto 'John Doe' ubicado en 'Object Repository/Appointment/User Input'
 * 4. Llena el campo de contraseña del usuario con el texto 'ThisIsNotAPassword' ubicado en 'Object Repository/Appointment/Password Input'
 * 5. Haz clic en el botón 'Login' ubicado en 'Object Repository/Appointment/Login Button'
 * 6. Haz clic en el calendario ubicado en 'Object Repository/Appointment/Calendar Button'
 * 7. Selecciona el día del calendario ubicado en 'Object Repository/Appointment/Select Day'
 * 8. Llena el campo de comentarios con el texto 'Test Comentario' ubicado en 'Object Repository/Appointment/Comment Input'
 * 9. Haz clic en el botón 'Book Appointment' ubicado en 'Object Repository/Appointment/Book Appointment Button'
 * 10. Verifica que el div de confirmación de la cita esté presente ubicado en 'Object Repository/Appointment/Appointment Confirmation' con una espera de 10 segundos
 */
// 1. Open the browser and navigate to the specified URL
WebUI.openBrowser('')
WebUI.navigateToUrl('https://katalon-demo-cura.herokuapp.com/')

// 2. Click on the 'Make Appointment' button
WebUI.click(findTestObject('Object Repository/Appointment/Make Appointment Button'))

// 3. Fill the username field with the text 'John Doe'
WebUI.setText(findTestObject('Object Repository/Appointment/User Input'), 'John Doe')

// 4. Fill the user password field with the text 'ThisIsNotAPassword'
WebUI.setText(findTestObject('Object Repository/Appointment/Password Input'), 'ThisIsNotAPassword')

// 5. Click on the 'Login' button
WebUI.click(findTestObject('Object Repository/Appointment/Login Button'))

// 6. Click on the calendar
WebUI.click(findTestObject('Object Repository/Appointment/Calendar Button'))

// 7. Select the day on the calendar
WebUI.click(findTestObject('Object Repository/Appointment/Select Day'))

// 8. Fill the comments field with the text 'Test Comentario'
WebUI.setText(findTestObject('Object Repository/Appointment/Comment Input'), 'Test Comentario')

// 9. Click on the 'Book Appointment' button
WebUI.click(findTestObject('Object Repository/Appointment/Book Appointment Button'))

// 10. Verify that the appointment confirmation div is present with a wait of 10 seconds
WebUI.waitForElementPresent(findTestObject('Object Repository/Appointment/Appointment Confirmation'), 10)