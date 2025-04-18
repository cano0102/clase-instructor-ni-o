Ejercicios con Listas

Ejercicio 1: Gestión de Libros en una Biblioteca

Escenario: Una biblioteca necesita administrar su colección de libros.

Objetivo: Crear un sistema para agregar, prestar y mostrar libros disponibles.

Requisitos:

Agregar nuevos libros (título, autor, ISBN)

Prestar libros (marcar como no disponible)

Mostrar libros disponibles

Buscar libros por autor o título

Restricciones:

No permitir libros con el mismo ISBN

Máximo 3 préstamos por usuario

Validar que el ISBN tenga 13 dígitos

Ejercicio 2: Control de Asistencia a Eventos

Escenario: Organización de un evento con lista de invitados.

Objetivo: Registrar asistencia y gestionar invitados.

Requisitos:

Registrar nuevos invitados (nombre, documento, empresa)

Marcar asistencia al evento

Generar lista de asistentes

Buscar invitado por documento

Restricciones:

Máximo 100 invitados

No permitir documentos duplicados

Validar formato de documento (8-10 dígitos)

Ejercicios con Tuplas

Ejercicio 3: Sistema de Puntuación de Videojuegos

Escenario: Plataforma que registra puntuaciones de jugadores.

Objetivo: Almacenar y mostrar rankings de juegos.

Requisitos:

Registrar nueva puntuación (jugador, juego, puntos, fecha)

Mostrar top 5 puntuaciones por juego

Calcular promedio de puntos por juego

Restricciones:

Puntuaciones deben ser entre 0 y 1000

Fecha en formato YYYY-MM-DD

No permitir modificar puntuaciones registradas

Ejercicio 4: Horario de Clases Universitarias

Escenario: Sistema para consultar horarios de materias.

Objetivo: Permitir a estudiantes verificar horarios.

Requisitos:

Almacenar horarios (materia, profesor, días, hora)

Consultar materias por día

Buscar materias por profesor

Restricciones:

Días válidos: Lunes a Viernes

Horas en formato 24h (8:00 - 20:00)

No permitir solapamiento de horarios

Ejercicios con Diccionarios

Ejercicio 5: Sistema de Gestión de Proyectos

Escenario: Equipo que necesita organizar proyectos y tareas.

Objetivo: Administrar proyectos, asignar tareas y miembros.

Requisitos:

Crear proyectos (nombre, fecha inicio, fecha fin)

Asignar miembros a proyectos

Agregar tareas con prioridad (alta, media, baja)

Mostrar estado de proyectos

Restricciones:

Fechas deben ser válidas (inicio < fin)

Prioridades solo pueden ser los valores definidos

Máximo 5 miembros por proyecto

Ejercicios con Conjuntos (Sets)

Ejercicio 7: Sistema de Intereses de Usuarios

Escenario: Red social que gestiona intereses de usuarios.

Objetivo: Encontrar coincidencias entre intereses.

Requisitos:

Registrar usuarios (nombre, edad, intereses)

Encontrar usuarios con intereses similares

Mostrar intereses únicos en la plataforma

Sugerir nuevos intereses basados en coincidencias

Restricciones:

Intereses deben ser palabras de 3-20 caracteres

Máximo 10 intereses por usuario

No permitir intereses duplicados por usuario

Ejercicio Integrador Avanzado

Ejercicio 9: Sistema de Vuelos y Reservas

Escenario: Aerolínea que necesita gestionar vuelos y pasajeros.

Objetivo: Sistema completo de reservas de vuelos.

Requisitos:

Registrar vuelos (número, origen, destino, hora, asientos)

Reservar asientos (pasajero, documento, vuelo, asiento)

Cancelar reservas

Mostrar disponibilidad de vuelos

Generar tarjeta de embarque

Restricciones:

Asientos en formato A1, B2, etc. (máx. 5 filas A-E, 10 columnas 1-10)

No permitir asientos duplicados en mismo vuelo

Validar formato de hora HH:MM

Documentos deben ser únicos por vuelo

Ejercicios Adicionales (30 nuevos ejercicios)

Ejercicio 10: Registro de Vehículos

Registrar vehículos con matrícula y propietario.

Consultar vehículos registrados.

Eliminar vehículos por matrícula.

Ejercicio 11: Gestión de Pedidos en Restaurante

Registrar pedidos con platos y precios.

Calcular total de un pedido.

Mostrar pedidos pendientes y entregados.

Ejercicio 12: Sistema de Reservas de Salas de Conferencias

Registrar reserva con fecha y duración.

Consultar disponibilidad de salas.

Cancelar reserva por ID.

Ejercicio 13: Control de Stock en Farmacia

Registrar medicamentos con fecha de vencimiento.

Generar alerta para productos próximos a vencer.

Consultar disponibilidad por medicamento.

Ejercicio 14: Gestión de Notas Escolares

Registrar calificaciones de estudiantes.

Calcular promedio por materia.

Identificar estudiantes con bajo rendimiento.

Ejercicio 15: Registro de Mascotas en Veterinaria

Registrar mascota con nombre, especie y dueño.

Programar citas médicas.

Generar historial clínico por mascota.

Ejercicio 16: Sistema de Administración de Club Deportivo

Registrar socios con cuotas pagadas.

Generar lista de socios activos.

Registrar actividades deportivas.

Ejercicio 17: Gestión de Personal en una Empresa

Registrar empleados con cargo y salario.

Calcular nómina total.

Filtrar empleados por cargo.

Ejercicio 18: Registro de Eventos Culturales

Registrar eventos con fecha y ubicación.

Consultar eventos próximos.

Registrar asistentes.

Ejercicio 19: Sistema de Inventario de Librería

Registrar libros en stock.

Consultar disponibilidad por título.

Generar reporte de ventas.

Ejercicio 20: Administración de Cuentas Bancarias

Registrar cuentas con saldo inicial.

Realizar depósitos y retiros.

Consultar saldo disponible.


EJERCICIOS BORRADOS POR BRANDON FANATIC

1. Sistema de Gestión de Estudiantes

Descripción:
Desarrollar una aplicación para gestionar el registro de estudiantes de una institución educativa, permitir consultar, verificar, eliminar y generar reportes.

Requisitos:

    Registro de la Acreditación solicitando:

        Nombre (no vacío)

        Edad (entero positivo)

        Promedio de notas (número entre 0,0 y 5.0)

        Carrera (lista predefinida: Ingeniería, Ciencias, Arte).

    Estudiante Estudiante por nombre.

    Estudiante por nombre.

    Mostrar todos los estudiantes por medio.

    Generar un reporte con:

        Total de estudiantes.

        Promedio general de notas.

        Estudiante con el mejor y peor medio (nombre y nota).

    Menú interactivo con validaciones (intento-excepto).

    Usar listas o diccionarios para almacenar datos.

2. Sistema de Reservas de Hotel

Descripción:
Crear un programa para gestionar reservas de habitaciones en un hotel, con opciones para acordar, y cancelar reservas, además de reportes.

Requisitos:

    Secretario de reserva solicitando:

        Nombre del cliente (no vacío).

        Tipo de habitación (Individual, Doble, Suite).

        Noches (entero positivo).

        Precio por noche (mayor que cero).

    Consultora reserva por nombre de cliente.

    Cancelar reserva por nombre.

    Mostrar todas las reservas ordenadas por noches.

    Generar un reporte con:

        Total de reservas activas.

        ingresos potenciales (suma de precios).

        Reserva más larga y más corta (nombre y noches).

    Menú con manejo de excepciones.

    Usar diccionarios para almacenar reservas.

3. Gestión de Tareas Pendientes

Descripción:
Aplicación para administrar tareas personales, con funciones para agregar, completar y priorizar tareas.

Requisitos:

    Agregar tarea solicitando:

        Descripción (no vacía).

        Prioridad (Alta, Medios, Baja).

        Fecha límite (formato dd/mm/aaaaa).

    Marcar tarea como completada.

    Embaracción por descripción.

    Las tareas más raras por la prioridad y la fecha.

    Generar un reporte con:

        Total de tareas pendientes/completadas.

        Tarea más urgente (prioridad Alta y fecha próxima).

    Menú interactivo con validaciones (ej.: fecha incorrecta).

    Usar listas de diccionarios para almacenar tareas.

4. Sistema de Ventas de Tienda

Descripción:
Programa para gestionar ventas de una tienda, registrardo productos vendidos y generando estadísticas.

Requisitos:

    Secretario de venta solicitando:

        Nombre del producto (no vacío).

        (Entero positivo).

        Precio unitario (alcalde que cero).

    Consultador sales por producto.

    Mostrar todas las ventas ordenadas por fecha.

    Generar un reporte con:

        Total de ventas (en dinero).

        Producto más vendido (nombre y cantidad).

        Promedio de ventas por producto.

    Menú con try-except para precios/cantidades inválidas.

    Usar una lista de tuplas para almacenar ventas.

Nota: Todos los ejercicios debe incluir:

    Modularización con funciones.

    Validación de entradas.

    Colecciones (listas, diccionarios o tuplas).

    Ciclos y condicionales.