import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    Tooltip,
} from "recharts";

interface Props{
    data:{
        cidade:string;
        quantidade:number;
    }[];
}

export default function CityChart({data}:Props){

    return(

        <ResponsiveContainer width="100%" height={450}>

            <BarChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 30,
                    bottom: 70,
                }}
            >

                <XAxis
                    dataKey="cidade"
                    interval={0}
                    angle={-20}
                    textAnchor="end"
                    height={90}
                    tick={{
                        fontSize: 11,
                        fill: "#000000",
                    }}

                />

                <Tooltip/>

                <Bar
                    dataKey="quantidade"
                    fill="#F97316"
                    radius={[8, 8, 0, 0]}
                    barSize={38}
                />

            </BarChart>

        </ResponsiveContainer>

    );

}