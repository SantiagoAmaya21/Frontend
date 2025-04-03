import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createReservation, getAllReservations } from "../api/reservesAPI";
import "../styles/createReserve.css";
import laboratoriesImage from "../img/laboratories.png";

const CreateReserve = () => {
    const navigate = useNavigate();

    const [labName, setLabName] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [purpose, setPurpose] = useState("");
    const [priority, setPriority] = useState("");
    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        loadReserves();
    }, []);

    const loadReserves = async () => {
        try {
            const data = await getAllReservations();
            setReserves(data);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleCreateReservation = async () => {
        if (!labName || !start || !end || !purpose || !priority) {
            alert("Please complete all fields!");
            return;
        }

        try {
            await createReservation(labName, start, end, purpose, priority);
            alert("Reservation created successfully!");
            setLabName("");
            setStart("");
            setEnd("");
            setPurpose("");
            setPriority("");
            loadReserves();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="create-reserve-container">
            <header className="header">
                <h1>Laboratory Reserves</h1>
            </header>

            <div className="header-container">
                <img src={laboratoriesImage} alt="Laboratories" />

                <div className="form-container">
                    <h2>Create Reservation</h2>

                    <label htmlFor="labName">Laboratory:</label>
                    <input
                        type="text"
                        id="labName"
                        value={labName}
                        onChange={(e) => setLabName(e.target.value)}
                    />

                    <label htmlFor="start">Start:</label>
                    <input
                        type="datetime-local"
                        id="start"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                    />

                    <label htmlFor="end">End:</label>
                    <input
                        type="datetime-local"
                        id="end"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                    />

                    <label htmlFor="purpose">Purpose:</label>
                    <input
                        type="text"
                        id="purpose"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                    />

                    <label htmlFor="priority">Priority:</label>
                    <input
                         type="text"
                         id="priority"
                         value={priority}
                         onChange={(e) => setPriority(e.target.value)}
                    />

                    <div>
                        <button onClick={() => navigate("/user_dashboard")}>Back</button>
                        <button onClick={handleCreateReservation}>Create</button>
                    </div>
                </div>
            </div>

            <section className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Laboratory</th>
                            <th>User</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Purpose</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reserves.map((reserve) => (
                            <tr key={reserve.id}>
                                <td>{reserve.id}</td>
                                <td>{reserve.laboratoryname}</td>
                                <td>{reserve.username}</td>
                                <td>{reserve.startDateTime}</td>
                                <td>{reserve.endDateTime}</td>
                                <td>{reserve.purpose}</td>
                                <td>{reserve.priority}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default CreateReserve;
