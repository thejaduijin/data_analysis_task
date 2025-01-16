// import { useEffect } from 'react';
// import * as echarts from 'echarts';

// const CropChart = ({ data }: any) => {
//     useEffect(() => {
//         const chartDom = document.getElementById('main');
//         const myChart = echarts.init(chartDom);

//         const cropNames = data.map((item: any) => item["Crop Name"]);
//         const cropData = cropNames.map((crop: any) => {
//             return data
//                 .filter((item: any) => item["Crop Name"] === crop)
//                 .reduce((sum: any, item: any) => sum + (item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0), 0);
//         });

//         const option = {
//             title: {
//                 text: 'Crop Production',
//                 left: 'center',
//             },
//             tooltip: {
//                 trigger: 'axis',
//             },
//             xAxis: {
//                 type: 'category',
//                 data: cropNames,
//             },
//             yAxis: {
//                 type: 'value',
//                 name: "Yield Of Crops (Kg/Ha)",
//             },
//             series: [
//                 {
//                     data: cropData,
//                     type: 'bar',
//                     name: 'Crop Production',
//                     barWidth: '80%',
//                 },
//             ],
//         };

//         // Set chart
//         myChart.setOption(option);

//         // Cleanup on unmount
//         return () => {
//             myChart.dispose();
//         };
//     }, []);

//     return <div id="main" style={{ width: '100%', height: '400px' }} />;
// };

// export default CropChart;
