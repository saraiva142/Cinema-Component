export default function CardSessao({ filme, sala, dataHora, valor }) {
    return (
        <div
            className="card text-bg-transparent mb-3"
            style={{
                maxWidth: "350px",
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                border: "none"
            }}
        >
            <div className="card-body">
                <h4 className="card-title fw-bold" style={{ color: "black" }}>
                    {filme}
                </h4>
                <p className="card-text" style={{ color: "black" }}>
                    <strong>Sala:</strong> {sala}
                </p>
                <p className="card-text fs-6" style={{ color: "black" }}>
                    <strong>Data/Hora:</strong> {dataHora}
                </p>
                <p className="card-text fs-6" style={{ color: "black" }}>
                    <strong>Preço:</strong> R${valor}
                </p>
                <button type="button" className="btn btn-light">
                    <a
                        href="../ingressos.html"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        Comprar Ingresso
                    </a>
                </button>
            </div>
        </div>
    );
}
