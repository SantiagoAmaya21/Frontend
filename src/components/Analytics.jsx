import React, { useEffect, useState } from "react";
import {
    getReservationsByDate,
    getReservationsByLab,
    getAverageReservationsByPriority,
    getLabDemandLevels
} from "../api/analytics";

import { Bar, Pie, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../styles/analytics.css";

const Analytics = () => {
    const [reservationsByDate, setReservationsByDate] = useState({});
    const [reservationsByLab, setReservationsByLab] = useState({});
    const [averageByPriority, setAverageByPriority] = useState({});
    const [reservationsByLabDemand, setReservationsByLabDemand] = useState({});

    useEffect(() => {
        getReservationsByDate().then(setReservationsByDate);
        getReservationsByLab().then(setReservationsByLab);
        getAverageReservationsByPriority().then(setAverageByPriority);
        getLabDemandLevels().then(setReservationsByLabDemand);
    }, []);

    return (
        <div className="analytics-container">
            <h1 className="analytics-title">Analytics</h1>
            <h2 className="analytics-subtitle">Analítica de Reservas</h2>

            <div className="chart-grid">
                <div className="chart-item">
                    <h2>Histograma de Reservas</h2>
                    <Bar
                        data={{
                            labels: Object.keys(reservationsByDate),
                            datasets: [{
                                label: "Reservas",
                                data: Object.values(reservationsByDate),
                                backgroundColor: "rgba(75, 192, 192, 0.6)",
                            }]
                        }}
                    />
                </div>

                <div className="chart-item">
                    <h2>Reservas por Laboratorio</h2>
                    <Line
                        data={{
                            labels: Object.keys(reservationsByLab),
                            datasets: [{
                                label: "Cantidad de Reservas",
                                data: Object.values(reservationsByLab),
                                borderColor: "rgb(255, 99, 132)",
                                fill: false
                            }]
                        }}
                    />
                </div>

                <div className="chart-item">
                    <h2>Promedios de Reservas por Prioridad</h2>
                    <Bar
                        data={{
                            labels: Object.keys(averageByPriority),
                            datasets: [{
                                label: "Promedio",
                                data: Object.values(averageByPriority),
                                backgroundColor: "rgba(153, 102, 255, 0.6)",
                            }]
                        }}
                    />
                </div>

                <div className="chart-item">
                    <h2>Demanda por Laboratorio</h2>
                    <Pie
                        data={{
                            labels: Object.keys(reservationsByLabDemand),
                            datasets: [{
                                label: "Reservas",
                                data: Object.values(reservationsByLabDemand),
                                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
                            }]
                        }}
                    />
                </div>
            </div>

            {/* Botón para volver */}
            <button className="back-button" onClick={() => window.history.back()}>
                Volver
            </button>
        </div>
    );
};

export default Analytics;
