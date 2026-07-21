import "./Relatorios.css";
import ReportCard from "../../components/ReportCard/ReportCard";
import { relatorioService } from "../../services/relatorioService";
import {
    Users,
    UserCog,
    CalendarDays,
    CalendarCheck,
    History,
} from "lucide-react";

export default function Relatorios() {

    return (
        <div className="relatorios">

            <div className="relatorios-header">

                <h1>Relatórios</h1>

                <p>
                    Exporte informações do Painel Laranja em Excel.
                </p>

            </div>

            <div className="filtros-card">
                <h3>Filtros</h3>
                <div className="filtros-grid">
                    <div className="campo">
                        <label>Cidade</label>
                        <select>
                            <option>Todas as cidades</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label>Situação</label>
                        <select>
                            <option>Todas as situações</option>
                            <option>Ativo</option>
                            <option>Inativo</option>
                            <option>Férias</option>
                            <option>Folga</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label>Gestor</label>
                        <select>
                            <option>Todos os gestores</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="relatorios-grid">

                <ReportCard
                    icon={<Users size={30} />}
                    titulo="Colaboradores"
                    descricao="Lista completa dos colaboradores."
                    onExcel={() => relatorioService.colaboradores()}
                    onPdf={() => alert("Em breve")}
                />

                <ReportCard
                    icon={<UserCog size={30} />}
                    titulo="Gestores"
                    descricao="Lista completa dos gestores."
                    onExcel={() => relatorioService.gestores()}
                    onPdf={() => alert("Em breve")}
                />

                <ReportCard
                    icon={<CalendarDays size={30} />}
                    titulo="Férias"
                    descricao="Relatório de férias."
                    onExcel={() => relatorioService.ferias()}
                    onPdf={() => alert("Em breve")}
                />

                <ReportCard
                    icon={<CalendarCheck size={30} />}
                    titulo="Folgas"
                    descricao="Relatório de folgas."
                    onExcel={() => relatorioService.folgas()}
                    onPdf={() => alert("Em breve")}
                />

                <ReportCard
                    icon={<History size={30} />}
                    titulo="Histórico"
                    descricao="Histórico de eventos."
                    onExcel={() => relatorioService.historico()}
                    onPdf={() => alert("Em breve")}
                />

            </div>

        </div>
    );
}