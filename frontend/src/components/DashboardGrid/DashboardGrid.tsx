import "./DashboardGrid.css";

interface Props {
    children: React.ReactNode;
}

export default function DashboardGrid({ children }: Props) {
    return (
        <div className="dashboard-grid">
            {children}
        </div>
    );
}