import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


# Función para generar el contenido HTML del correo de restablecimiento de contraseña
def generate_html_content():
    html_content = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Correo Electrónico</title>
    <style>
      /* Estilos para la tarjeta y los cuadros */
        .card {
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            margin: 20px;
        }

        .box {
            padding: 20px;
            text-align: center;
            background-color: #f3f3f3;
        }
        </style>
        </head>
        <body>
        <!-- Tarjeta -->
        <div class="card">
            <!-- Primer cuadro -->
            <div class="box" style="background-color: #FF6347;">
            <h3>Cuadro 1</h3>
            <p>Contenido del cuadro 1</p>
            </div>
            <!-- Segundo cuadro -->
            <div class="box" style="background-color: #87CEEB;">
            <h3>Cuadro 2</h3>
            <p>Contenido del cuadro 2</p>
            </div>
            <!-- Tercer cuadro -->
            <div class="box" style="background-color: #7FFF00;">
            <h3>Cuadro 3</h3>
            <p>Contenido del cuadro 3</p>
            </div>
            <!-- Cuarto cuadro -->
            <div class="box" style="background-color: #FFD700;">
            <h3>Cuadro 4</h3>
            <p>Contenido del cuadro 4</p>
            </div>
        </div>
        </body>
    </html>
    """
    return html_content

# Función para mandar un correo con contenido HTML
def send_email(email: str, html_content: str):
    # Configuración del servidor SMTP de Gmail
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    smtp_username = 'contenidoprueba456@gmail.com'
    smtp_password = 'ContenidoPrueba.1234'

    # Construir el mensaje
    msg = MIMEMultipart()
    msg['From'] = smtp_username
    msg['To'] = email
    msg['Subject'] = 'Restablecimiento de contraseña'

    # Adjuntar el contenido HTML al cuerpo del correo
    msg.attach(MIMEText(html_content, 'html'))

    # Establecer conexión con el servidor SMTP
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(smtp_username, smtp_password)

    # Enviar el correo electrónico
    server.sendmail(smtp_username, email, msg.as_string())

    # Cerrar la conexión
    server.quit()