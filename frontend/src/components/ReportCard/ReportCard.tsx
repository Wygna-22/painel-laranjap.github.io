import "./ReportCard.css";
import { FileText, FileSpreadsheet } from "lucide-react";
interface Props {
    icon: React.ReactNode;
    titulo: string;
    descricao: string;
    onExcel: () => void;
    onPdf: () => void;
}

export default function ReportCard({
    icon,
    titulo,
    descricao,
    onExcel,
    onPdf,
}: Props) {
    return (
        <div className="report-card">
            <div className="report-icon">
                {icon}
            </div>

            <div className="report-content">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>

            <div className="report-actions">
                <button
                    className="pdf-button"
                    onClick={onPdf}
                >
                    <FileText size={16} />
                    PDF
                </button>

                <button
                    className="excel-button"
                    onClick={onExcel}
                >
                    <FileSpreadsheet size={16} />
                    Excel
                </button>
            </div>
        </div>
    );
}