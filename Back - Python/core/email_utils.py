from Api.models.reset_password import ResetPassword
from email.mime.multipart import MIMEMultipart
from sqlalchemy.orm import Session
from email.mime.text import MIMEText
from dotenv import load_dotenv
import smtplib
import os
import random

# Obtener la ruta al archivo .env
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')

# Cargar variables de entorno desde el archivo .env
load_dotenv(dotenv_path)

def generate_verification_code(db: Session):
    while True:
        # Generar un número aleatorio de 6 dígitos
        verification_code = ''.join(random.choices('0123456789', k=6))
        
        # Verificar si el código generado ya existe en la base de datos
        existing_code = db.query(ResetPassword).filter(ResetPassword.codigo_verificacion == verification_code).first()
        if not existing_code:
            return verification_code

# Función para generar el contenido HTML del correo de restablecimiento de contraseña
def generate_html_content(verification_code: str):
    html_content = """
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recuperación de Contraseña</title>
        <style>
            /* Estilos generales */
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: black; /* Cambiado a negro */
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
        
            .content {
                padding: 20px;
                text-align: center;
                color: #fff; /* Color de texto blanco */
            }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="content">
                <h2>Recuperación de Contraseña</h2>
                <p>Utiliza el siguiente código para restablecer tu contraseña:</p>
                <h1 style="font-size: 36px; margin-bottom: 20px;">""" + verification_code + """</h1>
                <p>Si no has solicitado este cambio, por favor ignora este mensaje.</p>
                <p>¡Gracias!</p>
            </div>
        </div>
    </body>

    </html>
    """
    return html_content


# Función para mandar un correo con contenido HTML
def send_email(email: str, html_content: str):
    # Obtener las credenciales del correo electrónico desde las variables de entorno
    remitente = os.getenv("GM_USER")
    password = os.getenv("GM_PASS")

    # Crear un objeto MIMEMultipart
    msg = MIMEMultipart()
    msg['From'] = remitente
    msg['To'] = email
    msg['Subject'] = "Codigo de recuperacion de contraseña"

    # Agregar el contenido HTML al correo
    msg.attach(MIMEText(html_content, 'html'))

    # Crear una conexión con el servidor SMTP de Gmail
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(remitente, password)

    # Enviar el correo
    server.sendmail(remitente, email, msg.as_string())

    # Cerrar la conexión con el servidor SMTP
    server.quit()

 