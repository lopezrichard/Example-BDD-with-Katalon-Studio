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
 * 5. Toma una captura de pantalla con el nombre de punto de control 'full_view-2' y continúa en caso de fallo
 * 6. Haz clic en el botón 'Login' ubicado en 'Object Repository/Appointment/Login Button'
 * 7. Toma una captura de pantalla de página completa con el nombre de punto de control 'current_viewport-2' y continúa en caso de fallo
 * 8. Haz clic en el calendario ubicado en 'Object Repository/Appointment/Calendar Button'
 * 9. Selecciona el día del calendario ubicado en 'Object Repository/Appointment/Select Day'
 * 10. Llena el campo de comentarios con el texto 'Test Comentario' ubicado en 'Object Repository/Appointment/Comment Input'
 * 11. Haz clic en el botón 'Book Appointment' ubicado en 'Object Repository/Appointment/Book Appointment Button'
 * 12. Verifica que el div de confirmación de la cita esté presente ubicado en 'Object Repository/Appointment/Appointment Confirmation' con una espera de 10 segundos
*/
