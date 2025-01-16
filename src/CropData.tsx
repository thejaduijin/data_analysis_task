import { useEffect } from 'react';
import * as echarts from 'echarts';
import CropComparisonChart from './CropComparisonChart';

const CropCharts = ({ data }: any) => {
    useEffect(() => {
        const uniqueCrops = data.map((item: any) => item["Crop Name"]);

        uniqueCrops.forEach((crop: any, index: any) => {
            const cropData = data
                .filter((item: any) => item["Crop Name"] === crop)
                .map((item: any) => ({
                    year: item.Year,
                    yield: item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0,
                }));

            const years = cropData.map((data: any) => data.year);
            const yields = cropData.map((data: any) => data.yield);

            const chartDom = document.getElementById(`chart-${index}`);
            if (chartDom) {
                const myChart = echarts.init(chartDom);

                const option = {
                    title: {
                        text: `${crop} Yield Over Time`,
                        left: 'center',
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    xAxis: {
                        type: 'category',
                        data: years,
                    },
                    yAxis: {
                        type: 'value',
                        name: 'Yield (Kg/Ha)',
                    },
                    series: [
                        {
                            data: yields,
                            type: 'bar',
                            name: crop,
                            barWidth: '80%',
                        },
                    ],
                };

                myChart.setOption(option);
            }
        });

        return () => {
            uniqueCrops.forEach((_: any, index: any) => {
                const chartDom = document.getElementById(`chart-${index}`);
                if (chartDom) {
                    echarts.dispose(chartDom);
                }
            });
        };
    }, [data]);

    return (
        <>
            {data &&
                [...new Set(data.map((item: any) => item["Crop Name"]))].map((crop: any, index: any) => (
                    <div key={index} id={`chart-${index}`} style={{ width: '100%', height: '400px', marginBottom: '20px' }} />
                ))
            }
            <CropComparisonChart data={data}></CropComparisonChart>
        </>
    );
};

export default CropCharts;
