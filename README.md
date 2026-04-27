# CRUD-SpringBoot-React
Aquí estoy haciendo uso de SpringBoot con JPA para realizar todo mi backend, el cual se comunica mediante un APIs REST a mi frontend que lo realice con React el cual el diseño unicamente fue con Bootstrap sin una plantilla o algo por estilo.

# Herramientas 
Frontend: React
Backend: Spring Boot - JPA
Base de datos: MySQL
Comunicación: API REST

# Requisitos
Node.js
Java (JDK 17 o superior)
Maven
MySQL
IntelliJ IDEA (recomendado para el backend)

# Configuración MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/crud_db 
spring.datasource.username=TU_USUARIO 
spring.datasource.password=TU_PASSWORD 
spring.jpa.hibernate.ddl-auto=update

# Pasos para ejecutar el proyecto
1 git clone https://github.com/BrandhomMG/CRUD-SpringBoot-React.git 
  cd CRUD-SpringBoot-React

2 Abrir IntelliJ IDEA abriendo el proyecto backend y ejecutando la clase principal (@SpringBootApplication).

3 Para ejecutar el frontend puede ser en VSC, ejecutar cada linea en la terminal por separado 
  cd frontend 
  npm install
  npm start

Para que funcione sin problema debe estar ejecutandose el back antes del front

# Autor
Brandhom Monroy

# Perfil de Linkedin
Busqueda laboral activa
www.linkedin.com/in/brandhom-moisés-monroy-b7a831264