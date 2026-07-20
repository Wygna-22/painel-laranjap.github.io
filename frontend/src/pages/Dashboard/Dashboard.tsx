import {
    Users,
    CalendarDays,
    CalendarCheck,
    UserCog
} from "lucide-react";

import DashboardGrid from "../../components/DashboardGrid/DashboardGrid";
import KpiCard from "../../components/KpiCard/KpiCard";

export default function Dashboard() {

    return (

        <>

            <h1>Dashboard</h1>

            <DashboardGrid>

                <KpiCard
                    title="Colaboradores"
                    value={182}
                    color="#3B82F6"
                    icon={<Users size={28}/>}
                />

                <KpiCard
                    title="Em Férias"
                    value={12}
                    color="#22C55E"
                    icon={<CalendarDays size={28}/>}
                />

                <KpiCard
                    title="Folgas Hoje"
                    value={18}
                    color="#F97316"
                    icon={<CalendarCheck size={28}/>}
                />

                <KpiCard
                    title="Gestores"
                    value={15}
                    color="#A855F7"
                    icon={<UserCog size={28}/>}
                />

            </DashboardGrid>

        </>
    );
}