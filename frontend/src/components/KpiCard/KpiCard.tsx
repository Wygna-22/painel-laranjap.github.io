import "./KpiCard.css";

interface Props {
    title: string;
    value: number | string;
    icon: React.ReactNode;
    color: string;
}

export default function KpiCard({
    title,
    value,
    icon,
    color
}: Props) {
    return (
        <div className="kpi-card">

            <div
                className="kpi-icon"
                style={{ background: color }}
            >
                {icon}
            </div>

            <div className="kpi-info">
                <span>{title}</span>
                <h2>{value}</h2>
            </div>

        </div>
    );
}