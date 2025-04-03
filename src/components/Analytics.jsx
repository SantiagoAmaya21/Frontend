import React, { useEffect, useState } from "react"; // Importa React y los hooks necesarios
import { getReservationsByDate, getReservationsByLab, getAverageReservationsByPriority, getLabDemandLevels } from "../api/analytics"; // Importa funciones de la API para obtener datos
import { Bar, Pie, Line } from "react-chartjs-2"; // Importa los componentes de gráficos de Chart.js
import Chart from "chart.js/auto"; // Importa Chart.js
import "../styles/analytics.css"; // Importa los estilos de la clase

// Componente Analytics
const Analytics = () => {
  // Define los estados para almacenar los datos de las reservas
  const [reservationsByDate, setReservationsByDate] = useState({});
  const [reservationsByLab, setReservationsByLab] = useState({});
  const [averageByPriority, setAverageByPriority] = useState({});
  const [reservationsByLabDemand, setReservationsByLabDemand] = useState({});

  // useEffect para obtener los datos cuando el componente se monta
  useEffect(() => {
    // Llama a las funciones de la API y actualiza el estado con los resultados
    getReservationsByDate().then(setReservationsByDate);
    getReservationsByLab().then(setReservationsByLab);
    getAverageReservationsByPriority().then(setAverageByPriority);
    getLabDemandLevels().then(setReservationsByLabDemand);
  }, []); // El array vacío asegura que se ejecute solo una vez después del primer renderizado

  return (
    <div className="analytics-container">
      <h1>Analítica de Reservas</h1>

      <div className="chart-grid">
        {/* Histograma de reservas por fecha */}
        <div className="chart-item">
          <h2>Histograma de Reservas</h2>
          <Bar
            data={{
              labels: Object.keys(reservationsByDate), // Usa las claves de las reservas por fecha como etiquetas
              datasets: [{
                label: "Reservas",
                data: Object.values(reservationsByDate), // Usa los valores de las reservas por fecha como datos
                backgroundColor: "rgba(75, 192, 192, 0.6)", // Color de fondo de las barras
              }]
            }}
          />
        </div>

        {/* Reservas por laboratorio en un gráfico de líneas */}
        <div className="chart-item">
          <h2>Reservas por Laboratorio</h2>
          <Line
            data={{
              labels: Object.keys(reservationsByLab), // Usa las claves de las reservas por laboratorio como etiquetas
              datasets: [{
                label: "Cantidad de Reservas",
                data: Object.values(reservationsByLab), // Usa los valores de las reservas por laboratorio como datos
                borderColor: "rgb(255, 99, 132)", // Color de la línea
                fill: false // No llena el área debajo de la línea
              }]
            }}
          />
        </div>

        {/* Promedio de reservas por prioridad en un gráfico de barras */}
        <div className="chart-item">
          <h2>Promedios de Reservas por Prioridad</h2>
          <Bar
            data={{
              labels: Object.keys(averageByPriority), // Usa las claves de los promedios por prioridad como etiquetas
              datasets: [{
                label: "Promedio",
                data: Object.values(averageByPriority), // Usa los valores de los promedios como datos
                backgroundColor: "rgba(153, 102, 255, 0.6)", // Color de fondo de las barras
              }]
            }}
          />
        </div>

        {/* Pie chart para mostrar la demanda por laboratorio */}
        <div className="chart-item">
          <h2>Demanda por Laboratorio</h2>
          <Pie
            data={{
              labels: Object.keys(reservationsByLabDemand), // Usa las claves de la demanda por laboratorio como etiquetas
              datasets: [{
                label: "Reservas",
                data: Object.values(reservationsByLabDemand), // Usa los valores de la demanda por laboratorio como datos
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"], // Colores para cada sector del gráfico
              }]
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
