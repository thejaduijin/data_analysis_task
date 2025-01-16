// import { useEffect } from 'react';
// import * as echarts from 'echarts';

// const CropComparisonChartTry = ({ data }: any) => {
//   useEffect(() => {
//     const uniqueCrops = [...new Set(data.map((item: any) => item["Crop Name"]))];

//     const chartDom = document.getElementById('crop-comparison-chart');
//     const myChart = echarts.init(chartDom);

//     const years = [...new Set(data.map((item: any) => item.Year))]; // Extract unique years
//     const series = uniqueCrops.map((crop: any) => {
//       const cropData = data
//         .filter((item: any) => item["Crop Name"] === crop)
//         .map((item: any) => ({
//           year: item.Year,
//           yield: item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0,
//         }));

//       const yields = years.map((year: any) => {
//         const yearData = cropData.find((data: any) => data.year === year);
//         return yearData ? yearData.yield : 0;
//       });

//       return {
//         name: crop,
//         type: 'line', 
//         data: yields,
//       };
//     });

//     const option = {
//       // title: {
//       //   text: 'Crop Yield Comparison Over the Years',
//       //   left: 'center',
//       //   top:"-10px"
//       // },
//       tooltip: {
//         trigger: 'axis',
//       },
//       legend: {
//         data: uniqueCrops,
//       },
//       xAxis: {
//         type: 'category',
//         data: years, 
//       },
//       yAxis: {
//         type: 'value',
//         name: 'Yield (Kg/Ha)',
//       },
//       series: series,
//     };

//     myChart.setOption(option);

//     return () => {
//       if (chartDom) {
//         echarts.dispose(chartDom);
//       }
//     };
//   }, [data]);

//   return (
//     <div>
//       <h2 style={{ display:"flex", justifyContent:"center",alignItems:"center"}}>Crop Yield Comparison Over the Years</h2>
//       <div id="crop-comparison-chart" style={{ width: '100%', height: '400px', marginTop:"20px" }} />
//     </div>
//   );
// };

// export default CropComparisonChartTry;
