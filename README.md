# Clínica Online San Francisco
Bienvenido a La Clínica Online San Francisco, una aplicación online construida en las ultimas tecnologias de frontend y bases de datos con Angular 17 y Firebase. La clínica cuenta con esta plataforma de fácil acceso y entendimiento para la gestion de usuarios, turnos, historias clinicas y que tanto los paceintes como los especialistas tengan a mano sus turnos.  La clinica trabaja los 7 días de la semana, de lunes a viernes en el horario de 8:00 a 19:00. Los especialistas cargan sus horarios disponibles y sus diversas especialidades para atender a los pacientes según su disponibilidad. Los turnos se solicitan a través de la página seleccionando al profesional y la especialidad deseada. Además, cuenta con historia clinica de los pacientes que se guarda y exporta a pdf.

## Podes acceder aqui:
## https://clinica-3c199.web.app/

## Nuestro home:

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/1373aee8-e0c2-4eaf-954e-a632ae39446e)

# Pantallas y Funcionalidades
## Login
En esta sección, los usuarios incian sesión. Cuenta con accesos rápidos.

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/8359df8e-120a-4850-a10c-a38619757abd)

## Registrarse
Aquí los usuarios pueden registrarse en la página. Los formularios de registro varían entre Paciente y Especialista, adaptándose a las necesidades de cada tipo de usuario en el mismo. Utiliza validacón de captcha, validación de cmapos del formulario y la posibilidad de subir foto de perfil

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/09203761-00d8-46cf-a7b6-2b8a033d6ce8)

El Especialista requiere una habilitación posterior del admin. Ambos requieren validar su email.

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/34b8913d-507c-4194-9c43-7236b2e4b8dc)

## Perfil

- **Perfil de Administrador**: Página principal de perfil del Administrador, donde puede acceder a sus datos personales y funciones administrativas.
- 
 ![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/ca39e0c2-b86e-4c4b-9083-593b7cbad941)

- **Perfil de Especialista**: Página principal de perfil del Especialista, donde puede acceder a sus datos personales y gestionar sus horarios de trabajo.
- 
 ![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/bf7c1671-addd-499c-8c95-35c847c123a7)

 ![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/3362f30c-fc6f-48da-87ab-f0e76d2ab564)
 
 ![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/5897baad-f08c-4eb6-9bf1-ccffa8b11e37)

- **Perfil de Paciente**: Página principal de perfil del Paciente, donde puede ver su foto alternativa y acceder a sus datos personales de su historia clínica en general y por especialista y exportarlas a PDF.
- 
 ![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/f5e147b9-cf98-40e1-bd76-1e22ab8be1a0)

 ![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/5b67455d-ead2-4d62-aa6d-b3c2ce10d7f0)
 
 ![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/77671100-50ca-4cf0-b240-e5dd4c72bfdb)


## Turnos
-**Turnos para Administrador**: El admin puede listar los turnos y solicitar para un paciente. El listado permite filtrar tanto por especialista, como especialidad y ambas a la vez. Ademas, puede cancelar turnos y ver motivos de cancelación

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/fa10061a-00ba-447c-927b-1c3cb30200fc)

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/3235bdcb-d219-4684-8dd3-8740158066a7)

-**Turnos para Especialista**: Cada Especialista puede visualizar solo sus propios turnos y gestionarlos. La gestión permite: Rechazar un turno, Aceptarlo, Finzaliarlo y cargar la historia clínica con hasta 3 campos dinámicos, ver diagnósticos (o reseñas) y la calificación del paciente. Ademas permite filtrar por paceinte, especialidad y un buscador de campos dinámicos

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/e58f7285-3e29-4b36-ae67-e4eccfee4bc6)

-**Turnos para Paciente**: Cada Paciente puede visualizar solo sus propios turnos y gestionarlos. Eso incluye la posibilidad de solicitar para si mismo,  cancelar un turno y cargar el motivo, ver la reseña una vez finalizado y cargar un comentario a la encuesta por la atención.

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/6c435f45-1e1a-482d-9795-a6d4a211d1ac)

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/c70c2a46-445a-409f-a757-1e1ad4a3bd9a)

## Usuarios
El admin puede listar los usuarios y allí descargar un CSV de todos, de cada uno y decidir si habilitarlos o no.

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/f52b4fbb-beff-4f31-99e6-c7c70f4cd7f9)

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/7ba6be0b-a25d-4d54-ab6a-3d77e8d81e87)


## Alta admin
El admin es el único que puede dar de alta otros admins. Requiere posterior validación por email. 

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/931bd9f9-56ec-4542-9e56-88bb828c9768)

## Pacientes
El especialista cuenta con una sección de pacientes donde solo estan aquellos que se atendieron al menos una vez con el. Allí, segun los turnos, accede a su historia clínica descargable en PDF, puede ver los comentarios del paciente y el diagnóstico cargado 

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/c6599fcf-91ca-4a7d-bf77-4af0a35a5fb1)

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/1598ab36-c96d-45fc-9db6-d5570d2b0593)

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/de1df471-48da-4827-bb93-f9dc85322479)

## Gráficos
El admin cuenta con 4 tipos de gráficos distintos para el mejor entendimiento del flujo de turnos de la clinica

Todos los gráficos son descargables en PDF, los logs en CSV
![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/309670fd-6f7c-4736-8ff8-0f2b072fc11b)

![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/22b0b53c-4dba-4265-a62d-4ba64ee0c73f)

-**Cantidad de turnos según especialidad**:
![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/66ccd284-89b5-45bd-b954-e2bfa43f3b0b)

-**Cantidad de turnos por día**:
![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/b7e0b8d2-c10a-4b3a-bbc0-81e8ebc40179)

-**Cantidad de turnos por médico según lapso de tiempo**:
![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/d14bf30f-ca03-442a-b7d3-022cd9b3c701)

-**Cantidad de turnos finalziados por médico según lapso de tiempo**:
![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/de486752-3429-4b4c-b0d7-4b28e90239f1)

-**Descargar logs en CSV:
![image](https://github.com/francisco-allende/LaboIV-Tp-Clinica/assets/74782019/2593f73b-9b9e-444c-8928-1ccf5e1e1879)

## Roles y Funcionalidades

### Administrador

El Administrador tiene acceso a una amplia gama de funcionalidades que le permiten gestionar la clínica de manera eficiente:

- **Perfil del Administrador**: Acceso a sus datos personales.
- **Habilitación de Especialistas**: Ver y gestionar el listado de Especialistas con opciones de habilitación/deshabilitación.
- **Alta de Administrador**: Registrar a nuevos administradores.
- **Ver Usuarios**: Acceso a la lista de todos los usuarios registrados en la clínica.
- **Sacar Turno**: Solicitar turnos para cualquiera de los pacientes de la clínica.
- **Ver Turnos**: Visualizar todos los turnos de la clínica, con opciones de cancelación y comentarios sobre los motivos. Incluye filtros para búsqueda por especialista y especialidad.
- **Gráficos de Informes**: Acceso a informes detallados sobre el log de ingresos, gráficos de turnos por especialidad, día, solicitados por especialidad y finalizados por especialidad. Los informes pueden descargarse en formato PDF.

### Especialista

El Especialista puede acceder a funcionalidades específicas para gestionar su trabajo y sus pacientes:

- **Perfil del Especialista**: Acceso a sus datos personales y asignación de horarios de trabajo.
- **Pacientes**: Ver información de los pacientes que se han atendido con él al menos una vez.
- **Turnos**: Gestión completa de los turnos asignados, incluyendo aceptación, rechazo, finalización o cancelación de los mismos. También puede llenar formularios de diagnóstico al finalizar un turno y dejar comentarios en caso de cancelar o rechazar un turno.

### Paciente

El Paciente tiene acceso a funcionalidades que le permiten gestionar sus turnos y su perfil:

- **Perfil del Paciente**: Acceso a sus datos personales.
- **Sacar Turno**: Solicitar turnos médicos seleccionando especialidades y viendo los turnos disponibles de los especialistas.
- **Mis Turnos**: Visualizar y gestionar todos sus turnos, con opciones de cancelación y comentarios sobre los motivos. Al finalizar un turno, puede calificar la atención del especialista y ver la reseña del turno. Incluye filtros para búsqueda por cualquier campo del turno.



