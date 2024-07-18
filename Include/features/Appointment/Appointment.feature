Feature: Appointment

  @ID_01
  Scenario Outline: Realizar una cita medica de un cliente
    Given que nuesto cliente ingresa correctamente a nuestra plataforma <user> <password>
    When el asegurado completa los datos para realizar una reserva <comment>
    Then se visualiza un mensaje de confirmacion 'Appointment Confirmation'

    Examples: 
      | user     | password           | comment                        |
      | John Doe | ThisIsNotAPassword | Quiero realizar un cita medica |
