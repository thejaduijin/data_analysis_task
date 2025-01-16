import { useEffect } from 'react';
import * as echarts from 'echarts';

const CropComparisonChart = ({ data }: any) => {
    useEffect(() => {
        const uniqueCrops = [...new Set(data.map((item: any) => item["Crop Name"]))];

        //average yield for each crop
        const cropYields = uniqueCrops.map((crop: any) => {
            const cropData = data.filter((item: any) => item["Crop Name"] === crop);
            const totalYield = cropData.reduce((sum: any, item: any) => sum + (parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0), 0);
            const averageYield = totalYield / cropData.length;
            return { crop, averageYield };
        });

        // Extract crop names and average yields
        const crops = cropYields.map((item: any) => item.crop);
        const yields = cropYields.map((item: any) => item.averageYield);
        console.log(crops, "crops", yields);


        //to use chart
        const chartDom = document.getElementById('crop-yield-chart');
        const myChart = echarts.init(chartDom);

        // Chart options
        const option = {
            title: {
                text: 'Crop Yield Comparison (Average)',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} Kg/Ha',
            },
            xAxis: {
                type: 'category',
                data: crops,
                axisLabel: {
                    rotate: 45, //to avoid overlap
                },
            },
            yAxis: {
                type: 'value',
                name: 'Yield (Kg/Ha)',
            },
            series: [
                {
                    data: yields, // Average yields on y-axis
                    type: 'bar',
                    barWidth: '60%',
                },
            ],
        };

        //Set chart
        myChart.setOption(option);

        //Cleanup on unmount
        return () => {
            if (chartDom) {
                echarts.dispose(chartDom);
            }
        };
    }, [data]);

    return (
        <>
            <div id="crop-yield-chart" className='baseStyle'/>
        </>
    );
};

export default CropComparisonChart;
